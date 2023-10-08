import { callWithToken } from '@/lib/ynab-api/call-with-token';

const getCookieMock = jest.fn((tokenName: string) => {
  return {
    value: tokenName,
  };
});

jest.mock('next/headers', () => {
  return {
    cookies: jest.fn(() => {
      return {
        get: getCookieMock,
      };
    }),
  };
});

describe('callWithToken', () => {
  const mockResponse = { data: {} };
  const mockJsonPromise = Promise.resolve(mockResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  });

  afterEach(() => {
    fetch.mockClear();
  });

  it('should call the API with the correct endpoint and headers', async () => {
    const expectedEndpoint = 'test';
    const expectedHeaders = {
      Authorization: `Bearer ynabToken`,
    };

    await callWithToken(expectedEndpoint);

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.youneedabudget.com/v1/${expectedEndpoint}`,
      {
        headers: new Headers(expectedHeaders),
      }
    );
  });

  it('should return the data from the API', async () => {
    const result = await callWithToken('test');

    expect(result).toEqual(mockResponse);
  });
});
