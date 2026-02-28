import styles from "./EventDetails.module.css";

interface Props {
  event: {
    name: string;
    date: string;
    time: string;
    venue: string;
    address: string;
    description: string;
  };
}

export default function EventCard({ event }: Props) {
  return (
    <div className={styles.card}>
      <h3 className={styles.eventName}>{event.name}</h3>
      <p className={styles.eventDescription}>{event.description}</p>

      <div className={styles.details}>
        <div className={styles.detail}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <span>{event.date}</span>
        </div>

        <div className={styles.detail}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>{event.time}</span>
        </div>

        <div className={styles.detail}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <div>
            <span className={styles.venue}>{event.venue}</span>
            <span className={styles.address}>{event.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
