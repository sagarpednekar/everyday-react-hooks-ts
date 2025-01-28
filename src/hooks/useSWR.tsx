import { useCallback, useEffect, useState } from "react";
import axios from "axios";

type Data = {
  title: string;
  body: string;
};

export default function useSWR(
  url = "",
  // auto refreshing
  enablePolling = false,
  pollingInterval = 3000
) {
  // state management
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetcher = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(url);
      setIsLoading(false);
      setData(res.data);
    } catch (error) {
      setError("Failed to fetch..");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // data fetching
  useEffect(() => {
    fetcher();
    if (!enablePolling) {
      return;
    }
    const intervalId = setInterval(fetcher, pollingInterval);
    // cleanup interval
    return () => clearInterval(intervalId);
  }, [enablePolling, pollingInterval, fetcher]);

  // return todos and loading state
  return { data, isLoading, error };
}
