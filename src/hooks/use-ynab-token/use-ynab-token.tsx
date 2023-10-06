import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  getYnabTokenFromUrlHash,
  setYnabTokenAsCookie,
} from '@/hooks/use-ynab-token/helpers';

/**
 * Custom React hook that retrieves the YNAB access token from the URL hash and sets it as a cookie.
 * If the access token and its expiration time are present in the URL hash, the hook sets the access token as a cookie and redirects the user to the home page.
 * If the access token and its expiration time are not present in the URL hash, the hook redirects the user to the error page.
 */
export const useYnabToken = () => {
  const { push } = useRouter();

  useEffect(() => {
    const { accessToken, expiresIn } = getYnabTokenFromUrlHash();
    if (accessToken && expiresIn) {
      setYnabTokenAsCookie(accessToken, +expiresIn);
      push('/');
    } else {
      push('/error');
    }
  }, [push]);
};

