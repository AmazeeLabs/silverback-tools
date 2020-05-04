# silverback-tools

Silverback CLI tools for scripted project maintenance.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/silverback-tools.svg)](https://npmjs.org/package/silverback-tools)
[![Downloads/week](https://img.shields.io/npm/dw/silverback-tools.svg)](https://npmjs.org/package/silverback-tools)
[![License](https://img.shields.io/npm/l/silverback-tools.svg)](https://github.com/AmazeeLabs/silverback-tools/blob/master/package.json)

<!-- toc -->

- [silverback-tools](#silverback-tools)
- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @amazeelabs/silverback-tools
$ svbt COMMAND
running command...
$ svbt (-v|--version|version)
@amazeelabs/silverback-tools/0.0.0 darwin-x64 node-v13.11.0
$ svbt --help [COMMAND]
USAGE
  $ svbt COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`svbt help [COMMAND]`](#svbt-help-command)
- [`svbt yaml [FILE] [DATA]`](#svbt-yaml-file-data)

## `svbt help [COMMAND]`

display help for svbt

```
USAGE
  $ svbt help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `svbt yaml [FILE] [DATA]`

Store YAML string in a target file.

```
USAGE
  $ svbt yaml [FILE] [DATA]

OPTIONS
  -h, --help  show CLI help

EXAMPLE
  $ svbt yaml test.yml "name: foo"
```

_See code: [src/commands/yaml.ts](https://github.com/AmazeeLabs/silverback-tools/blob/v0.0.0/src/commands/yaml.ts)_

<!-- commandsstop -->
