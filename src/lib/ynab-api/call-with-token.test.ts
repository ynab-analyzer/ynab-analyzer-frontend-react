import { callWithToken } from '@/lib/ynab-api/call-with-token';
import { mockFetch } from '@/lib/tests/test-helpers';
import { ynabApiBaseUrl } from '@/lib/constants';

describe('callWithToken', () => {
  const mockResponse = { data: { result: 123 } };

  beforeEach(() => {
    mockFetch(mockResponse);
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
      `${ynabApiBaseUrl}/${expectedEndpoint}`,
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
