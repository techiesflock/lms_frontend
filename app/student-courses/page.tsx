import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentCoursesBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "Enrolled Courses",
  description: "Student dashboard — Enrolled Courses.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Enrolled Courses"
        crumbs={[{ label: "Home", href: "/" }, { label: "Enrolled Courses" }]}
      />
      <StudentDashboardLayout activeHref="/student-courses">
        <StudentCoursesBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
