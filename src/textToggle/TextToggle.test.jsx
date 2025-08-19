import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleText from './TextToggle'; // Make sure this path matches your actual file

describe('ToggleText Component', () => {
  test('shows "Hide Text" button initially', () => {
    render(<ToggleText />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveTextContent('Hide Text');
  });

  test('toggles text visibility when button is clicked', () => {
    render(<ToggleText />);
    const buttonElement = screen.getByRole('button');
    
    // First click - should hide text
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('Show Text');
    expect(screen.queryByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit/i)).not.toBeInTheDocument();
    
    // Second click - should show text again
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('Hide Text');
    expect(screen.getByText(/Lorem ipsum dolor sit amet consectetur adipisicing elit/i)).toBeInTheDocument();
  });
});
