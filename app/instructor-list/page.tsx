import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { InstructorListPageBody } from "@/components/dream-lms/pages/instructorMarketingBodies";

export const metadata: Metadata = {
  title: "Instructor List | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Instructor List"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Instructor List" },
      ]}
    >
      <InstructorListPageBody />
    </MarketingSubPage>
  );
}
