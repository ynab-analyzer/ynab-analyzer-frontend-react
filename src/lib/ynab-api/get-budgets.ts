import { callWithToken } from '@/lib/ynab-api';

export function getBudgets() {
  const endpoint = 'budgets';

  return callWithToken(endpoint);
}
