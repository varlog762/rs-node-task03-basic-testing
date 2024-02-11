// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 5, b: 1, action: Action.Add });
    expect(result).toBe(6);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 111, b: 11, action: Action.Subtract });
    expect(result).toBe(100);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 100, b: 3, action: Action.Multiply });
    expect(result).toBe(300);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 150, b: 5, action: Action.Divide });
    expect(result).toBe(30);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 2,
      b: 5,
      action: Action.Exponentiate,
    });
    expect(result).toBe(32);
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 5, b: 3, action: 'unknownAction' });
    expect(result).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({
      a: 'someValue',
      b: 3,
      action: Action.Add,
    });
    expect(result).toBeNull();
  });
});
