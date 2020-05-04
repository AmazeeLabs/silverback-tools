import {Command, flags} from '@oclif/command';
import * as fs from 'fs';

export default class Yaml extends Command {
  static description = 'Store YAML string in a target file.';

  static examples = ['$ svbt yaml test.yml "name: foo"'];

  static flags = {
    help: flags.help({char: 'h'}),
  };

  static args = [{name: 'file'}, {name: 'data'}];

  async run() {
    const {args} = this.parse(Yaml);
    fs.writeFileSync(args.file, args.data);
  }
}
