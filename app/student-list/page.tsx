import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { StudentListBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Student List",
  description: "Instructor dashboard — Student List.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Student List"
        crumbs={[{ label: "Home", href: "/" }, { label: "Student List" }]}
      />
      <InstructorDashboardLayout activeHref="/student-list">
        <StudentListBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
