import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('initial count is 0', () => {
    render(<Counter />);
    const countElement = screen.getByTestId('count');
    expect(countElement).toHaveTextContent('0');
  });

  test('increments the counter', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('increment'));
    expect(screen.getByTestId('count')).toHaveTextContent('1');
  });

  test('decrements the counter', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('decrement'));
    expect(screen.getByTestId('count')).toHaveTextContent('-1');
  });

  test('resets the counter to 0', () => {
    render(<Counter />);
    fireEvent.click(screen.getByTestId('increment'));
    fireEvent.click(screen.getByTestId('increment'));
    fireEvent.click(screen.getByTestId('reset'));
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });
});
