/* eslint-disable no-unused-vars */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import stringify from '../../src/stringify.js';

import nestedData from '../__fixtures__/nestedData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const nestedStr = fs.readFileSync(getFixturePath('toStr.txt'), 'utf-8');

export default test('test compare', () => {
  expect(stringify(nestedData)).toBe(nestedStr);
});
