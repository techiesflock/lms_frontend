import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { ContactUsBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "Contact Us | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="Contact Us" hideBreadcrumb embedMain>
      <ContactUsBody />
    </MarketingSubPage>
  );
}
