import { getBudgets } from '@/lib/ynab-api/get-budgets';

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

describe('getBudgets', () => {
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

  it('should call the YNAB API with the correct endpoint and headers', async () => {
    const expectedEndpoint = 'budgets';
    const expectedHeaders = {
      Authorization: `Bearer ynabToken`,
    };

    await getBudgets();

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.youneedabudget.com/v1/${expectedEndpoint}`,
      {
        headers: new Headers(expectedHeaders),
      }
    );
  });

  it('should return the data from the YNAB API', async () => {
    const result = await getBudgets();

    expect(result).toEqual(mockResponse);
  });
});
