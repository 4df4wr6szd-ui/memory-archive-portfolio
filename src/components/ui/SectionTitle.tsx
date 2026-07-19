import styles from "./ui.module.css";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function SectionTitle({ eyebrow, title, subtitle }: SectionTitleProps) {
  return (
    <div className={styles.sectionTitle}>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h1>{title}</h1>
      {subtitle ? <span>{subtitle}</span> : null}
    </div>
  );
}
