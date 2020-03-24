#!/usr/bin/env node
import commander from 'commander';

const program = new commander.Command();

program
  .arguments('')
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-v, --version', 'output usage information');

program.parse(process.argv);

if (!program.args.length) program.help();
