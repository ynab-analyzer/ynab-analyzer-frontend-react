/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';
import RootLayout, { metadata } from '@/app/layout';

describe('RootLayout', () => {
  it('renders a provided child component', () => {
    render(
      <RootLayout>
        <div>dummy</div>
      </RootLayout>
    );
    expect(screen.getByText(/dummy/i)).toBeInTheDocument();
  });

  it('renders without a child component', () => {
    render(<RootLayout />);
  });
});

describe('Metadata', () => {
  it('has the correct title', () => {
    expect(metadata.title).toBe('YNAB Analyzer');
  });

  it('has the correct description', () => {
    expect(metadata.description).toBe('TBD');
  });
});
