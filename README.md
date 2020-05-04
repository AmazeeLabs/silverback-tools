# silverback-tools

Silverback CLI tools for scripted project maintenance.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Build status](https://img.shields.io/github/workflow/status/AmazeeLabs/silverback-tools/Release)](https://github.com/AmazeeLabs/silverback-tools)
[![Coverage](https://img.shields.io/codeclimate/coverage/AmazeeLabs/silverback-tools)](https://codeclimate.com/github/AmazeeLabs/silverback-tools)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/AmazeeLabs/silverback-tools)](https://codeclimate.com/github/AmazeeLabs/silverback-tools)
[![Version](https://img.shields.io/npm/v/@amazeelabs/silverback-tools.svg)](https://npmjs.org/package/@amazeelabs/silverback-tools)
[![Downloads/week](https://img.shields.io/npm/dw/@amazeelabs/silverback-tools.svg)](https://npmjs.org/@amazeelabs/package/@amazeelabs/silverback-tools)
[![License](https://img.shields.io/npm/l/@amazeelabs/silverback-tools.svg)](https://github.com/AmazeeLabs/@amazeelabs/silverback-tools/blob/master/package.json)

<!-- toc -->
* [silverback-tools](#silverback-tools)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g @amazeelabs/silverback-tools
$ svbt COMMAND
running command...
$ svbt (-v|--version|version)
@amazeelabs/silverback-tools/1.1.0 linux-x64 node-v12.16.3
$ svbt --help [COMMAND]
USAGE
  $ svbt COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`svbt help [COMMAND]`](#svbt-help-command)
* [`svbt yaml [FILE] [DATA]`](#svbt-yaml-file-data)

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

Store YAML data into target file.

```
USAGE
  $ svbt yaml [FILE] [DATA]

OPTIONS
  -h, --help  show CLI help

DESCRIPTION
  Store YAML data into target file.
     Automatically changes output format based on file extension:
     .yml  -> YAML
     .yaml -> YAML
     .json -> formatted JSON

EXAMPLE
  $ svbt yaml test.yml "name: foo"
```

_See code: [src/commands/yaml.ts](https://github.com/AmazeeLabs/silverback-tools/blob/v1.1.0/src/commands/yaml.ts)_
<!-- commandsstop -->
