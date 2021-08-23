import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { EmailForm } from '../form';
import { ErrorMessageConfig } from '../../utils';
import axios from 'axios';

jest.mock('axios');

describe('page home form', () => {
  test('form render', async () => {
    const { container } = render(<EmailForm onSuccess={jest.fn}></EmailForm>);
    const inputFullName = container.querySelector('input[name=fullName]');
    const inputEmail = container.querySelector('input[name=email]');
    const inputConfirmEmail = container.querySelector(
      'input[name=confirmEmail]'
    );
    const buttonSubmit = container.querySelector('button[type=submit]');

    expect(inputFullName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputConfirmEmail).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();
    expect(screen.queryByText(ErrorMessageConfig.fullNameRequired)).toBeNull();
  });

  test('form input validate', async () => {
    const { container } = render(<EmailForm onSuccess={jest.fn}></EmailForm>);

    const inputFullName = container.querySelector('input[name=fullName]');

    // blur without input change
    await act(async () => {
      fireEvent.blur(inputFullName);
    });

    expect(
      screen.getByText(ErrorMessageConfig.fullNameRequired)
    ).toBeInTheDocument();

    // blur with input change, but value.length < 3
    await act(async () => {
      fireEvent.change(inputFullName, {
        target: {
          value: '1',
        },
      });
    });
    await act(async () => {
      fireEvent.blur(inputFullName);
    });
    expect(
      screen.getByText(ErrorMessageConfig.fullName3Letters)
    ).toBeInTheDocument();

    // input has value more than and eq 3 letters
    await act(async () => {
      fireEvent.change(inputFullName, {
        target: {
          value: '123',
        },
      });
    });

    expect(
      screen.queryByText(ErrorMessageConfig.fullName3Letters)
    ).not.toBeInTheDocument();
  });

  test('form submit error and success', async () => {
    const successFn = jest.fn();
    const { container } = render(<EmailForm onSuccess={successFn}></EmailForm>);
    const inputFullName = container.querySelector('input[name=fullName]');
    const inputEmail = container.querySelector('input[name=email]');
    const inputConfirmEmail = container.querySelector(
      'input[name=confirmEmail]'
    );
    const buttonSubmit = container.querySelector('button[type=submit]');
    await act(async () => {
      fireEvent.change(inputFullName, {
        target: {
          value: '123',
        },
      });
    });

    await act(async () => {
      fireEvent.change(inputEmail, {
        target: {
          value: 'test@test.com',
        },
      });
    });

    await act(async () => {
      fireEvent.change(inputConfirmEmail, {
        target: {
          value: 'test@test.com',
        },
      });
    });

    const post = axios.post as any;
    const testErrorMessage = 'test error';

    // simulate axios error
    post.mockResolvedValue(
      Promise.reject({
        response: {
          data: {
            errorMessage: testErrorMessage,
          },
        },
      })
    );
    await act(async () => {
      fireEvent.click(buttonSubmit);
    });

    // when axios request error, has error message
    expect(screen.getByText(testErrorMessage)).toBeInTheDocument();

    // simulate axios success
    post.mockResolvedValue({});
    expect(successFn).toBeCalledTimes(0);
    await act(async () => {
      fireEvent.click(buttonSubmit);
    });
    expect(screen.queryByText(testErrorMessage)).toBe(null);
    expect(successFn).toBeCalledTimes(1);
  });
});
