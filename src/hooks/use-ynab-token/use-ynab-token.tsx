import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import getYnabTokenFromUrlHash from './helpers/get-ynab-token-from-url-hash';
import setYnabTokenAsCookie from './helpers/set-ynab-token-as-cookie';

const useYnabToken = () => {
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

export default useYnabToken;
