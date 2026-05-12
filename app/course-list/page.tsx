import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CourseCatalogListResults } from "@/components/dream-lms/courses/catalog/CourseCatalogListResults";
import { CourseCatalogPageLayout } from "@/components/dream-lms/courses/catalog/CourseCatalogPageLayout";
import { COURSE_CATALOG_ITEMS } from "@/config/courseCatalog";

export const metadata: Metadata = {
  title: "Course List",
  description: "Browse courses in a list layout.",
};

export default function CourseListPage() {
  return (
    <MarketingSubPage title="Course List" embedMain>
      <CourseCatalogPageLayout
        idPrefix="list"
        variant="list"
        sectionClassName="course-content course-list-content"
        results={<CourseCatalogListResults courses={COURSE_CATALOG_ITEMS} />}
      />
    </MarketingSubPage>
  );
}
