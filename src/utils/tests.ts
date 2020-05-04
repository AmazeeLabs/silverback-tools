import {command as oclifCommand} from '@oclif/test/lib/command';
import {load} from '@oclif/config';
import path from 'path';

export const command = async (args: string[]): Promise<void> => {
  return oclifCommand(args).run({
    config: await load({root: path.resolve(__dirname, '../../')}),
    expectation: '',
  });
};
