import { cookies } from 'next/headers';

export async function callWithToken(endpoint: string) {
  const cookieStore = cookies();
  const headers = {
    Authorization: `Bearer ${cookieStore.get('ynabToken')?.value}`,
  };
  return fetch(`https://api.youneedabudget.com/v1/${endpoint}`, {
    headers: new Headers(headers),
  })
    .then((res: Response) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
}
