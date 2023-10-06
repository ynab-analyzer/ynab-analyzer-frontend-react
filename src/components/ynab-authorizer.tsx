import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';

const YnabAuthorizer = () => {
  const clientId = 'ndsLoWRTcR1oKtR29897DqgLYyF-F6yiNqyq-ykq3uc';
  const redirectUri = 'http://localhost:3000/authorize-ynab';
  const authorizeUrl = `https://app.youneedabudget.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token`;

  return (
    <Button asChild>
      <Link href={authorizeUrl}>Authorize with YNAB</Link>
    </Button>
  );
};

export default YnabAuthorizer;
