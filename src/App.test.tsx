import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('renders correctly', () => {
  const { baseElement } = render(<App></App>);
  expect(baseElement).toMatchSnapshot();
});
