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
        showLayoutToggle={false}
        showCatalogHeader={false}
        title="Browse courses"
        description="Learn from industry experts with structured paths, hands-on projects, and certificates."
        totalResults={50}
        results={<CourseCatalogGridResults courses={COURSE_CATALOG_ITEMS} modern />}
      />
    </MarketingSubPage>
  );
}
