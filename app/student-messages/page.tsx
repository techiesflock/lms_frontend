import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentMessagesBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "Messages",
  description: "Student dashboard — Messages.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Messages"
        crumbs={[{ label: "Home", href: "/" }, { label: "Messages" }]}
      />
      <StudentDashboardLayout activeHref="/student-messages">
        <StudentMessagesBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
