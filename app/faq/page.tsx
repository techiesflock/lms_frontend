import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { FaqBodyModern } from "@/components/dream-lms/pages/marketingPagesModern";

export const metadata: Metadata = {
  title: "FAQ | MetaWaves",
  description: "Answers to common questions about MetaWaves courses and billing.",
};

export default function Page() {
  return (
    <MarketingSubPage title="FAQ" hideBreadcrumb embedMain>
      <FaqBodyModern />
    </MarketingSubPage>
  );
}
