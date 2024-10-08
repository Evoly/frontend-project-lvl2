const isObject = (value) => value && typeof value === 'object' && !Array.isArray(value);

const stringify = (data, lvl = 1, sign = '', substr = ' ', count = 4) => {
  const signes = sign.length === 0 ? substr.repeat(count * lvl) : `${substr.repeat(count * lvl - sign.length)}${sign}`;
  if (typeof data !== 'object' || data === null) return `${signes}${data.toString()}`;

  const result = [...Object.entries(data)].map((el) => {
    const [key, value] = el;
    if (isObject(value)) {
      return `${signes}${key}: {\n${stringify(value, lvl + 1)}${substr.repeat(signes.length)}}\n`;
    }

    return `${signes}${key}: ${value}\n`;
  });

  return result.join('');
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

      if (Object.hasOwn(item, 'children')) {
        return `${stringify(`${key}`, depth, `${type}`)}: {\n${iter(item.children, depth + 1)}${substr.repeat(counter * depth)}}\n`;
      }

      if (item.type === 'changed') {
        const strDeleted = `${stringify({ [key]: item.value[0] }, depth, `${types.deleted}`)}`;
        const strAdded = `${stringify({ [key]: item.value[1] }, depth, `${types.added}`)}`;
        return strDeleted + strAdded;
      }

      return `${stringify({ [key]: item.value }, depth, `${type}`)}`;
    });

    return arr.join('');
  };
  const result = iter(data, 1);

  return `{\n${result}}`;
};

export default stylish;
