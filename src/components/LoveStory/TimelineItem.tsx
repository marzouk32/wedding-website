import ScrollReveal from "../shared/ScrollReveal";
import styles from "./LoveStory.module.css";

interface Props {
  item: {
    title: string;
    date: string;
    description: string;
    image: string;
  };
  index: number;
}

export default function TimelineItem({ item, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <div className={`${styles.item} ${isEven ? styles.left : styles.right}`}>
      <ScrollReveal direction={isEven ? "left" : "right"} delay={0.1}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img src={item.image} alt={item.title} loading="lazy" />
          </div>
          <div className={styles.text}>
            <span className={styles.date}>{item.date}</span>
            <h3 className={styles.itemTitle}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      </ScrollReveal>
      <div className={styles.dot} />
    </div>
  );
}
