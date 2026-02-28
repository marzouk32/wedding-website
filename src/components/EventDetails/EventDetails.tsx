import { siteConfig } from "../../config/siteConfig";
import SectionHeading from "../shared/SectionHeading";
import ScrollReveal from "../shared/ScrollReveal";
import EventCard from "./EventCard";
import styles from "./EventDetails.module.css";

export default function EventDetails() {
  return (
    <div className={styles.section}>
      <ScrollReveal>
        <SectionHeading
          title="Wedding Details"
          subtitle="We would be honored to have you celebrate with us"
        />
      </ScrollReveal>

      <div className={styles.cards}>
        {siteConfig.events.map((event, i) => (
          <ScrollReveal key={event.name} delay={i * 0.15}>
            <EventCard event={event} />
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
