import { siteConfig } from "../../config/siteConfig";
import ScrollReveal from "../shared/ScrollReveal";
import SectionHeading from "../shared/SectionHeading";
import styles from "./WeddingDetails.module.css";

export default function WeddingDetails() {
  return (
    <div className={styles.container}>
      <ScrollReveal>
        <SectionHeading
          title="Wedding Details"
        />
      </ScrollReveal>

      {/* Info cards */}
      <ScrollReveal>
        <div className={styles.cards}>
          {/* Katb Ketab */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                <line x1="8" y1="7" x2="16" y2="7" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
            </div>
            <h4 className={styles.cardTitle}>Katb Ketab</h4>
            <p className={styles.cardText}>{siteConfig.events[0].date}</p>
            <p className={styles.cardText}>5:30 PM</p>
          </div>

          {/* Wedding */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M8 21h8l-4-4-4 4z" />
                <path d="M12 17V9" />
                <circle cx="8" cy="5" r="3" />
                <circle cx="16" cy="5" r="3" />
              </svg>
            </div>
            <h4 className={styles.cardTitle}>Wedding</h4>
            <p className={styles.cardText}>{siteConfig.events[0].date}</p>
            <p className={styles.cardText}>{siteConfig.events[0].time}</p>
          </div>

          {/* Location */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h4 className={styles.cardTitle}>Location</h4>
            <p className={styles.cardText}>{siteConfig.venue.name}</p>
            <p className={styles.cardSubtext}>{siteConfig.venue.address}</p>
          </div>

          {/* Dress Code */}
          <div className={styles.card}>
            <div className={styles.icon}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M12 2L8 7h8l-4-5z" />
                <path d="M8 7v9a4 4 0 0 0 8 0V7" />
                <path d="M5 22h14" />
                <line x1="12" y1="16" x2="12" y2="22" />
              </svg>
            </div>
            <h4 className={styles.cardTitle}>Dress Code</h4>
            <p className={styles.cardText}>{siteConfig.dressCode}</p>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className={styles.disclaimer}>
          <div className={styles.disclaimerIcon}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
          <p>{siteConfig.adultsOnly}</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

