export const truncate = (
  str: string,
  maxLength: number,
  withTrailingDots: boolean = true
) => {
  return str.length > maxLength
    ? `${str.substring(0, maxLength)}${withTrailingDots ? '...' : ''}`
    : str;
};
