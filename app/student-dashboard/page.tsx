import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentDashboardHomeBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "Student Dashboard",
  description: "Student dashboard — Student Dashboard.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Student Dashboard"
        crumbs={[{ label: "Home", href: "/" }, { label: "Student Dashboard" }]}
      />
      <StudentDashboardLayout activeHref="/student-dashboard">
        <StudentDashboardHomeBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
