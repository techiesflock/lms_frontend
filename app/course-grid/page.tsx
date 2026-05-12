import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CourseCatalogGridResults } from "@/components/dream-lms/courses/catalog/CourseCatalogGridResults";
import { CourseCatalogPageLayout } from "@/components/dream-lms/courses/catalog/CourseCatalogPageLayout";
import { COURSE_CATALOG_ITEMS } from "@/config/courseCatalog";

export const metadata: Metadata = {
  title: "Course Grid",
  description: "Browse courses in a responsive grid layout.",
};

export default function CourseGridPage() {
  return (
    <MarketingSubPage title="Course Grid" embedMain>
      <CourseCatalogPageLayout idPrefix="grid" variant="grid" results={<CourseCatalogGridResults courses={COURSE_CATALOG_ITEMS} />} />
    </MarketingSubPage>
  );
}
