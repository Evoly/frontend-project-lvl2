#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../index.js';
import version from '../version.js';
import readFiles from '../parse.js';
import stylish from '../stringify.js';
import plainFormat from '../plainFormat.js';

const program = new Command();

program
  .name('genDiff')
  .arguments('<filepath1> <filepath1>')
  .description('Compares two configuration files and shows a difference.')
  .version(version, '-V, --version', 'output the version number')
  .option('-f --format [plain, stylish]', 'choose output format', 'stylish')
  .helpOption('-h --help', 'output usage information')
  .action((filepath1, filepath2, options) => {
    console.log(options);
    const file1 = readFiles(filepath1);
    const file2 = readFiles(filepath2);

    if (options.format === 'plain') {
      console.log(plainFormat(genDiff(file1, file2)));
    } else {
      console.log(stylish(genDiff(file1, file2)));
    }
  });

program.parse();
