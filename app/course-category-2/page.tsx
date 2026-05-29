import type { Metadata } from "next";
import { CategoryBrowseModern } from "@/components/dream-lms/courses/category/CategoryBrowseModern";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CATEGORY_V2_ICONS } from "@/config/courseCategoryPages";

export const metadata: Metadata = {
  title: "Browse Categories",
  description: "Explore MetaWaves course categories — management, tech, design, marketing, and more.",
};

export default function CourseCategory2Page() {
  return (
    <MarketingSubPage title="Categories" hideBreadcrumb embedMain>
      <CategoryBrowseModern items={CATEGORY_V2_ICONS} />
    </MarketingSubPage>
  );
}
