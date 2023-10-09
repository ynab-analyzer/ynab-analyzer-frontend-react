// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

const getCookieMock = jest.fn((tokenName) => {
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