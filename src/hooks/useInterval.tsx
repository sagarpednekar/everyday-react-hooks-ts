import { useEffect, useState } from "react";

export default function useInterval(callbackFn: ()=> void,interval = 1000) {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
      callbackFn()
    }, interval);

    // cleanup
    return () => clearInterval(intervalId);
  }, []);

  return timer;
}
