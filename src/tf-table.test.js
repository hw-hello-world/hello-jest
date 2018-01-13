const gen = require('./tf-table.js');

test('0 cond', () => {
  expect(gen()).toEqual([
  ]);
});

test('one cond', () => {
  expect(gen(['a'])).toEqual([
    {a: false},
    {a: true},
  ]);
});

test('two cond', () => {
  expect(gen(['a', 'b'])).toEqual([
    {a: false, b: false},
    {a: false, b: true},
    {a: true, b: false},
    {a: true, b: true},
  ]);
});

test('three cond', () => {
  expect(gen(['a', 'b', 'c'])).toEqual([
    {a: false, b: false, c: false},
    {a: false, b: false, c: true},
    {a: false, b: true, c: false},
    {a: false, b: true, c: true},
    {a: true, b: false, c: false},
    {a: true, b: false, c: true},
    {a: true, b: true, c: false},
    {a: true, b: true, c: true},
  ]);
});
