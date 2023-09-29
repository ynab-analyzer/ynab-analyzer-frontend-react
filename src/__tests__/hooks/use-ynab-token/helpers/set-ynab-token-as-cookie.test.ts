import setYnabTokenAsCookie from '../../../../hooks/use-ynab-token/helpers/set-ynab-token-as-cookie';
import cookieCutter from '@boiseitguru/cookie-cutter';

jest.mock('@boiseitguru/cookie-cutter');

describe('setYnabTokenAsCookie', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should set the YNAB access token as a cookie with the given expiration time', () => {
    const accessToken = 'test-access-token';
    const expiresIn = 3600;
    const expectedExpiration = new Date(
      new Date().getTime() + expiresIn * 1000
    ).toGMTString();

    setYnabTokenAsCookie(accessToken, expiresIn);

    expect(cookieCutter.set).toHaveBeenCalledWith('ynabToken', accessToken, {
      expires: expectedExpiration,
    });
  });
});