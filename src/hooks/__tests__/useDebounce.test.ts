import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from '../useDebounce';

describe('useDebounce hook', () => {
  beforeAll(() => {
    jest.useFakeTimers('modern');
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should be defined', () => {
    expect(useDebounce).toBeDefined();
  });

  it('should return a debounced value', () => {
    let value = 'value';
    const delay = 100;
    const { result } = renderHook(() => useDebounce(value, delay));

    expect(result.current).toEqual(value);
  });

  it('should debounce value changes by given delay', async () => {
    const { result, rerender } = renderHook(
      ({ value, delay }) => useDebounce(value, delay),
      {
        initialProps: { value: '', delay: 500 },
      }
    );

    expect(result.current).toEqual('');

    rerender({ value: 'new value', delay: 500 });
    act(() => {
      jest.runAllTimers();
    });

    expect(result.current).toEqual('new value');
  });
});
