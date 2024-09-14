const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const getDiff = (coll1, coll2) => {
  const result = [];
  const keys = new Set([...Object.keys(coll1), ...Object.keys(coll2)]);
  [...keys].map((key) => {
    const obj = { key };
    if (isObject(coll1[key]) && isObject(coll2[key])) {
      obj.type = 'unchanged';
      obj.children = getDiff(coll1[key], coll2[key]);
    } else if (coll1[key] === coll2[key]) {
      obj.value = coll1[key];
      obj.type = 'unchanged';
    } else {
      if (Object.hasOwn(coll1, key) && !Object.hasOwn(coll2, key)) {
        obj.value = coll1[key]; // del
        obj.type = 'deleted';
      }
      if (Object.hasOwn(coll2, key) && !Object.hasOwn(coll1, key)) {
        obj.value = coll2[key]; // add
        obj.type = 'added';
      }
      if (Object.hasOwn(coll2, key) && Object.hasOwn(coll1, key)) {
        obj.value = [coll1[key], coll2[key]];
        obj.type = 'changed';
      }
    }
    result.push(obj);
    return result;
  });

  return result;
};

export default getDiff;
