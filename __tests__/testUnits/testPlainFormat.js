/* eslint-disable no-unused-vars */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import plainFormat from '../../src/formatters/plainFormat.js';

import nestedData from '../__fixtures__/nestedData.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const plain = fs.readFileSync(getFixturePath('plainFormat.txt'), 'utf-8');

test('plain format', () => {
  expect(plainFormat(nestedData)).toEqual(plain);
});
