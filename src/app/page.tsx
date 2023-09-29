import { MainNav } from '@/components/main-nav';
import YnabAuthorizer from '@/components/ynab-authorizer';

export default function Home() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <YnabAuthorizer />
          </div>
        </div>
      </div>
    </div>
  );
}
