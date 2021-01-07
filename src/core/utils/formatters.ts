export const kNumberFormatter = (n: number): string => {
  return Math.abs(n) > 999
    ? (Math.sign(n) * (Math.abs(n) / 1000)).toFixed(1) + 'k'
    : (Math.sign(n) * Math.abs(n)).toString();
};

export const commaNumberFormatter = (n: number): string => {
  return n.toLocaleString('en');
};
