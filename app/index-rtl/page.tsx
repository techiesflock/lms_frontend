import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { RtlDemoBody } from "@/components/dream-lms/pages/specialMarketingBodies";

export const metadata: Metadata = {
  title: "RTL | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="RTL"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "RTL" },
      ]}
    >
      <RtlDemoBody />
    </MarketingSubPage>
  );
}
