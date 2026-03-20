import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { siteConfig } from "../../config/siteConfig";
import styles from "./Envelope.module.css";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = () => {
    setOpening(true);
    setTimeout(onOpen, 1400);
  };

  return (
    <AnimatePresence>
      {!opening ? (
        <motion.div
          className={styles.wrapper}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Names at top */}
          <motion.div
            className={styles.header}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className={styles.names}>
              {siteConfig.couple.partner1}
              <span className={styles.ampersand}> & </span>
              {siteConfig.couple.partner2}
            </h1>
          </motion.div>

          {/* Envelope */}
          <motion.div
            className={styles.envelopeWrap}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onClick={handleOpen}
          >
            <div className={styles.envelope}>
              {/* Back flap (bottom triangle) */}
              <div className={styles.flapBottom} />
              {/* Left flap */}
              <div className={styles.flapLeft} />
              {/* Right flap */}
              <div className={styles.flapRight} />
              {/* Top flap */}
              <div className={styles.flapTop} />
            </div>

            {/* Wax seal */}
            <motion.div
              className={styles.seal}
              whileHover={{ boxShadow: "0 8px 35px rgba(0, 0, 0, 0.5)" }}
            >
              <span className={styles.sealInner}>
                <span className={styles.sealInitials}>
                  {siteConfig.couple.partner1[0]}&{siteConfig.couple.partner2[0]}
                </span>
              </span>
            </motion.div>
          </motion.div>

          {/* Click to open */}
          <motion.p
            className={styles.tapHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0.4, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 0.5 }}
          >
            click to open...
          </motion.p>

          {/* Date at bottom */}
          <motion.p
            className={styles.date}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            17 . 04 . 2026
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className={styles.header}>
            <h1 className={styles.names}>
              {siteConfig.couple.partner1}
              <span className={styles.ampersand}> & </span>
              {siteConfig.couple.partner2}
            </h1>
          </div>

          <motion.div
            className={styles.envelopeWrap}
            animate={{ y: -40, scale: 0.92, opacity: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.envelope}>
              <div className={styles.flapBottom} />
              <div className={styles.flapLeft} />
              <div className={styles.flapRight} />
              <motion.div
                className={styles.flapTop}
                animate={{ rotateX: -180 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
