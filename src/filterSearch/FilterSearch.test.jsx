import FilterSearch from "./FilterSearch";
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react';

test('renders FilterSearch component', () => {
    render(<FilterSearch />);
    const inputElement = screen.getByPlaceholderText(/search/i);    
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'a' } });
    const listItem = screen.getByText(/apple/i);
    expect(listItem).toBeInTheDocument();
});