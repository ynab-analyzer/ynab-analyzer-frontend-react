'use client';

import { useYnabToken } from '@/hooks/use-ynab-token';

export default function AuthorizeYnab() {
  useYnabToken();

  return (
    <main>
      <div className="h-screen flex items-center justify-center">
        Redirecting...
      </div>
    </main>
  );
}
