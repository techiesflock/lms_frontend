import type { Metadata } from "next";
import Link from "next/link";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { DashboardBreadcrumb } from "@/components/dream-lms/dashboard/DashboardBreadcrumb";
import { InstructorDashboardLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardLayout";
import { InstructorStudentDetailBody } from "@/components/dream-lms/dashboard/instructor/instructorBodies";

export const metadata: Metadata = {
  title: "Students Details",
  description: "Instructor view of a student profile.",
};

export default function Page() {
  return (
    <MarketingChrome>
      <DashboardBreadcrumb
        title="Students Details"
        crumbs={[{ label: "Home", href: "/" }, { label: "Students Details" }]}
      />
      <InstructorDashboardLayout
        activeHref="/student-details"
        showSidebar={false}
        contentClassName="instructor-detail-content"
      >
        <>
          <Link href="/student-list" className="d-flex align-items-center mb-3">
            <i className="isax isax-arrow-left me-1 fw-bold" />
            Back to List
          </Link>
          <InstructorStudentDetailBody />
        </>
      </InstructorDashboardLayout>
    </MarketingChrome>
  );
}
