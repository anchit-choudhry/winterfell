import React from 'react';
import { Provider } from 'react-redux';
import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { store } from './app/store';
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
