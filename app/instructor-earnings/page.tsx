import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorEarningsBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Earning",
  description: "Instructor dashboard — Earning.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Earning"
        crumbs={[{ label: "Home", href: "/" }, { label: "Earning" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-earnings">
        <InstructorEarningsBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
