export const assertFulfilled = <T extends {}>(
  item: PromiseSettledResult<T>
): item is PromiseFulfilledResult<T> => {
  return item.status === 'fulfilled';
};
