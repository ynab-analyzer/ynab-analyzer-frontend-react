'use client';

import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const getHash = () =>
  typeof window !== 'undefined'
    ? decodeURIComponent(window.location.hash.replace('#', ''))
    : undefined;

const useHash = () => {
  const [hash, setHash] = useState(getHash());

  useEffect(() => {
    const handleHashChange = () => {
      setHash(getHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return hash;
};

export default function Home() {
  const hash = useHash();
  const { accessToken, tokenType, expiresIn } = parseYnabAuthToken(hash);
  console.log(hash);

  return (
    <main>
      <button>Push fragment</button>
    </main>
  );
}
