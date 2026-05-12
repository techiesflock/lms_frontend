import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorQuizResultsBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Quiz Results",
  description: "Instructor dashboard — Quiz Results.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Quiz Results"
        crumbs={[{ label: "Home", href: "/" }, { label: "Quiz Results" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-quiz-results">
        <InstructorQuizResultsBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
