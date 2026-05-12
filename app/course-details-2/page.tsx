import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CourseDetailsClassicPageBody } from "@/components/dream-lms/courses/detail/CourseDetailsClassicPageBody";

export const metadata: Metadata = {
  title: "Course Details 2",
  description: "Alternate single course layout.",
};

export default function CourseDetails2Page() {
  return (
    <MarketingSubPage
      title="Course Details 2"
      embedMain
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/course-grid" },
        { label: "Course Details 2" },
      ]}
    >
      <CourseDetailsClassicPageBody />
    </MarketingSubPage>
  );
}
