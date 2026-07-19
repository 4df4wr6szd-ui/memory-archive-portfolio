import { FolderButton } from "@/components/ui/FolderButton";
import { PixelCharacter } from "@/components/ui/PixelCharacter";
import { characterAssets } from "@/lib/assets";
import { WindowControls } from "@/components/ui/WindowControls";
import { navigationItems } from "@/data/navigation";
import styles from "./archive.module.css";

const folderClassNames: Record<string, string> = {
  "/about": styles.about,
  "/projects": styles.projects,
  "/copywriting": styles.copywriting,
  "/strategy": styles.strategy,
  "/creative": styles.creative,
  "/contact": styles.contact
};

export default function ArchivePage() {
  return (
    <main className={styles.archivePage}>
      <section className={styles.desktopWindow} aria-label="Memory Archive OS desktop">
        <header className={styles.windowTopBar}>
          <span>Memory Archive OS</span>
          <WindowControls />
        </header>

        <div className={styles.desktopArea}>
          {navigationItems.map((item) => (
            <div className={`${styles.folder} ${folderClassNames[item.href]}`} key={item.href}>
              <FolderButton href={item.href} label={item.label} />
            </div>
          ))}
        </div>
      </section>

      <div className={styles.characterKuro}>
        <PixelCharacter name="kuro" src={characterAssets.kuro} />
      </div>
      <div className={styles.characterNini}>
        <PixelCharacter name="nini" src={characterAssets.nini} />
      </div>
    </main>
  );
}
