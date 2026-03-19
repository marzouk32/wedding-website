import { useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import styles from "./Venue.module.css";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80";

export default function Venue() {
  const { venue } = siteConfig;
  const [imgSrc, setImgSrc] = useState(venue.image);

  return (
    <div className={styles.section}>
      <ScrollReveal>
        <SectionHeading
          title="The Venue"
          subtitle="Where our celebration will take place"
        />
      </ScrollReveal>

      <ScrollReveal>
        <div className={styles.imageWrapper}>
          <img
            src={imgSrc}
            alt={venue.name}
            loading="lazy"
            onError={() => setImgSrc(FALLBACK_IMG)}
          />
        </div>
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

          <p className={styles.directions}>{venue.directions}</p>
        </div>
      </ScrollReveal>

      <ScrollReveal>
        <div className={styles.mapWrapper}>
          <iframe
            src={venue.mapEmbedUrl}
            title="Venue location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </ScrollReveal>
    </div>
  );
}
