import { siteConfig } from "../../config/siteConfig";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.names}>
        {siteConfig.couple.partner1} & {siteConfig.couple.partner2}
      </p>
      <p className={styles.hashtag}>{siteConfig.couple.hashtag}</p>
      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} {siteConfig.couple.partner1} &{" "}
        {siteConfig.couple.partner2}. Made with love.
      </p>
    </footer>
  );
}
