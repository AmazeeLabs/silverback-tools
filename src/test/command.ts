import {command as oclifCommand} from '@oclif/test';
import {Config} from '@oclif/test';
import path from 'path';

export const command = async (args: string[]): Promise<void> => {
  return oclifCommand(args).run({
    config: await Config.load({root: path.resolve(__dirname, '../../')}),
    expectation: '',
  });
};
