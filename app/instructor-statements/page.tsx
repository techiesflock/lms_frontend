import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorStatementsBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Statement",
  description: "Instructor dashboard — Statement.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Statement"
        crumbs={[{ label: "Home", href: "/" }, { label: "Statement" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-statements">
        <InstructorStatementsBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
