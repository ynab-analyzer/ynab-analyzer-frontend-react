import getYnabTokenFromUrlHash from '@/hooks/use-ynab-token/helpers/get-ynab-token-from-url-hash';

describe('getYnabTokenFromUrlHash', () => {
  it('should return an empty object if the URL hash is undefined', () => {
    // Arrange
    const { window } = global;
    delete global.window;

    // Act
    const result = getYnabTokenFromUrlHash();

    // Assert
    expect(result).toEqual({});

    // Clean up
    global.window = window;
  });

  it('should return an empty object if the URL hash is empty', () => {
    // Arrange
    jest.spyOn(window, 'location', 'get').mockReturnValueOnce({
      hash: '',
    });

    // Act
    const result = getYnabTokenFromUrlHash();

    // Assert
    expect(result).toEqual({});
  });

  it('should return an empty object if the URL hash does not contain the access_token parameter', () => {
    // Arrange
    jest.spyOn(window, 'location', 'get').mockReturnValueOnce({
      hash: '#token_type=bearer&expires_in=3600',
    });

    // Act
    const result = getYnabTokenFromUrlHash();

    // Assert
    expect(result).toEqual({});
  });

  it('should return an empty object if the URL hash does not contain the token_type parameter', () => {
    // Arrange
    jest.spyOn(window, 'location', 'get').mockReturnValueOnce({
      hash: '#access_token=123&expires_in=3600',
    });

    // Act
    const result = getYnabTokenFromUrlHash();

    // Assert
    expect(result).toEqual({});
  });

  it('should return an empty object if the URL hash does not contain the expires_in parameter', () => {
    // Arrange
    jest.spyOn(window, 'location', 'get').mockReturnValueOnce({
      hash: '#access_token=123&token_type=bearer',
    });

    // Act
    const result = getYnabTokenFromUrlHash();

    // Assert
    expect(result).toEqual({});
  });

  it('should return an empty object if the URL hash does not contain the access_token parameter value', () => {
    // Arrange
    jest.spyOn(window, 'location', 'get').mockReturnValueOnce({
      hash: '#access_token=&token_type=bearer&expires_in=3600',
    });

    // Act
    const result = getYnabTokenFromUrlHash();

    // Assert
    expect(result).toEqual({});
  });

  it('should return an object with the access token, token type, and expiration time if the URL hash contains all required parameters', () => {
    // Arrange
    jest.spyOn(window, 'location', 'get').mockReturnValueOnce({
      hash: '#access_token=123&token_type=bearer&expires_in=3600',
    });

    // Act
    const result = getYnabTokenFromUrlHash();

    // Assert
    expect(result).toEqual({
      accessToken: '123',
      tokenType: 'bearer',
      expiresIn: '3600',
    });
  });
});
