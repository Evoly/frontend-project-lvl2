const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const getDiff = (coll1, coll2) => {
  const collKeys = new Set([...Object.keys(coll1), ...Object.keys(coll2)]);
  const sortedCollKeys = [...collKeys].toSorted();

  const result = sortedCollKeys.map((key) => {
    const keys = [['key', key]];
    if (isObject(coll1[key]) && isObject(coll2[key])) {
      return Object.fromEntries([...keys, ['type', 'unchanged'], ['children', getDiff(coll1[key], coll2[key])]]);
    }
    if (coll1[key] === coll2[key]) {
      return Object.fromEntries([...keys, ['value', coll1[key]], ['type', 'unchanged']]);
    }
    if (Object.hasOwn(coll1, key) && !Object.hasOwn(coll2, key)) {
      return Object.fromEntries([...keys, ['value', coll1[key]], ['type', 'deleted']]);
    }
    if (Object.hasOwn(coll2, key) && !Object.hasOwn(coll1, key)) {
      return Object.fromEntries([...keys, ['value', coll2[key]], ['type', 'added']]);
    }
    return Object.fromEntries([...keys, ['value', [coll1[key], coll2[key]]], ['type', 'changed']]);
  });

  return result;
};

export default getDiff;
