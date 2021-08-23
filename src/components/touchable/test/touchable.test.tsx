import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Touchable } from '../index';

const defaultClassName = 'aw-touchable';
describe('Component Touchable', () => {
  test('touchable children', () => {
    const { getByText } = render(<Touchable>Touchable Text</Touchable>);
    const textElement = getByText(/Touchable Text/i);
    expect(textElement).toBeInTheDocument();

    const testClassName = 'touchable-class';
    const { container } = render(
      <Touchable>
        <div className={testClassName}>Touchable Text</div>
      </Touchable>
    );
    expect(container.getElementsByClassName(testClassName).length).toBe(1);
  });

  test('touchable className props', () => {
    const testClassName = 'touchable-class';
    const { container } = render(
      <Touchable className={testClassName}>Touchable Text</Touchable>
    );
    expect(container.firstChild).toHaveClass(
      `${defaultClassName} ${testClassName}`
    );
  });

  test('touchable element props', () => {
    const { container } = render(<Touchable>Touchable Text</Touchable>);

    expect(
      container.querySelector(`div.${defaultClassName}`)
    ).toBeInTheDocument();

    const { container: container2 } = render(
      <Touchable element="span">Touchable Text</Touchable>
    );

    // use span, then render <span class="defaultClassName"></span>
    expect(
      container2.querySelector(`span.${defaultClassName}`)
    ).toBeInTheDocument();
  });

  test('touchable click', () => {
    const mockFn = jest.fn();
    const { rerender, container } = render(
      <Touchable onClick={mockFn}>Touchable Text</Touchable>
    );
    fireEvent.click(container.firstChild);
    expect(mockFn).toBeCalledTimes(1);

    rerender(
      <Touchable loading onClick={mockFn}>
        Touchable Text
      </Touchable>
    );
    fireEvent.click(container.firstChild);
    // should not invoke props.onClick when loading
    expect(mockFn).toBeCalledTimes(1);

    rerender(
      <Touchable disabled onClick={mockFn}>
        Touchable Text
      </Touchable>
    );
    fireEvent.click(container.firstChild);
    // should not invoke props.onClick when disabled
    expect(mockFn).toBeCalledTimes(1);

    rerender(<Touchable onClick={mockFn}>Touchable Text</Touchable>);
    fireEvent.click(container.firstChild);
    expect(mockFn).toBeCalledTimes(2);
  });

  test('touchable mouse and touch event', () => {
    const { container } = render(<Touchable>Touchable Text</Touchable>);
    fireEvent.mouseDown(container.firstChild);
    expect(container.firstChild).toHaveClass('opacity');

    fireEvent.mouseUp(container.firstChild);
    expect(container.firstChild).not.toHaveClass('opacity');

    fireEvent.touchStart(container.firstChild);
    expect(container.firstChild).toHaveClass('opacity');

    fireEvent.touchEnd(container.firstChild);
    expect(container.firstChild).not.toHaveClass('opacity');
  });
});
