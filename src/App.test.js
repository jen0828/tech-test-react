import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const textElement = screen.getByText(/Find the right credit card for you/i);
  expect(textElement).toBeInTheDocument();
});
