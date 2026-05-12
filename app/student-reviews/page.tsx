import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentReviewsBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Student dashboard — Reviews.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Reviews"
        crumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
      />
      <StudentDashboardLayout activeHref="/student-reviews">
        <StudentReviewsBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
