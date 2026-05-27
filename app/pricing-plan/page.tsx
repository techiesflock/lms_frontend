import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { PricingPlanBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "Pricing Plan | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Pricing Plan"
      embedMain
      hideBreadcrumb
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Pricing Plan" },
      ]}
    >
      <PricingPlanBody />
    </MarketingSubPage>
  );
}
