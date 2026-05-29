import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { StudentDashboardHomeModern } from "@/components/dream-lms/dashboard/student/StudentDashboardHomeModern";
import { StudentDashboardModernLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardModernLayout";

export const metadata: Metadata = {
  title: "Student Dashboard | MetaWaves",
  description: "Track your courses, progress, and certificates on MetaWaves.",
};

export default function Page() {
  return (
    <MarketingChrome innerPage>
      <StudentDashboardModernLayout
        activeHref="/student-dashboard"
        pageTitle="Dashboard"
        pageMeta="Your learning progress at a glance"
        pageDescription="Welcome back — continue your learning journey."
      >
        <StudentDashboardHomeModern />
      </StudentDashboardModernLayout>
    </MarketingChrome>
  );
}
