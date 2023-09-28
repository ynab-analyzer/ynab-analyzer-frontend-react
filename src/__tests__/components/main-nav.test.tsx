import { render, screen } from '@testing-library/react';
import { MainNav } from '@/components/main-nav';

describe('MainNav', () => {
  it('renders the Overview link', () => {
    render(<MainNav />);
    const linkElement = screen.getByText(/Overview/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders the Customers link', () => {
    render(<MainNav />);
    const linkElement = screen.getByText(/Customers/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders the Products link', () => {
    render(<MainNav />);
    const linkElement = screen.getByText(/Products/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('renders the Settings link', () => {
    render(<MainNav />);
    const linkElement = screen.getByText(/Settings/i);
    expect(linkElement).toBeInTheDocument();
  });
});
