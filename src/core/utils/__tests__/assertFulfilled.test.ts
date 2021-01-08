import { assertFulfilled } from '../assertFulfilled';

describe('assertFulfilled function', () => {
  it('tests a settled promise for fulfillment', async () => {
    const resolved = Promise.resolve(1);
    const rejected = Promise.reject(1);
    const promises = await Promise.allSettled([resolved, rejected]);
    const settledResolved = promises[0];

    expect(assertFulfilled<number>(settledResolved)).toBe(true);
  });

  it('guards from rejected settled promise', async () => {
    const resolved = Promise.resolve(1);
    const rejected = Promise.reject(1);
    const promises = await Promise.allSettled([resolved, rejected]);
    const settledRejected = promises[1];

    expect(assertFulfilled<number>(settledRejected)).toBe(false);
  });
});
