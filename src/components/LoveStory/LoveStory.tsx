import { siteConfig } from "../../config/siteConfig";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import TimelineItem from "./TimelineItem";
import styles from "./LoveStory.module.css";

export default function LoveStory() {
  return (
    <div className={styles.section}>
      <ScrollReveal>
        <SectionHeading
          title="Our Love Story"
          subtitle="A journey of love, laughter, and unforgettable moments"
        />
      </ScrollReveal>

      <div className={styles.timeline}>
        <div className={styles.line} />
        {siteConfig.loveStory.map((item, i) => (
          <TimelineItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
