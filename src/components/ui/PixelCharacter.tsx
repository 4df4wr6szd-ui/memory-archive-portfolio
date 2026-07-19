import styles from "./ui.module.css";

type PixelCharacterProps = {
  name: "nini" | "kuro";
  src?: string;
  label?: string;
};

export function PixelCharacter({ name, src, label }: PixelCharacterProps) {
  if (src) {
    return <img className={styles.pixelCharacter} src={src} alt={label ?? name} />;
  }

  return (
    <div className={styles.pixelPlaceholder} aria-label={label ?? name} role="img">
      {name}
    </div>
  );
}
