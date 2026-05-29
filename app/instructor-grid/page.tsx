import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { InstructorBrowseGridResults } from "@/components/dream-lms/instructors/InstructorBrowseResults";
import { InstructorBrowsePageLayout } from "@/components/dream-lms/instructors/InstructorBrowsePageLayout";

export const metadata: Metadata = {
  title: "Instructor Grid | MetaWaves",
  description: "Browse expert instructors across development, design, business, and more.",
};

export default function Page() {
  return (
    <MarketingSubPage title="Instructors" hideBreadcrumb embedMain>
      <InstructorBrowsePageLayout
        idPrefix="igrid"
        variant="grid"
        title="Find instructors"
        description="Learn from verified experts who teach practical, career-ready skills."
        totalResults={50}
        results={<InstructorBrowseGridResults />}
      />
    </MarketingSubPage>
  );
}
