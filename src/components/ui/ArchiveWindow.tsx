import type { ReactNode } from "react";
import { WindowControls } from "./WindowControls";
import styles from "./ui.module.css";

type ArchiveWindowProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export function ArchiveWindow({ title = "MEMORY_ARCHIVE.exe", children, className = "" }: ArchiveWindowProps) {
  return (
    <section className={`${styles.archiveWindow} ${className}`}>
      <header className={styles.windowHeader}>
        <span>{title}</span>
        <WindowControls />
      </header>
      <div className={styles.windowBody}>{children}</div>
    </section>
  );
}
