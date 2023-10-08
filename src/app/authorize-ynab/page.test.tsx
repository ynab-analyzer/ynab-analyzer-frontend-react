import { render } from '@testing-library/react';
import { useYnabToken } from '@/hooks/use-ynab-token';
import AuthorizeYnab from '@/app/authorize-ynab/page';

jest.mock('hooks/use-ynab-token', () => ({
  useYnabToken: jest.fn(),
}));

describe('AuthorizeYnab', () => {
  it('should render the redirecting message', () => {
    const { getByText } = render(<AuthorizeYnab />);
    expect(getByText('Redirecting...')).toBeInTheDocument();
  });

  it('should call useYnabToken hook', () => {
    render(<AuthorizeYnab />);
    expect(useYnabToken).toHaveBeenCalled();
  });
});
