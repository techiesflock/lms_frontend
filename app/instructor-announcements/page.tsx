import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorAnnouncementsBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Announcements",
  description: "Instructor dashboard — Announcements.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Announcements"
        crumbs={[{ label: "Home", href: "/" }, { label: "Announcements" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-announcements">
        <InstructorAnnouncementsBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
