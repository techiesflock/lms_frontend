import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorTicketsBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Support Tickets",
  description: "Instructor dashboard — Support Tickets.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Support Tickets"
        crumbs={[{ label: "Home", href: "/" }, { label: "Support Tickets" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-tickets">
        <InstructorTicketsBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
