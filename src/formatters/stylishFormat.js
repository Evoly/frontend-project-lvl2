const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const stringify = (data, lvl = 1, sign = '', substr = ' ', count = 4) => {
  const signes = sign.length === 0 ? substr.repeat(count * lvl) : `${substr.repeat(count * lvl - sign.length)}${sign}`;
  let result = '';

  if (typeof data !== 'object' || data === null) return `${signes}${data.toString()}`;

  [...Object.entries(data)].forEach((el) => {
    const [key, value] = el;
    if (isObject(value)) {
      result += `${signes}${key}: {\n${stringify(value, lvl + 1)}${substr.repeat(signes.length)}}\n`;
      return result;
    }

    result += `${signes}${key}: ${value}\n`;
    return result;
  });

  return result;
};

const types = {
  added: '+ ',
  deleted: '- ',
  unchanged: '  ',
};

const stylish = (data, substr = ' ', counter = 4) => {
  const iter = (currentVal, depth) => {
    const arr = currentVal.map((item) => {
      const type = types[item.type];
      const { key } = item;
      let result = '';

      if (Object.hasOwn(item, 'children')) {
        result += `${stringify(`${key}`, depth, `${type}`)}: {\n${iter(item.children, depth + 1)}${substr.repeat(counter * depth)}}\n`;
        return result;
      }

      if (item.type === 'changed') {
        const strDeleted = `${stringify({ [key]: item.value[0] }, depth, `${types.deleted}`)}`;
        const strAdded = `${stringify({ [key]: item.value[1] }, depth, `${types.added}`)}`;
        result += strDeleted + strAdded;

        return result;
      }

      result += `${stringify({ [key]: item.value }, depth, `${type}`)}`;
      return result;
    });

    return arr.join('');
  };
  const result = iter(data, 1);

  return `{\n${result}}`;
};

export default stylish;
