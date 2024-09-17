/* eslint no-nested-ternary:  */

import fs from 'node:fs';
import yaml from 'js-yaml';
import path from 'node:path';

const filePath = (filename) => path.resolve(process.cwd(), filename);

const validateExt = (filename) => {
  const ext = filename.endsWith('.json') ? 'json' : filename.endsWith('.yml') || filename.endsWith('.yaml') ? 'yml' : 'err';
  return ext;
};

const data = (filename) => {
  const pathToFile = filePath(filename);
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

  throw Error('wrong filename extension');
};

export default data;
