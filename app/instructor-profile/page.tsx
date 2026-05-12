import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorProfileBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "My Profile",
  description: "Instructor dashboard — My Profile.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="My Profile"
        crumbs={[{ label: "Home", href: "/" }, { label: "My Profile" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-profile">
        <InstructorProfileBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
