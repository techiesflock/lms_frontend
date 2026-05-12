import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CategoryHeroSearchSection } from "@/components/dream-lms/courses/category/CategoryHeroSearchSection";
import { CategoryIconGridSection } from "@/components/dream-lms/courses/category/CategoryIconGridSection";
import { CATEGORY_V2_ICONS } from "@/config/courseCategoryPages";

export const metadata: Metadata = {
  title: "Course Category 2",
  description: "Alternate course category layout.",
};

export default function CourseCategory2Page() {
  return (
    <MarketingSubPage title="Course Category 2" embedMain>
      <CategoryHeroSearchSection bgSvg="img/course/course-bg-1.svg" bgPng="img/course/course-bg-2.png" />
      <CategoryIconGridSection items={CATEGORY_V2_ICONS} />
    </MarketingSubPage>
  );
}
