import parse from '../../src/parse.js';
import obj from '../__fixtures__/obj1.js';

const json1Path = '__tests__/__fixtures__/file1.json';
const ymlPath = './__tests__/__fixtures__/yaml1.yaml';
const ymlPath2 = './__tests__/__fixtures__/yaml2.yml';

test('parse json', () => {
  expect(parse(json1Path)).toEqual(obj);
});

test('parse yaml', () => {
  expect(parse(ymlPath)).toEqual(obj);
});

test('parse yml', () => {
  expect(parse(ymlPath2)).toEqual(obj);
});
