import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CategoryHeroSearchSection } from "@/components/dream-lms/courses/category/CategoryHeroSearchSection";
import { CategoryV3CardGridSection } from "@/components/dream-lms/courses/category/CategoryV3CardGridSection";
import { CATEGORY_V3_CARDS } from "@/config/courseCategoryPages";

export const metadata: Metadata = {
  title: "Course Category 3",
  description: "Third course category layout variant.",
};

export default function CourseCategory3Page() {
  return (
    <MarketingSubPage title="Course Category 3" embedMain>
      <CategoryHeroSearchSection
        bgSvg="img/course/course-bg-3.svg"
        bgPng="img/course/course-bg-2.png"
        svgImgClass="course-bg3"
      />
      <CategoryV3CardGridSection items={CATEGORY_V3_CARDS} />
    </MarketingSubPage>
  );
}
