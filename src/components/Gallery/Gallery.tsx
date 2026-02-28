import { useState } from "react";
import { siteConfig } from "../../config/siteConfig";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import Lightbox from "./Lightbox";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % siteConfig.gallery.length);
  };

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      (lightboxIndex - 1 + siteConfig.gallery.length) %
        siteConfig.gallery.length
    );
  };

  return (
    <div className={styles.section}>
      <ScrollReveal>
        <SectionHeading
          title="Our Gallery"
          subtitle="Moments we've shared together"
        />
      </ScrollReveal>

      <div className={styles.grid}>
        {siteConfig.gallery.map((img, i) => (
          <ScrollReveal key={img.src} delay={i * 0.08}>
            <div
              className={styles.imageWrapper}
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          </ScrollReveal>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={siteConfig.gallery}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </div>
  );
}
