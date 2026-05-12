import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentQuizBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "My Quiz Attempts",
  description: "Student dashboard — My Quiz Attempts.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="My Quiz Attempts"
        crumbs={[{ label: "Home", href: "/" }, { label: "My Quiz Attempts" }]}
      />
      <StudentDashboardLayout activeHref="/student-quiz">
        <StudentQuizBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
