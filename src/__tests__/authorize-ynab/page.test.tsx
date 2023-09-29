import { render } from '@testing-library/react';
import Home from '@/app/authorize-ynab/page';

jest.mock('../../hooks/use-ynab-token/use-ynab-token', () => jest.fn());

describe('Home', () => {
  it('should render the redirecting message', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Redirecting...')).toBeInTheDocument();
  });

  it('should call useYnabToken hook', () => {
    render(<Home />);
    expect(
      require('../../hooks/use-ynab-token/use-ynab-token')
    ).toHaveBeenCalled();
  });
});
