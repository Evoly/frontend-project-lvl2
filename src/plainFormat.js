/* eslint-disable no-case-declarations */

const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const toStr = (val) => (typeof val === 'string' ? `'${val}'` : val);

const str = (obj) => {
  let result = '';
  switch (obj.type) {
    case 'deleted':
      result = 'was removed';
      break;
    case 'added':
      const val = isObject(obj.value) ? '[complex value]' : toStr(obj.value);
      result = `was added with value: ${val}`;
      break;
    case 'changed':
      const val1 = isObject(obj.value[0]) ? '[complex value]' : toStr(obj.value[0]);
      const val2 = isObject(obj.value[1]) ? '[complex value]' : toStr(obj.value[1]);

      result = `was updated. From ${val1} to ${val2}`;
      break;
    default:
      return 'no such type in object';
  }
  return result;
};

const plainFormat = (coll) => {
  const iter = (data, key) => {
    const result = data.reduce((acc, obj) => {
      const currentKey = key.length > 0 ? `${key}.${obj.key}` : obj.key;
      // console.log('obj in reduce', obj, 'acc:', acc)
      if (Object.hasOwn(obj, 'children')) {
        acc.push(iter(obj.children, currentKey));
        return acc;
      }

      if (obj.type !== 'unchanged') {
        const temp = `Property '${currentKey}' ${str(obj)}`;
        acc.push(temp);
      }
      return acc.flat();
    }, []);
    return result.join('\n');
  };
  return iter(coll, '');
};

export default plainFormat;
