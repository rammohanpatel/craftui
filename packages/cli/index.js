#!/usr/bin/env node 

import { Command } from 'commander';
import { copyComponent } from './utils.js';

const program = new Command();

program
  .name('craftui')
  .description('CLI to manage UI components')
  .version('1.0.0');

program
  .command('add <component>')
  .description('Add a UI component')
  .option('--lang <language>', 'js, ts, or tsx', 'ts')
  .option('--dest <destination>', 'destination path', './src/components')
  .action((component, options) => {
    // Pass lang directly as 'js', 'ts', or 'tsx'
    copyComponent(component, options.lang, options.dest);
  });

program.parse();
