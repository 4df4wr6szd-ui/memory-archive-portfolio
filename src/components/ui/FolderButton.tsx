import Link from "next/link";
import styles from "./ui.module.css";

type FolderButtonProps = {
  href: string;
  label: string;
};

export function FolderButton({ href, label }: FolderButtonProps) {
  return (
    <Link className={styles.folderButton} href={href}>
      {label}
    </Link>
  );
}
