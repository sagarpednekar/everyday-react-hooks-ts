import { useEffect, useState } from "react";

export default function useDebounce(value: string, delay: number) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      console.log("input", value);
      setInputValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value]);
  return inputValue;
}
