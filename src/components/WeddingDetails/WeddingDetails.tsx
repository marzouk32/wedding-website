import { siteConfig } from "../../config/siteConfig";
import styles from "./WeddingDetails.module.css";

export default function WeddingDetails() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Wedding Details</h2>

      <div className={styles.cards}>
        {/* Date & Time */}
        <div className={styles.card}>
          <div className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Date & Time</h3>
          <p className={styles.cardText}>{siteConfig.hero.dateDisplay}</p>
          <p className={styles.cardText}>
            {siteConfig.events[0].time}
          </p>
        </div>

        {/* Location */}
        <div className={styles.card}>
          <div className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Location</h3>
          <p className={styles.cardText}>{siteConfig.venue.name}</p>
          <p className={styles.cardSubtext}>{siteConfig.venue.address}</p>
        </div>

        {/* Dress Code */}
        <div className={styles.card}>
          <div className={styles.icon}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2l3 5h6l3-5" />
              <path d="M9 7v10a3 3 0 0 0 6 0V7" />
              <path d="M6 22h12" />
              <line x1="12" y1="17" x2="12" y2="22" />
            </svg>
          </div>
          <h3 className={styles.cardTitle}>Dress Code</h3>
          <p className={styles.cardText}>Formal</p>
        </div>
      </div>

      <p className={styles.disclaimer}>
        We love your little ones, but this is an adults-only celebration.
      </p>
    </div>
  );
}
