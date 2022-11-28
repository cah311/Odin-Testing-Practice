const testModule = require('./testPractice');

test('Capitalizes first letter of string', () => {
  expect(testModule.capitalize('banana')).toMatch('Banana');
});

test('Takes a string and returns a reversed version', () => {
  expect(testModule.reverseString('house')).toMatch('esuoh');
});

test('Adds two numbers', () => {
  expect(testModule.calculator.add(1, 2)).toBe(3);
});

test('Subtracts two numbers', () => {
  expect(testModule.calculator.subtract(7, 5)).toBe(2);
});

test('Divides two numbers', () => {
  expect(testModule.calculator.divide(15, 5)).toBe(3);
});

test('Multiplies two numbers', () => {
  expect(testModule.calculator.multiply(4, 5)).toBe(20);
});

test('ceasarCipher: test wrapping from z to a', () => {
  expect(testModule.caesarCipher('zoo')).toMatch('app');
});

test('caesarCipher: test keeping same case', () => {
  expect(testModule.caesarCipher('CarSon')).toMatch('DbsTpo');
});

test('analyzeArray: tests array parameters', () => {
  expect(testModule.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
