import { FixedSizeQueue } from '../fixedSizeQueue';

describe('FixedSizeQueue class', () => {
  let queue: FixedSizeQueue<string>;
  const size = 4;
  const initialValues = ['a', 'b', 'c'];

  beforeEach(() => {
    queue = new FixedSizeQueue<string>(size, initialValues);
  });

  it('Initializes correctly', () => {
    expect(queue.size).toEqual(size);
    expect(queue.values).toHaveLength(initialValues.length);

    for (let i = 0; i < initialValues.length; ++i) {
      expect(queue.values[i]).toEqual(initialValues[i]);
    }
  });

  it('Prevents overflow', () => {
    queue.push('d');
    queue.push('e');
    expect(queue.size).toEqual(size);
  });

  it('allows to add elements to the back', () => {
    const previousLength = queue.values.length;
    queue.push('d');
    expect(queue.values.length).toEqual(previousLength + 1);
    expect(queue.values[queue.values.length - 1]).toEqual('d');
  });

  it('allows to add elements to the start', () => {
    const previousLength = queue.values.length;
    queue.unshift('z');

    expect(queue.values.length).toEqual(previousLength + 1);
    expect(queue.values[0]).toEqual('z');
  });

  it('allows to delete elements', () => {
    queue.splice(1, 1);
    expect(queue.values.length).toEqual(initialValues.length - 1);
    expect(queue.values.indexOf(initialValues[1])).toEqual(-1);
  });

  it('ensures uniqueness of the elements', () => {
    const previousLength = queue.values.length;
    initialValues.forEach((value) => {
      queue.push(value);
    });
    const newLength = queue.values.length;

    expect(previousLength).toEqual(newLength);

    for (let i = 0; i < queue.values.length; ++i) {
      expect(queue.values[i]).toEqual(initialValues[i]);
    }
  });
});
