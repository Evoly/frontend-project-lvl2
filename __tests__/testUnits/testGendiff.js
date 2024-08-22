import genDiff from '../../src/index.js';

const data1 = {
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
  keyData1: 'strDel',
};

const data2 = {
  host: 'hexlet.io',
  timeout: 70,
  proxy: '123.234.53.00',
  follow: false,
};

// TODO order matters ??
const data3 = [
  {
    key: 'timeout', value1: 50, value2: 70, type: 'changed',
  },
  {
    key: 'proxy',
    value1: '123.234.53.22',
    value2: '123.234.53.00',
    type: 'changed',
  },
  { key: 'follow', value: false, type: 'unchanged' },
  { key: 'keyData1', value: 'strDel', type: 'deleted' },
  { key: 'host', value: 'hexlet.io', type: 'added' },
];

const nested1 = {
  someKey: {
    'keylvl-2': 'valuelvl-2',
  },
};

const nested2 = {
  someKey: {
    'keylvl-2': 'valuelvl-3',
  },
};

const nested3 = [
  {
    key: 'someKey',
    type: 'unchanged',
    children: [
      {
        key: 'keylvl-2', value1: 'valuelvl-2', value2: 'valuelvl-3', type: 'changed',
      }],
  },
];

export default test('test compare', () => {
  expect(genDiff(data1, data2)).toEqual(data3);
});

export const testnested = test('test compare nested', () => {
  expect(genDiff(nested1, nested2)).toEqual(nested3);
});
