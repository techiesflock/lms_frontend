import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { InstructorDashboardHomeModern } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardHomeModern";
import { InstructorDashboardModernLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardModernLayout";

export const metadata: Metadata = {
  title: "Instructor Dashboard | MetaWaves",
  description: "Manage your courses, students, and earnings on MetaWaves.",
};

export default function Page() {
  return (
    <MarketingChrome innerPage>
      <InstructorDashboardModernLayout
        activeHref="/instructor-dashboard"
        pageTitle="Dashboard"
        pageDescription="Welcome back — here is what is happening with your courses today."
      >
        <InstructorDashboardHomeModern />
      </InstructorDashboardModernLayout>
    </MarketingChrome>
  );
}
