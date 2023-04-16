import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { store } from './store/store';
import App from './App';

test('renders learn react link', () => {
  render(
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>,
  );

  expect(screen.getByText(/learn/i)).toBeInTheDocument();
});
