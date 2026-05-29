import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { AboutUsBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "About Us | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="About Us" hideBreadcrumb embedMain>
      <AboutUsBody />
    </MarketingSubPage>
  );
}
