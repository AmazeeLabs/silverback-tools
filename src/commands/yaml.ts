import {Command, flags} from '@oclif/command';
import YAML from 'yaml';
import * as path from 'path';
import {YAMLError} from 'yaml/util';
import {writeFile} from '../utils/fs';

export default class Yaml extends Command {
  static description = `
  Store YAML data into target file.
  Automatically changes output format based on file extension:
  .yml  -> YAML
  .yaml -> YAML
  .json -> formatted JSON
  `;

  static examples = ['$ svbt yaml test.yml "name: foo"'];

  static flags = {
    help: flags.help({char: 'h'}),
  };

  static args = [{name: 'file'}, {name: 'data'}];

  async run() {
    const {args} = this.parse(Yaml);
    try {
      const data = YAML.parse(args.data);
      const output =
        path.extname(args.file) === '.json'
          ? JSON.stringify(data, null, 2) + '\n'
          : YAML.stringify(data);
      writeFile(args.file, output);
    } catch (error) {
      if (error instanceof YAMLError) {
        this.error(`Invalid YAML - ${error.message}:\n${error.source}`);
      }
    }
  }
}
