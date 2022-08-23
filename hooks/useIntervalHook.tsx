import { useEffect, useState } from "react";

export default function useIntervalHook({
  max,
  time,
}: {
  max: number;
  time: number;
}) {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCnt((cnt) => cnt == max ? 0 : cnt + 1);
    }, time);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    cnt,
  };
}
