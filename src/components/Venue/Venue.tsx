import { siteConfig } from "../../config/siteConfig";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import styles from "./Venue.module.css";

export default function Venue() {
  const { venue } = siteConfig;

  return (
    <div className={styles.section}>
      {/* Content area — sits on page background */}
      <div className={styles.content}>
        <ScrollReveal>
          <SectionHeading title="Our Venue" subtitle={venue.caption} />
        </ScrollReveal>

        <ScrollReveal>
          <div className={styles.info}>
            <h3 className={styles.venueName}>{venue.name}</h3>
            <div className={styles.detail}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{venue.address}</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Image area — starts here, between directions and CTA */}
      <div className={styles.imageArea}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${venue.backgroundImage})` }}
        />
        <div className={styles.fadeTop} />

        <div className={styles.ctaOverImage}>
          <ScrollReveal>
            <div className={styles.ctaCenter}>
              <a
                href={venue.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.locationBtn}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Click for Location
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
