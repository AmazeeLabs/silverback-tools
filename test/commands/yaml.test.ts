import {expect} from 'chai';
import fs from 'fs';
import sinon from 'sinon';
import {command} from '../../src/test/command';

describe('yaml', () => {
  beforeEach(() => {
    sinon.restore();
  });

  it('writes YAML to a file with extension .yml', async () => {
    const stub = sinon.stub(fs, 'writeFileSync');
    await command(['yaml', 'test.yml', 'foo: bar']);
    expect(stub.calledOnce).to.be.true;
    expect(stub.getCall(0).args[0]).to.equal('test.yml');
    expect(stub.getCall(0).args[1]).to.equal('foo: bar\n');
  });

  it('writes YAML to a file with extension .yaml', async () => {
    const stub = sinon.stub(fs, 'writeFileSync');
    await command(['yaml', 'test.yaml', 'foo: bar']);
    expect(stub.calledOnce).to.be.true;
    expect(stub.getCall(0).args[0]).to.equal('test.yaml');
    expect(stub.getCall(0).args[1]).to.equal('foo: bar\n');
  });

  it('writes formatted JSON to a file with extension .json', async () => {
    const stub = sinon.stub(fs, 'writeFileSync');
    await command(['yaml', 'test.json', 'foo: bar']);
    expect(stub.calledOnce).to.be.true;
    expect(stub.getCall(0).args[0]).to.equal('test.json');
    expect(stub.getCall(0).args[1]).to.equal('{\n  "foo": "bar"\n}\n');
  });
});
