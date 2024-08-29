/* eslint no-nested-ternary:  */

import fs from 'node:fs';
import yaml from 'js-yaml';

const validateExt = (file) => {
  const ext = file.endsWith('.json') ? 'json' : file.endsWith('.yml') || file.endsWith('.yaml') ? 'yml' : 'err';
  return ext;
};

const data = (pathToFile) => {
  const extension = validateExt(pathToFile);
  if (extension === 'json') {
    return JSON.parse(fs.readFileSync(pathToFile, { encoding: 'utf8', flag: 'r' }));
  }
  if (extension === 'yml') {
    const ymlParse = yaml.load(fs.readFileSync(pathToFile, 'utf8'));
    if (!Array.isArray(ymlParse)) return ymlParse;

    const result = [...ymlParse].map((el) => {
      const key = Object.keys(el);
      return [Object.keys(el), el[key]].flat();
    });

    return Object.fromEntries(result);
  }

  throw Error('wrong file extension');
};

export default data;
