import styles from "./SectionHeading.module.css";

interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.ornament}>&#10047;</div>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
