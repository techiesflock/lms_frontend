import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { AddCourseWizardBody } from "@/components/dream-lms/courses/add/AddCourseWizardBody";

export const metadata: Metadata = {
  title: "Add New Course",
  description: "Create or publish a new course.",
};

export default function AddCoursePage() {
  return (
    <MarketingSubPage title="Add New Course" embedMain>
      <AddCourseWizardBody />
    </MarketingSubPage>
  );
}
