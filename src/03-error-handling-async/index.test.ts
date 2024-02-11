// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const result = await resolveValue('resolvedValue');
    expect(result).toBe('resolvedValue');
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    expect(() => throwError('Some Error Message')).toThrow(
      'Some Error Message'
    );
  });

  test('should throw error with default message if message is not provided', () => {
    expect(() => throwError()).toThrow('Oops!');
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    expect(() => throwCustomError()).toThrow(
      'This is my awesome custom error!'
    );
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await expect(rejectCustomError()).rejects.toThrow(
      'This is my awesome custom error!'
    );
  });
});
