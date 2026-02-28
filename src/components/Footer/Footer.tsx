import { siteConfig } from "../../config/siteConfig";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.names}>
        {siteConfig.couple.partner1} & {siteConfig.couple.partner2}
      </p>
      <p className={styles.hashtag}>{siteConfig.couple.hashtag}</p>

      <div className={styles.social}>
        {siteConfig.social.instagram && (
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        )}
        {siteConfig.social.facebook && (
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
        )}
      </div>

      <p className={styles.copy}>
        &copy; {new Date().getFullYear()} {siteConfig.couple.partner1} &{" "}
        {siteConfig.couple.partner2}. Made with love.
      </p>
    </footer>
  );
}
