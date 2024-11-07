import { useCallback } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export default function useClickOutside(callback) {
  const ref = useRef(null);

  const handleClick = useCallback(
    (event) => {
      const isValidCallback = callback && typeof callback === 'function';
      if (!isValidCallback) return;

      if (ref.current && !ref.current.contains(event.target)) {
        callback && callback();
      }
    },
    [callback]
  );

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, []);

  return ref;
}
