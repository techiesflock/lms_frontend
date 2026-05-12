import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentCertificatesBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "My Certificates",
  description: "Student dashboard — My Certificates.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="My Certificates"
        crumbs={[{ label: "Home", href: "/" }, { label: "My Certificates" }]}
      />
      <StudentDashboardLayout activeHref="/student-certificates">
        <StudentCertificatesBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
