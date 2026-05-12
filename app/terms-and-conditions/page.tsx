import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { TermsAndConditionsBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "Terms and Conditions | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Terms and Conditions"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Terms and Conditions" },
      ]}
    >
      <TermsAndConditionsBody />
    </MarketingSubPage>
  );
}
