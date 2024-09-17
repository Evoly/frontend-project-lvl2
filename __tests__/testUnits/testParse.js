import parse from '../../src/parse.js';

const json1Path = '__tests__/__fixtures__/file3.json';
const ymlPath = './__tests__/__fixtures__/yaml1.yaml';
const ymlPath2 = './__tests__/__fixtures__/yaml2.yml';

const data = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const nestedData = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};

export default test('test parse json', () => {
  expect(parse(json1Path)).toEqual(nestedData);
});

test('test parse yml', () => {
  expect(parse(ymlPath)).toEqual(nestedData);
});

test('test parse yml', () => {
  expect(parse(ymlPath2)).toEqual(data);
});
