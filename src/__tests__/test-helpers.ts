/**
 * Mocks the global `fetch` function to return a mock response.
 * @param mockResponse - The mock response to be returned by the `fetch` function.
 */
export function mockFetch(mockResponse: any) {
  const mockJsonPromise = Promise.resolve(mockResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });
  global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
}
