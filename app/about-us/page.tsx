import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { AboutUsBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "About Us | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="About Us"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]}
    >
      <AboutUsBody />
    </MarketingSubPage>
  );
}
