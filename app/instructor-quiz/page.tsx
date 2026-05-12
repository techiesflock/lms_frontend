import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorQuizBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Quiz",
  description: "Instructor dashboard — Quiz.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Quiz"
        crumbs={[{ label: "Home", href: "/" }, { label: "Quiz" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-quiz">
        <InstructorQuizBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
