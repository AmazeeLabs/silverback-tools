import {expect, test} from '@oclif/test';
import fs from 'fs';
import sinon from 'sinon';

describe('write new yaml file', () => {
  const stub = sinon.stub();

  test
    .stub(fs, 'writeFileSync', stub)
    .stdout()
    .command(['yaml', 'test.yml', 'foo: bar\n']);

  test
    .stub(fs, 'writeFileSync', stub)
    .stdout()
    .command(['yaml', 'test.yaml', 'foo: bar'])
    .it('writes YAML to a file with extension .yaml', () => {
      expect(stub.calledWithExactly('test.yaml', 'foo: bar\n')).to.be.true;
    });
});

describe('write json file', () => {
  const stub = sinon.stub();
  test
    .stub(fs, 'writeFileSync', stub)
    .stdout()
    .command(['yaml', 'test.json', 'foo: bar'])
    .it('writes formatted JSON to a file with extension .json', () => {
      expect(stub.called).to.be.true;
      expect(stub.getCall(0).args[0]).to.equal('test.json');
      expect(stub.getCall(0).args[1]).to.equal('{\n  "foo": "bar"\n}\n');
    });
});
