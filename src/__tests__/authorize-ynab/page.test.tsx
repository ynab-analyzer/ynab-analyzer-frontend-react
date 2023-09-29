import { render } from '@testing-library/react';
import AuthorizeYnab from '@/app/authorize-ynab/page';

jest.mock('../../hooks/use-ynab-token/use-ynab-token', () => jest.fn());

describe('AuthorizeYnab', () => {
  it('should render the redirecting message', () => {
    const { getByText } = render(<AuthorizeYnab />);
    expect(getByText('Redirecting...')).toBeInTheDocument();
  });

  it('should call useYnabToken hook', () => {
    render(<AuthorizeYnab />);
    expect(
      require('../../hooks/use-ynab-token/use-ynab-token')
    ).toHaveBeenCalled();
  });
});
