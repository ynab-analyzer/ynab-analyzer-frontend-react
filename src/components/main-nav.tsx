import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Image
        src="/ynab.svg"
        alt="YNAB Analyzer Logo"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-auto"
      />
      <h3>YNAB Analyzer</h3>
      <Link
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href=""
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>
  );
}
