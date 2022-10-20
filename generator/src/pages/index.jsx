import styles from "./IndexPage.module.css";
import { Link } from "react-router-dom";

export function IndexPage() {
  return (
    <div>
      <h1>What do you want to generate</h1>
      <div className={styles.parent}>
        <Link to={"/password"} className={styles.customButton}>
          Generate password
        </Link>
        <br />
        <br />
        <Link to={"/number"} className={styles.customButton}>
          Generate number
        </Link>
      </div>
    </div>
  );
}
