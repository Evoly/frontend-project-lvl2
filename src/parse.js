import fs from 'node:fs';
import yaml from 'js-yaml';
import path from 'node:path';

const getParsedData = (data, ext) => {
  switch (ext) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      throw new Error(`Invalid extension - ${ext}`);
  }
};

const data = (filename) => {
  const filePath = path.resolve(process.cwd(), filename);
  const extension = path.extname(filePath).slice(1);
  const filecontent = fs.readFileSync(filePath, { encoding: 'utf8' });

  return getParsedData(filecontent, extension);
};

export default data;
