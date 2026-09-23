import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Calculator app', () => {
  test('starts with zero on the display', () => {
    render(<App />);

    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'C' })).toBeInTheDocument();
  });

  test('accepts numeric input and shows the result for a sum', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: '9' }));
    fireEvent.click(screen.getByRole('button', { name: '+' }));
    fireEvent.click(screen.getByRole('button', { name: '1' }));
    fireEvent.click(screen.getByRole('button', { name: '=' }));

    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });

  test('clears the display', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: '9' }));
    fireEvent.click(screen.getByRole('button', { name: 'C' }));

    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  });
});
