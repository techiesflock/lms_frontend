import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { InstructorGridPageBody } from "@/components/dream-lms/pages/instructorMarketingBodies";

export const metadata: Metadata = {
  title: "Instructor Grid | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Instructor Grid"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Instructor Grid" },
      ]}
    >
      <InstructorGridPageBody />
    </MarketingSubPage>
  );
}
