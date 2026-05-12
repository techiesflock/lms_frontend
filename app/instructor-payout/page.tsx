import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorPayoutBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Payout",
  description: "Instructor dashboard — Payout.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Payout"
        crumbs={[{ label: "Home", href: "/" }, { label: "Payout" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-payout">
        <InstructorPayoutBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
