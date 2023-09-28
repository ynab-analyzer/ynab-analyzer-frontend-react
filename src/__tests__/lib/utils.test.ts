import { cn } from '@/lib/utils';

describe('cn', () => {
  it('should return an empty string when no arguments are passed', () => {
    expect(cn()).toBe('');
  });

  it('should return a single class name when a string is passed', () => {
    expect(cn('foo')).toBe('foo');
  });

  it('should return multiple class names when multiple strings are passed', () => {
    expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz');
  });

  it('should return a single class name when an object with a single key is passed', () => {
    expect(cn({ foo: true })).toBe('foo');
  });

  it('should return multiple class names when an object with multiple keys is passed', () => {
    expect(cn({ foo: true, bar: true, baz: false })).toBe('foo bar');
  });

  it('should ignore falsy values', () => {
    expect(
      cn('foo', null, undefined, 0, false, { bar: true }, '', { baz: false })
    ).toBe('foo bar');
  });

  it('should merge class names when an array is passed', () => {
    expect(cn(['foo', { bar: true }, ['baz', 'qux']])).toBe('foo bar baz qux');
  });
});
