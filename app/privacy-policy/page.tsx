import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { PrivacyPolicyBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "Privacy Policy | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Privacy Policy"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Privacy Policy" },
      ]}
    >
      <PrivacyPolicyBody />
    </MarketingSubPage>
  );
}
