const nestedData = [
  {
    key: 'common',
    type: 'unchanged',
    children: [
      { key: 'follow', value: false, type: 'added' },
      { key: 'setting1', value: 'Value 1', type: 'unchanged' },
      { key: 'setting2', value: 200, type: 'deleted' },
      { key: 'setting3', value: [true, null], type: 'changed' },
      { key: 'setting4', value: 'blah blah', type: 'added' },
      { key: 'setting5', value: { key5: 'value5' }, type: 'added' },
      {
        key: 'setting6',
        type: 'unchanged',
        children: [
          {
            key: 'doge',
            type: 'unchanged',
            children: [
              { key: 'wow', value: ['', 'so much'], type: 'changed' },
            ],
          },
          { key: 'key', value: 'value', type: 'unchanged' },
          { key: 'ops', value: 'vops', type: 'added' },
        ],
      },
    ],
  },
  {
    key: 'group1',
    type: 'unchanged',
    children: [
      { key: 'baz', value: ['bas', 'bars'], type: 'changed' },
      { key: 'foo', value: 'bar', type: 'unchanged' },
      {
        key: 'nest',
        value: [{ key: 'value' }, 'str'],
        type: 'changed',
      },
    ],
  },
  {
    key: 'group2',
    value: { abc: 12345, deep: { id: 45 } },
    type: 'deleted',
  },
  {
    key: 'group3',
    value: { deep: { id: { number: 45 } }, fee: 100500 },
    type: 'added',
  },
];

export default nestedData;
