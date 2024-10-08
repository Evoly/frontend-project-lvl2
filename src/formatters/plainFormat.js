/* eslint-disable no-case-declarations */

const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const toStr = (val) => (typeof val === 'string' ? `'${val}'` : val);

const str = (obj) => {
  switch (obj.type) {
    case 'deleted':
      return 'was removed';
    case 'added':
      const val = isObject(obj.value) ? '[complex value]' : toStr(obj.value);
      return `was added with value: ${val}`;
    case 'changed':
      const val1 = isObject(obj.value[0]) ? '[complex value]' : toStr(obj.value[0]);
      const val2 = isObject(obj.value[1]) ? '[complex value]' : toStr(obj.value[1]);

      return `was updated. From ${val1} to ${val2}`;
    default:
      return 'no such type in object';
  }
};

const plainFormat = (coll) => {
  const iter = (data, key) => {
    const result = data.reduce((acc, obj) => {
      const currentKey = key.length > 0 ? `${key}.${obj.key}` : obj.key;
      if (Object.hasOwn(obj, 'children')) {
        return [...acc, iter(obj.children, currentKey)];
      }
      if (obj.type !== 'unchanged') {
        const temp = `Property '${currentKey}' ${str(obj)}`;
        return [...acc, temp].flat();
      }
      return acc.flat();
    }, []);
    return result.join('\n');
  };
  return iter(coll, '');
};

export default plainFormat;
