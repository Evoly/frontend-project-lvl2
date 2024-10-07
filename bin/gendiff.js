#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../index.js';
import version from '../src/version.js';

const program = new Command();

program
  .name('genDiff')
  .arguments('<filepath1> <filepath1>')
  .description('Compares two configuration files and shows a difference.')
  .version(version, '-V, --version', 'output the version number')
  .option('-f --format [plain, stylish]', 'choose output format', 'stylish')
  .helpOption('-h --help', 'output usage information')
  .action((filepath1, filepath2, options) => {
    console.log(genDiff(filepath1, filepath2, options.format));
  });

program.parse();
