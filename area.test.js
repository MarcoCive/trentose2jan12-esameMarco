const area = require('./area');

// INPUT VALIDI
test('area valida', () => {
  var a = [2,2];
  expect(area(a)).toBe(4);
});

// INPUT NON VALIDI

test('stringa nell array', () => {
  var a = ['prova',2];
  expect(area(a)).toBe(-1);
});

test('non array in input', () => {
  var a = 'prova';
  expect(area(a)).toBe(-1);
});

test('numero parametro diverso da 2', () => {
  var a = [3,3,3];
  expect(area(a)).toBe(-1);
});

test('parametro negativo', () => {
  var a = [-2,2];
  expect(area(a)).toBe(-1);
});