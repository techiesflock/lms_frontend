import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentProfileBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "My Profile",
  description: "Student dashboard — My Profile.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="My Profile"
        crumbs={[{ label: "Home", href: "/" }, { label: "My Profile" }]}
      />
      <StudentDashboardLayout activeHref="/student-profile">
        <StudentProfileBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
