import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { siteConfig } from "../../config/siteConfig";
import useCountdown from "../../hooks/useCountdown";
import styles from "./Hero.module.css";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const { days, hours, minutes, seconds, isExpired } = useCountdown(
    siteConfig.weddingDate
  );

  const countdownItems = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Mins" },
    { value: seconds, label: "Secs" },
  ];

  return (
    <div className={styles.hero} ref={ref}>
      <motion.div
        className={styles.background}
        style={{
          backgroundImage: `url(${siteConfig.hero.backgroundImage})`,
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
        <p className={styles.date}>{siteConfig.hero.dateDisplay}</p>

        {!isExpired && (
          <div className={styles.countdown}>
            {countdownItems.map((item) => (
              <div className={styles.countdownBox} key={item.label}>
                <span className={styles.countdownValue}>{item.value}</span>
                <span className={styles.countdownLabel}>{item.label}</span>
              </div>
            ))}
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
