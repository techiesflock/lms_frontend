import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorSettingsBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Settings",
  description: "Instructor dashboard — Settings.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Settings"
        crumbs={[{ label: "Home", href: "/" }, { label: "Settings" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-settings">
        <InstructorSettingsBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
