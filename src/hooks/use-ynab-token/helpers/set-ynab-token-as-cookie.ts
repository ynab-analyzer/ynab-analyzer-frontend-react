import cookieCutter from '@boiseitguru/cookie-cutter';

/**
 * Sets the YNAB access token as a cookie with the given expiration time.
 * @param accessToken The YNAB access token to set as a cookie.
 * @param expiresIn The expiration time of the access token in seconds.
 */
export const setYnabTokenAsCookie = (
  accessToken: string,
  expiresIn: number
) => {
  const cookieExpiration = new Date(
    new Date().getTime() + expiresIn * 1000
  ).toUTCString();
  cookieCutter.set('ynabToken', accessToken, { expires: cookieExpiration });
};
