const nestedData = [
  {
    key: 'common',
    type: 'unchanged',
    children: [
      { key: 'follow', value: false, type: 'added' },
      { key: 'setting1', value: 'Value 1', type: 'unchanged' },
      { key: 'setting2', value: 200, type: 'deleted' },
      {
        key: 'setting3',
        value: [true, { key: 'value' }],
        type: 'changed',
      },
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
              {
                key: 'wow',
                value: ['too much', 'so much'],
                type: 'changed',
              },
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
  {
    key: 'group4',
    type: 'unchanged',
    children: [
      { key: 'default', value: [null, ''], type: 'changed' },
      { key: 'foo', value: [0, null], type: 'changed' },
      { key: 'isNested', value: [false, 'none'], type: 'changed' },
      { key: 'key', value: false, type: 'added' },
      {
        key: 'nest',
        type: 'unchanged',
        children: [
          { key: 'bar', value: ['', 0], type: 'changed' },
          { key: 'isNested', value: true, type: 'deleted' },
        ],
      },
      { key: 'someKey', value: true, type: 'added' },
      { key: 'type', value: ['bas', 'bar'], type: 'changed' },
    ],
  },
  { key: 'language', value: 'js', type: 'unchanged' },
];

export default nestedData;
