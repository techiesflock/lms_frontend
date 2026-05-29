import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { InstructorDetailsModern } from "@/components/dream-lms/instructors/InstructorDetailsModern";

export const metadata: Metadata = {
  title: "Instructor Details | MetaWaves",
  description: "View instructor profile, courses, and contact information.",
};

export default function Page() {
  return (
    <MarketingSubPage title="Instructor Details" hideBreadcrumb embedMain>
      <InstructorDetailsModern />
    </MarketingSubPage>
  );
}
