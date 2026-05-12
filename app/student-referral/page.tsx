import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentReferralBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "Referrals",
  description: "Student dashboard — Referrals.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Referrals"
        crumbs={[{ label: "Home", href: "/" }, { label: "Referrals" }]}
      />
      <StudentDashboardLayout activeHref="/student-referral">
        <StudentReferralBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
