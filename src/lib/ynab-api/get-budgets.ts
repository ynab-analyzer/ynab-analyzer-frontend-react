import { callWithToken } from '@/lib/ynab-api/call-with-token';

export function getBudgets() {
  const endpoint = 'budgets';

  return callWithToken(endpoint);
}
