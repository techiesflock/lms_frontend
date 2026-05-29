import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BecomeInstructorBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "Become an Instructor | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="Become an Instructor" hideBreadcrumb embedMain>
      <BecomeInstructorBody />
    </MarketingSubPage>
  );
}
