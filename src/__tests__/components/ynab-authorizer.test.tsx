import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import YnabAuthorizer from '@/components/ynab-authorizer';

describe('YnabAuthorizer', () => {
  it('renders a button with the correct text', () => {
    const { getByText } = render(<YnabAuthorizer />);
    const button = getByText('Authorize with YNAB');
    expect(button).toBeInTheDocument();
  });
});
