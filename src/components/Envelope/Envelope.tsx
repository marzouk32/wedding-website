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
    setTimeout(onOpen, 1600);
  };

  const envelopeContent = (
    <>
      <div className={styles.envelopeBody}>
        <div className={styles.innerFrame}>
          <div className={styles.cornerTL} />
          <div className={styles.cornerTR} />
          <div className={styles.cornerBL} />
          <div className={styles.cornerBR} />

          <p className={styles.inviteLabel}>Wedding Invitation</p>
          <h1 className={styles.names}>
            {siteConfig.couple.partner1}
            <span className={styles.ampersand}>&</span>
            {siteConfig.couple.partner2}
          </h1>
          <div className={styles.ornament}>
            <OrnamentSVG />
          </div>
          <p className={styles.date}>{siteConfig.hero.dateDisplay}</p>
        </div>
      </div>
    </>
  );

  return (
    <AnimatePresence>
      {!opening ? (
        <motion.div
          className={styles.wrapper}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.vineLeft}>
            <VineSVG />
          </div>
          <div className={styles.vineRight}>
            <VineSVG mirror />
          </div>

          <motion.div
            className={styles.envelope}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {envelopeContent}

            <motion.div
              className={styles.flap}
              animate={opening ? { rotateX: 180 } : { rotateX: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />

            <motion.button
              className={styles.seal}
              onClick={handleOpen}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={opening ? { scale: 0, opacity: 0 } : {}}
              transition={{ duration: 0.3 }}
            >
              <span className={styles.sealInner}>
                <span className={styles.sealInitials}>
                  {siteConfig.couple.partner1[0]} &{" "}
                  {siteConfig.couple.partner2[0]}
                </span>
              </span>
            </motion.button>
          </motion.div>

          <motion.p
            className={styles.tapHint}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          >
            Tap the seal to open
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className={styles.vineLeft}>
            <VineSVG />
          </div>
          <div className={styles.vineRight}>
            <VineSVG mirror />
          </div>

          <motion.div
            className={styles.envelope}
            animate={{ y: -60, scale: 0.9 }}
            transition={{ duration: 0.8 }}
          >
            {envelopeContent}
            <motion.div
              className={styles.flap}
              animate={{ rotateX: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function OrnamentSVG() {
  return (
    <svg
      width="200"
      height="24"
      viewBox="0 0 200 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 12h70c0 0 5-8 15-8s10 8 15 8 5-8 15-8 10 8 15 8h70"
        stroke="#b8965a"
        strokeWidth="1"
        fill="none"
      />
      <circle cx="100" cy="12" r="3" fill="#b8965a" />
      <circle cx="85" cy="12" r="1.5" fill="#b8965a" opacity="0.6" />
      <circle cx="115" cy="12" r="1.5" fill="#b8965a" opacity="0.6" />
    </svg>
  );
}

function VineSVG({ mirror }: { mirror?: boolean }) {
  return (
    <svg
      viewBox="0 0 80 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.vineSvg}
      style={mirror ? { transform: "scaleX(-1)" } : undefined}
    >
      {/* Main vine stem */}
      <path
        d="M40 0 C38 100 42 200 36 300 C30 400 44 500 38 600 C34 700 40 800 40 800"
        stroke="#7a9474"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />
      {/* Leaves along the vine */}
      <path d="M36 80 C20 70 10 75 5 85 C12 78 22 76 36 82" fill="#7a9474" opacity="0.4" />
      <path d="M38 80 C48 68 58 70 65 78 C56 72 48 72 38 82" fill="#7a9474" opacity="0.35" />

      <path d="M42 160 C56 148 66 150 72 160 C64 154 54 152 42 162" fill="#7a9474" opacity="0.38" />
      <path d="M40 160 C28 150 18 152 12 162 C20 156 30 154 40 162" fill="#7a9474" opacity="0.35" />

      <path d="M34 240 C18 228 8 232 3 242 C11 236 21 234 34 242" fill="#7a9474" opacity="0.36" />
      <path d="M36 240 C50 230 60 234 66 244 C58 237 48 234 36 242" fill="#7a9474" opacity="0.32" />

      <path d="M38 320 C52 310 62 314 68 324 C60 316 50 314 38 322" fill="#7a9474" opacity="0.34" />
      <path d="M36 320 C22 312 12 316 6 326 C14 318 24 316 36 322" fill="#7a9474" opacity="0.3" />

      <path d="M40 400 C26 388 16 392 10 402 C18 394 28 392 40 402" fill="#7a9474" opacity="0.32" />
      <path d="M42 400 C54 390 64 394 70 404 C62 396 52 394 42 402" fill="#7a9474" opacity="0.28" />

      <path d="M36 480 C50 468 60 472 66 482 C58 474 48 472 36 482" fill="#7a9474" opacity="0.3" />
      <path d="M34 480 C20 470 10 474 4 484 C12 476 22 474 34 482" fill="#7a9474" opacity="0.26" />

      <path d="M38 560 C24 548 14 552 8 562 C16 554 26 552 38 562" fill="#7a9474" opacity="0.28" />
      <path d="M40 560 C52 550 62 554 68 564 C60 556 50 554 40 562" fill="#7a9474" opacity="0.24" />

      <path d="M42 640 C56 630 66 634 72 644 C64 636 54 634 42 642" fill="#7a9474" opacity="0.26" />
      <path d="M40 640 C26 632 16 636 10 646 C18 638 28 636 40 642" fill="#7a9474" opacity="0.22" />

      <path d="M36 720 C22 710 12 714 6 724 C14 716 24 714 36 722" fill="#7a9474" opacity="0.24" />
      <path d="M38 720 C50 712 60 716 66 726 C58 718 48 716 38 722" fill="#7a9474" opacity="0.2" />

      {/* Small leaf details / tendrils */}
      <circle cx="36" cy="120" r="2" fill="#7a9474" opacity="0.15" />
      <circle cx="42" cy="200" r="2" fill="#7a9474" opacity="0.12" />
      <circle cx="34" cy="360" r="2" fill="#7a9474" opacity="0.15" />
      <circle cx="44" cy="440" r="2" fill="#7a9474" opacity="0.12" />
      <circle cx="38" cy="600" r="2" fill="#7a9474" opacity="0.15" />
      <circle cx="40" cy="680" r="2" fill="#7a9474" opacity="0.12" />

      {/* Greek key pattern accent near bottom */}
      <rect x="35" y="770" width="10" height="2" fill="#b8965a" opacity="0.15" rx="1" />
      <rect x="32" y="775" width="16" height="2" fill="#b8965a" opacity="0.12" rx="1" />
      <rect x="35" y="780" width="10" height="2" fill="#b8965a" opacity="0.1" rx="1" />
    </svg>
  );
}
