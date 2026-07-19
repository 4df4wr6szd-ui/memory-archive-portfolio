import styles from "./ui.module.css";

type FloatingTagProps = {
  children: string;
};

export function FloatingTag({ children }: FloatingTagProps) {
  return <span className={styles.floatingTag}>{children}</span>;
}
