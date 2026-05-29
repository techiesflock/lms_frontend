import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { TermsAndConditionsBodyModern } from "@/components/dream-lms/pages/marketingPagesModern";

export const metadata: Metadata = {
  title: "Terms & Conditions | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="Terms & Conditions" hideBreadcrumb embedMain>
      <TermsAndConditionsBodyModern />
    </MarketingSubPage>
  );
}
