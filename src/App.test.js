import { render, screen } from '@testing-library/react';
import App from './App';

// Mock child components
jest.mock('./counter/Counter.jsx', () => () => (
  <div data-testid="mock-counter">Counter Mock</div>
));

jest.mock('./textToggle/TextToggle.jsx', () => () => (
  <div data-testid="mock-text-toggle">TextToggle Mock</div>
));

describe('App Component', () => {
  test('renders Counter component', () => {
    render(<App />);
    expect(screen.getByTestId('mock-counter')).toBeInTheDocument();
  });

  test('renders TextToggle component', () => {
    render(<App />);
    expect(screen.getByTestId('mock-text-toggle')).toBeInTheDocument();
  });

  test('has correct container class', () => {
    const { container } = render(<App/>);
    const appDiv = container.firstChild;
    expect(appDiv).toHaveClass('App');
  });
});