import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  test('renders main nav', () => {
    render(<Home />);
    const mainNavElement = screen.getByRole('navigation');
    expect(mainNavElement).toBeInTheDocument();
  });
});
