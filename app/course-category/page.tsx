import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CourseCategoryV1Body } from "@/components/dream-lms/courses/category/CategoryBrowseSections";

export const metadata: Metadata = {
  title: "Course Category",
  description: "Courses grouped by category.",
};

export default function CourseCategoryPage() {
  return (
    <MarketingSubPage title="Course Category" embedMain>
      <CourseCategoryV1Body />
    </MarketingSubPage>
  );
}
