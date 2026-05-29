import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CourseCatalogGridResults } from "@/components/dream-lms/courses/catalog/CourseCatalogGridResults";
import { CourseCatalogPageLayout } from "@/components/dream-lms/courses/catalog/CourseCatalogPageLayout";
import { COURSE_CATALOG_ITEMS } from "@/config/courseCatalog";

export const metadata: Metadata = {
  title: "Browse Courses",
  description: "Discover expert-led courses in development, design, business, and more.",
};

export default function CourseGridPage() {
  return (
    <MarketingSubPage title="Browse Courses" hideBreadcrumb embedMain>
      <CourseCatalogPageLayout
        idPrefix="grid"
        variant="grid"
        modern
        showLayoutToggle
        showCatalogHeader
        title="Explore courses"
        description="Master in-demand skills with expert-led paths, hands-on projects, and certificates you can share."
        totalResults={50}
        results={<CourseCatalogGridResults courses={COURSE_CATALOG_ITEMS} modern />}
      />
    </MarketingSubPage>
  );
}
