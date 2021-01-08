import { truncate } from '../truncate';

describe('truncate', () => {
  it('truncates a string that is longer than a given length', () => {
    let str = 'abcdefg';
    let maxLength = 5;
    expect(truncate(str, maxLength)).toEqual('abcde...');

    str = 'abc';
    maxLength = 999;
    expect(truncate(str, maxLength)).toEqual('abc');
  });

  it('truncates with tree dots in the end of the string only if withTrailingDots param is true', () => {
    let str = 'abcdefg';
    let maxLength = 5;

    expect(truncate(str, maxLength)).toEqual('abcde...');
    expect(truncate(str, maxLength, false)).toEqual('abcde');
  });
});
