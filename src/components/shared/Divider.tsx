import styles from "./Divider.module.css";

export default function Divider() {
  return (
    <div className={styles.divider}>
      <span className={styles.line} />
      <span className={styles.diamond}>&#9830;</span>
      <span className={styles.line} />
    </div>
  );
}
