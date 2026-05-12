import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentSettingsBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "Settings",
  description: "Student dashboard — Settings.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Settings"
        crumbs={[{ label: "Home", href: "/" }, { label: "Settings" }]}
      />
      <StudentDashboardLayout activeHref="/student-settings">
        <StudentSettingsBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
