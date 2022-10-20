import { useEffect, useState } from "react";

export function usePassword(count, b) {
  const [data, setData] = useState(0);
  useEffect(() => {
    setData(getRandomPassword(count));
  }, [b]);
  return data;
}

function getRandomPassword(n) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/!$%&()=?*+";

  let password = "";
  for (let i = 0; i < n; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}
