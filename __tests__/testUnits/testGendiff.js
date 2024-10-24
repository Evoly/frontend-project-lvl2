import genDiff from '../../src/diff.js';
import nestedData from '../__fixtures__/nestedData.js';
import obj1 from '../__fixtures__/obj1.js';
import obj2 from '../__fixtures__/obj2.js';

test('compare', () => {
  expect(genDiff(obj1, obj2)).toEqual(nestedData);
});

test('empty', () => {
  expect(() => genDiff()).toThrow();
});
