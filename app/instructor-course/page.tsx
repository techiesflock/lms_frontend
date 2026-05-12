import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorCourseBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Course",
  description: "Instructor dashboard — Course.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Course"
        crumbs={[{ label: "Home", href: "/" }, { label: "Course" }]}
      />
      <InstructorDashboardLayout activeHref="/instructor-course">
        <InstructorCourseBody />
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
