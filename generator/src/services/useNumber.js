import { useEffect, useState } from "react";

export function useNumber(first, last, change) {
  const [data, setData] = useState(0);
  useEffect(() => {
    setData(randomDigit(first, last));
  }, [change]);
  return data;
}

function randomDigit(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}
