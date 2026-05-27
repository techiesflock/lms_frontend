import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BecomeInstructorBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "Become an Instructor | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Become an Instructor"
      embedMain
      hideBreadcrumb
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Become an Instructor" },
      ]}
    >
      <BecomeInstructorBody />
    </MarketingSubPage>
  );
}
