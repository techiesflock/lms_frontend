import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { PricingPlanBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "Pricing Plan | MetaWaves",
  description: "Simple, transparent pricing for individuals and teams.",
};

export default function Page() {
  return (
    <MarketingSubPage title="Pricing" hideBreadcrumb embedMain>
      <PricingPlanBody />
    </MarketingSubPage>
  );
}
