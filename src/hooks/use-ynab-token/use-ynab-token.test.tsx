import { renderHook } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import {
  getYnabTokenFromUrlHash,
  setYnabTokenAsCookie,
} from '@/hooks/use-ynab-token/helpers';
import { useYnabToken } from '@/hooks/use-ynab-token';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

jest.mock('hooks/use-ynab-token/helpers', () => ({
  getYnabTokenFromUrlHash: jest.fn(),
  setYnabTokenAsCookie: jest.fn(),
}));

describe('useYnabToken', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should set the YNAB token as a cookie and redirect to the home page if the token is present in the URL hash', () => {
    (getYnabTokenFromUrlHash as jest.Mock).mockReturnValue({
      accessToken: 'test-access-token',
      expiresIn: 3600,
    });

    renderHook(() => useYnabToken());

    expect(setYnabTokenAsCookie).toHaveBeenCalledWith(
      'test-access-token',
      3600
    );
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('should redirect to the error page if the YNAB token is not present in the URL hash', () => {
    (getYnabTokenFromUrlHash as jest.Mock).mockReturnValue({
      accessToken: null,
      expiresIn: null,
    });

    renderHook(() => useYnabToken());

    expect(mockPush).toHaveBeenCalledWith('/error');
  });
});
