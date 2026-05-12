import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { FaqBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "FAQ | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="FAQ"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "FAQ" },
      ]}
    >
      <FaqBody />
    </MarketingSubPage>
  );
}
