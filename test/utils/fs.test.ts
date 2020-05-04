import fs from 'fs';
import {readFile, writeFile} from '../../src/utils/fs';
import sinon from 'sinon';
import {expect} from '@oclif/test';

beforeEach(() => {
  sinon.restore();
});

describe('readFile', () => {
  it('returns null if the file does not exist', () => {
    const exists = sinon.stub(fs, 'existsSync').returns(false);
    const read = sinon.stub(fs, 'readFileSync').returns('foo');
    expect(readFile('foo')).to.be.null;
    expect(exists.calledOnce).to.be.true;
    expect(exists.calledWithExactly('foo')).to.be.true;
    expect(read.notCalled).to.be.true;
  });

  it('returns the files content', () => {
    const exists = sinon.stub(fs, 'existsSync').returns(true);
    const read = sinon.stub(fs, 'readFileSync').returns('foo');
    expect(readFile('bar')).to.equal('foo');
    expect(exists.calledOnce).to.be.true;
    expect(exists.calledWithExactly('bar')).to.be.true;
    expect(read.calledOnce).to.be.true;
  });
});

describe('writeFile', () => {
  it('writes content to a file', () => {
    const write = sinon.stub(fs, 'writeFileSync');
    writeFile('foo', 'bar');
    expect(write.calledOnce).to.be.true;
    expect(write.calledWithExactly('foo', 'bar')).to.be.true;
    expect(write.calledOnce).to.be.true;
  });
});
