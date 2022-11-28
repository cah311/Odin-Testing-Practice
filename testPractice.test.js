const capitalize = require('./testPractice');

test('Capitalizes first letter of string', () => {
  expect(capitalize('banana')).toMatch('Banana');
});
