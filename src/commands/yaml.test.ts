import {expect} from 'chai';
import * as fs from '../../src/utils/fs';
import * as YAML from 'yaml';
import sinon from 'sinon';
import Yaml from './yaml';
import {stderr} from 'stdout-stderr';

/**
 * Test a single yaml write invocation.
 *
 * @param file
 *   The file to be written to.
 * @param content
 *   The content to pass into the command.
 * @param expected
 *   The content expected to be written to file.
 */
const testWrite = async (file: string, content: string, expected: string) => {
  const stub = sinon.stub(fs, 'writeFile');
  await Yaml.run([file, content]);
  expect(stub.calledOnce).to.be.true;
  expect(stub.getCall(0).args[0]).to.equal(file);
  expect(stub.getCall(0).args[1]).to.equal(expected);
  return stub;
};

describe('yaml', () => {
  beforeEach(() => {
    sinon.restore();
  });

  it('writes YAML to a file with extension .yml', async () => {
    await testWrite('test.yml', 'foo: bar', 'foo: bar\n');
  });

  it('raises an error on malformed yaml input', async () => {
    stderr.start();
    await Yaml.run(['test.yml', 'foo: bar\n  bar: baz']);
    stderr.stop();
    expect(stderr.output).to.contain('Invalid YAML');
  });

  it('writes YAML to a file with extension .yaml', async () => {
    await testWrite('test.yaml', 'foo: bar', 'foo: bar\n');
  });

  it('writes formatted JSON to a file with extension .json', async () => {
    await testWrite('test.json', 'foo: bar', '{\n  "foo": "bar"\n}\n');
  });

  it('deep merges documents if the target file already exists', async () => {
    const current = {
      name: 'foo',
      version: '1.0',
      props: {
        a: 'x',
        b: 'y',
      },
    };

    const input = {
      name: 'bar',
      props: {
        b: 'z',
      },
    };

    const expected = {
      name: 'bar',
      version: '1.0',
      props: {
        a: 'x',
        b: 'z',
      },
    };

    sinon.stub(fs, 'readFile').returns(YAML.stringify(current));
    const writeMock = sinon.stub(fs, 'writeFile');
    await Yaml.run(['test.yml', YAML.stringify(input)]);
    expect(writeMock.calledOnce).to.be.true;
    expect(writeMock.getCall(0).args[0]).to.equal('test.yml');
    expect(YAML.parse(writeMock.getCall(0).args[1])).to.deep.equal(expected);
  });
});
