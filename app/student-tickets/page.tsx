import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentTicketsBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "Support Ticket",
  description: "Student dashboard — Support Ticket.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Support Ticket"
        crumbs={[{ label: "Home", href: "/" }, { label: "Support Ticket" }]}
      />
      <StudentDashboardLayout activeHref="/student-tickets">
        <StudentTicketsBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
