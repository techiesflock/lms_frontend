import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorCertificateBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Certificates",
  description: "Instructor dashboard — Certificates.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Certificates"
        crumbs={[{ label: "Home", href: "/" }, { label: "Certificates" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-certificate">
        <InstructorCertificateBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
