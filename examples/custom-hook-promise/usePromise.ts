import { useEffect, useState } from "react";

export default function usePromise<T>(
  callback: () => Promise<T>,
  deps: any[]
): { data: T | undefined; error: any } {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    let mounted = true;

    callback()
      .then((data) => {
        if (mounted) {
          setData(data);
        }
      })
      .catch((error) => {
        if (mounted) {
          setError(error);
        }
      });

    return () => {
      mounted = false;
    };
  }, deps);

  return { data, error };
}
