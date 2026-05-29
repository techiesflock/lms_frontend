import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { PrivacyPolicyBodyModern } from "@/components/dream-lms/pages/marketingPagesModern";

export const metadata: Metadata = {
  title: "Privacy Policy | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="Privacy Policy" hideBreadcrumb embedMain>
      <PrivacyPolicyBodyModern />
    </MarketingSubPage>
  );
}
