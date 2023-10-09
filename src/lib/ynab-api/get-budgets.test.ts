import { mockFetch } from '@/__tests__/test-helpers';
import { ynabApiBaseUrl } from '@/lib/constants';
import { getBudgets } from '@/lib/ynab-api/get-budgets';

describe('getBudgets', () => {
  const mockResponse = { data: { result: 123 } };

  beforeEach(() => {
    mockFetch(mockResponse);
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
      `${ynabApiBaseUrl}/${expectedEndpoint}`,
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
