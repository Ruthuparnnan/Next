import { useCallback, useMemo, useState, useEffect } from "react";

export const useDebounce = (inputValue, delay = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue);

  const debouncedHandler = useCallback(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [delay, inputValue]);

  useEffect(() => {
    debouncedHandler();
  }, [debouncedHandler]);

  const memoizedValue = useMemo(() => debouncedValue, [debouncedValue]);
  return memoizedValue;
};
