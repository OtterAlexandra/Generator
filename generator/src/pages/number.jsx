import { useState, useCallback } from "react";
import { useNumber } from "../services/useNumber";
import styles from "./IndexPage.module.css";

export function NumberPage() {
  const [fisrt, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  const [button1, setButton] = useState(0);

  const decrement = useCallback(() => {
    setButton(() => button1 + 1);
  }, [button1]);

  const data = useNumber(fisrt, second, button1);

  return (
    <div>
      <div className={styles.customInput}>{data}</div>

      <div className={styles.parent}>
        <p className={styles.customInput}>От</p>
        <input
          className={styles.customInput1}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
      </div>
      <div className={styles.parent}>
        <p className={styles.customInput}>До</p>
        <input
          className={styles.customInput1}
          onChange={(e) => {
            setSecond(e.target.value);
          }}
        />
      </div>

      <br />
      <button className={styles.customButton} onClick={decrement}>
        {" "}
        Generate{" "}
      </button>
    </div>
  );
}
