import { cookies } from 'next/headers';
import { ynabApiBaseUrl } from '@/lib/constants';

export async function callWithToken(endpoint: string) {
  const cookieStore = cookies();
  const headers = {
    Authorization: `Bearer ${cookieStore.get('ynabToken')?.value}`,
  };
  return fetch(`${ynabApiBaseUrl}/${endpoint}`, {
    headers: new Headers(headers),
  })
    .then((res: Response) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}
