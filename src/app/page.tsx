import Link from "next/link";
import { PixelCharacter } from "@/components/ui/PixelCharacter";
import { characterAssets } from "@/lib/assets";
import styles from "./page.module.css";

export default function ArrivalPage() {
  return (
    <main className={styles.arrivalPage}>
      <div className={styles.brandBlock}>
        <h1 className={styles.title}>memory.zip</h1>
        <p className={styles.subtitle}>A personal archive by Nini</p>
      </div>

      <section className={styles.memoryText} aria-label="Archive introduction">
        <p>Some memories become experiences.</p>
        <p>Some experiences become who we are.</p>
      </section>

      <Link className={styles.enterLink} href="/archive" aria-label="Begin Exploring Memory Archive">
        <span className={styles.enterArrow}>↓</span>
        <span>Begin Exploring</span>
      </Link>

      <div className={styles.characterKuro}>
        <PixelCharacter name="kuro" src={characterAssets.kuro} />
      </div>
      <div className={styles.characterNini}>
        <PixelCharacter name="nini" src={characterAssets.nini} />
      </div>
      <div className={styles.ground} aria-hidden="true" />
    </main>
  );
}
