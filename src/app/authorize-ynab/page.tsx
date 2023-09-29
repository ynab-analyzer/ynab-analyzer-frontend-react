'use client';

import useYnabToken from '@/hooks/use-ynab-token/use-ynab-token';

export default function Home() {
  useYnabToken();

  return (
    <main>
      <div className="h-screen flex items-center justify-center">
        Redirecting...
      </div>
    </main>
  );
}
