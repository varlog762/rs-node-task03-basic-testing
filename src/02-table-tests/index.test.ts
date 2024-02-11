// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator', () => {
  const testCases = [
    [Action.Add, 5, 1, 6],
    [Action.Subtract, 111, 11, 100],
    [Action.Multiply, 100, 3, 300],
    [Action.Divide, 150, 5, 30],
    [Action.Exponentiate, 2, 5, 32],
    ['unknownAction', 5, 3, null],
    [Action.Add, 'someValue', 3, null],
  ];

  test.each(testCases)(
    'should perform %s with a=%d and b=%d',
    (action, a, b, expected) => {
      const input = { a, b, action };
      const result = simpleCalculator(input);
      expect(result).toBe(expected);
    }
  );
});
