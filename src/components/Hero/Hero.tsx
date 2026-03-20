import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { siteConfig } from "../../config/siteConfig";
import useCountdown from "../../hooks/useCountdown";
import styles from "./Hero.module.css";

function useImageWithFallback(src: string, fallback?: string) {
  const [imgSrc, setImgSrc] = useState(src);
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onerror = () => { if (fallback) setImgSrc(fallback); };
  }, [src, fallback]);
  return imgSrc;
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgSrc = useImageWithFallback(
    siteConfig.hero.backgroundImage,
    siteConfig.hero.backgroundImageFallback
  );

  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    siteConfig.weddingDate
  );

  return (
    <div className={styles.hero} ref={ref}>
      <motion.div
        className={styles.background}
        style={{
          backgroundImage: `url(${bgSrc})`,
          y: bgY,
        }}
      />
      <div className={styles.overlay} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <p className={styles.subtitle}>{siteConfig.hero.subtitle}</p>
        <h1 className={styles.names}>
          {siteConfig.couple.partner1} & {siteConfig.couple.partner2}
        </h1>
        <div className={styles.dateLine}>
          <span className={styles.dateDash} />
          <p className={styles.date}>{siteConfig.hero.dateDisplay}</p>
          <span className={styles.dateDash} />
        </div>

        {!isExpired && (
          <div className={styles.countdown}>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{days}</span>
              <span className={styles.countdownLabel}>Days</span>
            </div>
            <span className={styles.countdownSep}>&middot;</span>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{hours}</span>
              <span className={styles.countdownLabel}>Hours</span>
            </div>
            <span className={styles.countdownSep}>&middot;</span>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{minutes}</span>
              <span className={styles.countdownLabel}>Minutes</span>
            </div>
            <span className={styles.countdownSep}>&middot;</span>
            <div className={styles.countdownItem}>
              <span className={styles.countdownValue}>{seconds}</span>
              <span className={styles.countdownLabel}>Seconds</span>
            </div>
          </div>
        )}
      </motion.div>

      <div className={styles.scrollIndicator}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}
