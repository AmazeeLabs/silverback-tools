import {Command, flags} from '@oclif/command';
import fs from 'fs';
import YAML from 'yaml';
import * as path from 'path';

export default class Yaml extends Command {
  static description = 'Store YAML string in a target file.';

  static examples = ['$ svbt yaml test.yml "name: foo"'];

  static flags = {
    help: flags.help({char: 'h'}),
  };

  static args = [{name: 'file'}, {name: 'data'}];

  async run() {
    const {args} = this.parse(Yaml);
    const data = YAML.parse(args.data);
    const output =
      path.extname(args.file) === '.json'
        ? JSON.stringify(data, null, 2) + '\n'
        : YAML.stringify(data);
    fs.writeFileSync(args.file, output);
  }
}
