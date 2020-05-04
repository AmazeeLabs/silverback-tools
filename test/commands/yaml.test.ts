import {expect, test} from '@oclif/test';
import fs from 'fs';
import sinon from 'sinon';

describe('yaml', () => {
  const fileName = 'test.yml';
  const content = 'foo: bar';
  const stub = sinon.stub();

  test
    .stub(fs, 'writeFileSync', stub)
    .stdout()
    .command(['yaml', fileName, content])
    .it('writes yaml to a file', () => {
      expect(stub.calledWithExactly(fileName, content)).to.be.true;
    });
});
