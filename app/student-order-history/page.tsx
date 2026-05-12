import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentOrderHistoryBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "Order History",
  description: "Student dashboard — Order History.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Order History"
        crumbs={[{ label: "Home", href: "/" }, { label: "Order History" }]}
      />
      <StudentDashboardLayout activeHref="/student-order-history">
        <StudentOrderHistoryBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
