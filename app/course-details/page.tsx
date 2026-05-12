import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CourseDetailsTwoPageBody } from "@/components/dream-lms/courses/detail/CourseDetailsTwoPageBody";

export const metadata: Metadata = {
  title: "Course Details",
  description: "Single course detail page.",
};

export default function CourseDetailsPage() {
  return (
    <MarketingSubPage
      title="Course Details"
      embedMain
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/course-grid" },
        { label: "Course Details" },
      ]}
    >
      <CourseDetailsTwoPageBody />
    </MarketingSubPage>
  );
}
