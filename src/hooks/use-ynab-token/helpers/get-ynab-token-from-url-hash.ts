/**
 * @returns The URL hash without the '#' symbol or undefined if window is not defined.
 */
const getUrlHash = () =>
  typeof window !== 'undefined'
    ? decodeURIComponent(window.location.hash.replace('#', ''))
    : undefined;

/**
 * Parses the YNAB token from the URL hash.
 * @param hash - The URL hash containing the YNAB token.
 * @returns An object containing the YNAB access token, token type, and expiration time in seconds.
 * Returns undefined if any of the required parameters are missing or invalid.
 */
const parseYnabToken = (hash: string) => {
  const hashParams = hash.split('&');
  const accessTokenParam = hashParams.find((param) =>
    param.startsWith('access_token=')
  );
  const tokenTypeParam = hashParams.find((param) =>
    param.startsWith('token_type=')
  );
  const expiresInParam = hashParams.find((param) =>
    param.startsWith('expires_in=')
  );

  if (!accessTokenParam || !tokenTypeParam || !expiresInParam) {
    return {};
  }

  const accessToken = accessTokenParam.split('=')[1];
  const tokenType = tokenTypeParam.split('=')[1];
  const expiresIn = expiresInParam.split('=')[1];

  if (!accessToken || !tokenType || !expiresIn) {
    return {};
  }

  return { accessToken, tokenType, expiresIn };
};

/**
 * Retrieves the YNAB token from the URL hash.
 * @returns The YNAB token if it exists in the URL hash, otherwise undefined.
 */
const getYnabTokenFromUrlHash = () => {
  const hash = getUrlHash();
  return hash ? parseYnabToken(hash) : {};
};

export default getYnabTokenFromUrlHash;
