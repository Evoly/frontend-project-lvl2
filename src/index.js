const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const genDiff = (a, b) => {
  const result = [];
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  [...keys].map((k) => {
    const obj = { key: k };
    if (isObject(a[k]) && isObject(b[k])) {
      obj.type = 'unchanged';
      obj.children = genDiff(a[k], b[k]);
    } else if (a[k] === b[k]) {
      obj.value = a[k];
      obj.type = 'unchanged';
    } else {
      if (Object.hasOwn(a, k) && !Object.hasOwn(b, k)) {
        obj.value = a[k]; // del
        obj.type = 'deleted';
      }
      if (Object.hasOwn(b, k) && !Object.hasOwn(a, k)) {
        obj.value = b[k]; // add
        obj.type = 'added';
      }
      if (Object.hasOwn(b, k) && Object.hasOwn(a, k)) {
        obj.value1 = a[k];
        obj.value2 = b[k]; // change
        obj.type = 'changed';
      }
    }
    result.push(obj);
    return result;
  });
  return result;
};

export default genDiff;
