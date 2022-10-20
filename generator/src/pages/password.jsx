import { useState, useCallback } from "react";
import { usePassword } from "../services/usePassword";
import styles from "./IndexPage.module.css";

export function PasswordPage() {
  const [letters, setLetters] = useState(0);
  const [button1, setButton] = useState(0);

  const decrement = useCallback(() => {
    setButton(() => button1 + 1);
  }, [button1]);

  const date = usePassword(letters, button1);

  return (
    <div>
      <div className={styles.customInput}>{date}</div>
      <p className={styles.customInput}>Length</p>
      <input
        className={styles.customInput1}
        onChange={(e) => {
          setLetters(e.target.value);
        }}
      />
      <br />
      <button className={styles.customButton} onClick={decrement}>
        {" "}
        Generate{" "}
      </button>
    </div>
  );
}
