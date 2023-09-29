'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import cookieCutter from '@boiseitguru/cookie-cutter';

const useYnabToken = () => {
  const getHash = () =>
    typeof window !== 'undefined'
      ? decodeURIComponent(window.location.hash.replace('#', ''))
      : undefined;

  const parseHash = (hash: string) => {
    const hashParams = hash.split('&');
    const accessTokenParam = hashParams.find((param) =>
      param.startsWith('access_token=')
    );
    const tokenTypeParam = hashParams.find((param) =>
      param.startsWith('token_type=')
    );
    const expiresInParam = hashParams.find((param) =>
      param.startsWith('expires_in=')
    );

    if (!accessTokenParam || !tokenTypeParam || !expiresInParam) {
      throw new Error('Invalid hash format');
    }

    const accessToken = accessTokenParam.split('=')[1];
    const tokenType = tokenTypeParam.split('=')[1];
    const expiresIn = expiresInParam.split('=')[1];

    if (!accessToken || !tokenType || !expiresIn) {
      throw new Error('Invalid hash content');
    }

    return { accessToken, tokenType, expiresIn };
  };

  try {
    const hash = getHash();
    return hash ? parseHash(hash) : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export default function Home() {
  const { push } = useRouter();
  const hashValue = useYnabToken();
  useEffect(() => {
    if (!hashValue) {
      console.error('No hash value');
      // push('/error');
    } else {
      const { accessToken, tokenType, expiresIn } = hashValue || {};
      console.log(accessToken, tokenType, expiresIn);
      const cookieExpiration = new Date(
        new Date().getTime() + 7200 * 1000
      ).toGMTString();
      console.log(cookieExpiration);
      cookieCutter.set('ynabToken', accessToken, { expires: cookieExpiration });
      console.log('PUSHED TOKEN');
      push('/');
      console.log('REROUTED');
    }
  }, []);

  return (
    <main>
      <button>Push fragment</button>
    </main>
  );
}
