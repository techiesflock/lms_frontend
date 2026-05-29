import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { InstructorBrowseListResults } from "@/components/dream-lms/instructors/InstructorBrowseResults";
import { InstructorBrowsePageLayout } from "@/components/dream-lms/instructors/InstructorBrowsePageLayout";

export const metadata: Metadata = {
  title: "Instructor List | MetaWaves",
  description: "Browse instructors in a detailed list view.",
};

export default function Page() {
  return (
    <MarketingSubPage title="Instructors" hideBreadcrumb embedMain>
      <InstructorBrowsePageLayout
        idPrefix="ilist"
        variant="list"
        title="Browse instructors"
        description="Compare profiles, ratings, and expertise to find the right mentor for your goals."
        totalResults={50}
        results={<InstructorBrowseListResults />}
      />
    </MarketingSubPage>
  );
}
