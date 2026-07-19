import { ArchiveWindow } from "@/components/ui/ArchiveWindow";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contactAssets } from "@/lib/assets";

export default function ContactPage() {
  return (
    <main className="foundation-page">
      <SectionTitle title="Contact" subtitle="Foundation route for the Memory Archive portfolio." />
      <ArchiveWindow title="CONTACT_ARCHIVE.exe">
        <p>Detailed layout will be implemented in a later phase.</p>
        <img src={contactAssets.wechatQrCode} alt="WeChat QR code" width="180" />
      </ArchiveWindow>
    </main>
  );
}
