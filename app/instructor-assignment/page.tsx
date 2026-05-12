import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorAssignmentBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Assignments",
  description: "Instructor dashboard — Assignments.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Assignments"
        crumbs={[{ label: "Home", href: "/" }, { label: "Assignments" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-assignment">
        <InstructorAssignmentBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
