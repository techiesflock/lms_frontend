import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { StudentDashboardLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardLayout";
import { StudentWishlistBody } from "@/components/dream-lms/dashboard/student/studentBodies";

export const metadata: Metadata = {
  title: "Wishlist",
  description: "Student dashboard — Wishlist.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Wishlist"
        crumbs={[{ label: "Home", href: "/" }, { label: "Wishlist" }]}
      />
      <StudentDashboardLayout activeHref="/student-wishlist">
        <StudentWishlistBody />
      </StudentDashboardLayout>
    </MarketingChrome>
  );
}
