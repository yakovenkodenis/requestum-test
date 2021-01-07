import { kNumberFormatter, commaNumberFormatter } from '../formatters';

describe('kNumberFormatter', () => {
  it('prefixes the given number if it is more than 999', () => {
    const num1 = 1100;
    const num2 = 129000;
    const num3 = 564123589;
    const num4 = 12;
    const num5 = 854;

    expect(kNumberFormatter(num1)).toEqual('1.1k');
    expect(kNumberFormatter(num2)).toEqual('129.0k');
    expect(kNumberFormatter(num3)).toEqual('564123.6k');
    expect(kNumberFormatter(num4)).toEqual('12');
    expect(kNumberFormatter(num5)).toEqual('854');
  });
});

describe('commaNumberFormatter', () => {
  it('separates every thousandth rank of a number with a comma', () => {
    const num1 = 999999;
    const num2 = 125876123;
    const num3 = 123;
    const num4 = 999;
    const num5 = 10000;

    expect(commaNumberFormatter(num1)).toEqual('999,999');
    expect(commaNumberFormatter(num2)).toEqual('125,876,123');
    expect(commaNumberFormatter(num3)).toEqual('123');
    expect(commaNumberFormatter(num4)).toEqual('999');
    expect(commaNumberFormatter(num5)).toEqual('10,000');
  });
});
