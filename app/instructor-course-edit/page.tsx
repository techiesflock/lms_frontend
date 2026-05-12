import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { AddCourseWizardBody } from "@/components/dream-lms/courses/add/AddCourseWizardBody";

export const metadata: Metadata = {
  title: "Edit Course",
  description: "Static instructor course editing UI.",
};

export default function InstructorCourseEditPage() {
  return (
    <MarketingSubPage
      title="Edit Course"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Instructor Courses", href: "/instructor-course" },
        { label: "Edit Course" },
      ]}
      embedMain
    >
      <AddCourseWizardBody />
    </MarketingSubPage>
  );
}
