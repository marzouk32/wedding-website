import { siteConfig } from "../../config/siteConfig";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.ornament}>
        <span className={styles.line} />
        <span className={styles.diamond}>&#9830;</span>
        <span className={styles.line} />
      </div>
      <p className={styles.names}>
        {siteConfig.couple.partner1} & {siteConfig.couple.partner2}
      </p>
      <p className={styles.date}>April 17, 2026</p>
      <p className={styles.hashtag}>{siteConfig.couple.hashtag}</p>
      <p className={styles.copy}>
        Made with love
      </p>
    </footer>
  );
}
