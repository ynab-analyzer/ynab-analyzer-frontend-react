import { cookies } from 'next/headers';
import { MainNav } from '@/components/main-nav';
import YnabAuthorizer from '@/components/ynab-authorizer';

const getYnabAuthToken = () => {
  const cookieStore = cookies();
  return cookieStore.get('ynabToken')?.value;
};

export default function Home() {
  const ynabAuthToken = getYnabAuthToken();

  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <YnabAuthorizer className="mx-6" />
          </div>
        </div>
      </div>
      <div>{ynabAuthToken}</div>
    </div>
  );
}
