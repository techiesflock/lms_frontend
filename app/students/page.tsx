import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { StudentsGridBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Students",
  description: "Instructor dashboard — Students.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Students"
        crumbs={[{ label: "Home", href: "/" }, { label: "Students" }]}
      />
      <InstructorDashboardLayout activeHref="/students">
        <StudentsGridBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
