import type { Metadata } from "next";
import Link from "next/link";
import { CourseCatalogFilterSidebar } from "@/components/dream-lms/courses/catalog/CourseCatalogFilterSidebar";
import { CourseCatalogGridResults } from "@/components/dream-lms/courses/catalog/CourseCatalogGridResults";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { COURSE_CATALOG_ITEMS } from "@/config/courseCatalog";

export const metadata: Metadata = {
  title: "Search Results",
  description: "Static course search results and no-results UI.",
};

const resultCourses = COURSE_CATALOG_ITEMS.slice(0, 6);
const filters = ["React", "Design", "Intermediate", "4 stars & up"];

export default function SearchResultsPage() {
  return (
    <MarketingSubPage
      title="Search Results"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "Courses", href: "/course-grid" }, { label: "Search Results" }]}
      embedMain
    >
      <section className="course-content">
        <div className="container">
          <div className="row align-items-baseline">
            <div className="col-lg-3 theiaStickySidebar">
              <CourseCatalogFilterSidebar idPrefix="search" />
            </div>
            <div className="col-lg-9">
              <div className="showing-list mb-4">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="show-result text-center text-lg-start">
                      <h6 className="fw-medium mb-1">Showing 6 results for "react design"</h6>
                      <p className="mb-0 text-muted fs-14">Static search results page with applied filters and empty state.</p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <form action="/search-results" className="search-group ms-lg-auto mt-3 mt-lg-0">
                      <i className="isax isax-search-normal-1" />
                      <input type="text" name="q" className="form-control" defaultValue="react design" />
                    </form>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-wrap align-items-center gap-2 mb-4">
                <span className="fw-medium me-1">Applied filters:</span>
                {filters.map((filter) => (
                  <span key={filter} className="badge rounded-pill bg-light text-gray-9 border">
                    {filter}
                    <Link href="/search-results" className="text-gray-9 ms-2" aria-label={`Remove ${filter} filter`}>
                      <i className="isax isax-close-circle" />
                    </Link>
                  </span>
                ))}
                <Link href="/course-grid" className="clear-text ms-1">
                  Clear all
                </Link>
              </div>

              <CourseCatalogGridResults courses={resultCourses} />

              <div className="card border-0 shadow-sm mt-4">
                <div className="card-body p-4 p-lg-5 text-center">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light mb-3 p-4">
                    <i className="isax isax-search-status fs-1 text-secondary" />
                  </span>
                  <h4 className="mb-2">No courses found</h4>
                  <p className="text-muted mb-4">
                    Static no-results state for searches with very narrow filters. Try removing a filter or browsing all
                    courses.
                  </p>
                  <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
                    <Link href="/course-grid" className="btn btn-secondary">
                      Browse all courses
                    </Link>
                    <Link href="/course-category" className="btn btn-outline-secondary">
                      Explore categories
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingSubPage>
  );
}
