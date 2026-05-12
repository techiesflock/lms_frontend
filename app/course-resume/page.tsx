import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CourseResumePageBody } from "@/components/dream-lms/courses/resume/CourseResumePageBody";

export const metadata: Metadata = {
  title: "Course Resume",
  description: "Resume or continue a course.",
};

export default function CourseResumePage() {
  return (
    <MarketingSubPage title="Course Resume" embedMain>
      <CourseResumePageBody />
    </MarketingSubPage>
  );
}
