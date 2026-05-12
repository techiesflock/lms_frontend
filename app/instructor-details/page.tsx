import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { InstructorDetailsPageBody } from "@/components/dream-lms/pages/instructorMarketingBodies";

export const metadata: Metadata = {
  title: "Instructor Details | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Instructor Details"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Instructor Details" },
      ]}
    >
      <InstructorDetailsPageBody />
    </MarketingSubPage>
  );
}
