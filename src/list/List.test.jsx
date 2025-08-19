import React from 'react';
import { render, screen } from '@testing-library/react';
import List from './List'; // Make sure this path matches your actual file
describe('List Component', () => {
  test('renders list items correctly', () => {
    render(<List />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
    // expect(listItems[0]).toHaveTextContent('apple');
    // expect(listItems[1]).toHaveTextContent('banana');
    // expect(listItems[2]).toHaveTextContent('orange');
    // expect(listItems[3]).toHaveTextContent('grapes');
  });


});