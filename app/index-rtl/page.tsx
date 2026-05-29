import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { RtlDemoBodyModern } from "@/components/dream-lms/pages/specialPagesModern";

export const metadata: Metadata = {
  title: "RTL | MetaWaves",
  description: "Right-to-left layout preview for MetaWaves.",
};

export default function Page() {
  return (
    <MarketingSubPage title="RTL" hideBreadcrumb embedMain>
      <RtlDemoBodyModern />
    </MarketingSubPage>
  );
}
