import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../ui/components/App';
import '@testing-library/jest-dom';

test('renders header', async () => {
  render(<App />);
  const headerElement = await screen.findByRole("heading");

  expect(headerElement).toBeInTheDocument();
});
