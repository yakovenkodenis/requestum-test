import { useEffect, MutableRefObject } from 'react';

export const useClickedOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  callbackOnOutsideClick: () => void
): void => {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackOnOutsideClick();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callbackOnOutsideClick]);
};
