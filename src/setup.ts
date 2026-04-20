import { Command } from 'commander';
import { store } from './state/store';

const program = new Command();

export const setup = () => {
  const { updateDebugMode, updateInputFile } = store.getState();
  program
    .name('my-cli')
    .description('A simple TypeScript CLI utility')
    .version('1.0.0');

  program
    .requiredOption('-i, --input <string>', 'input file to parse')
    .option('-d, --debug', 'additional output', false);

  program.parse(process.argv);

  const options = program.opts();

  const debugMode = !!options.debug;
  updateDebugMode(debugMode);
  if (debugMode) {
    console.log(debugMode, options);
  }

  const inputFile = options.input;
  updateInputFile(inputFile);
};
