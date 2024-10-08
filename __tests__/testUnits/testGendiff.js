import genDiff from '../../src/diff.js';

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

const data3 = [
  { key: 'follow', value: false, type: 'unchanged' },
  { key: 'host', value: 'hexlet.io', type: 'added' },
  { key: 'keyData1', value: 'strDel', type: 'deleted' },
  {
    key: 'proxy',
    value: ['123.234.53.22', '123.234.53.00'],
    type: 'changed',
  },
  {
    key: 'timeout', value: [50, 70], type: 'changed',
  },
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
        key: 'keylvl-2', value: ['valuelvl-2', 'valuelvl-3'], type: 'changed',
      }],
  },
];

test('compare', () => {
  expect(genDiff(data1, data2)).toEqual(data3);
});

test('compare nested', () => {
  expect(genDiff(nested1, nested2)).toEqual(nested3);
});
