import type { ReactNode } from "react";
import { CourseCatalogFilterSidebar } from "./CourseCatalogFilterSidebar";
import { CourseCatalogPagination } from "./CourseCatalogPagination";
import { CourseCatalogToolbar } from "./CourseCatalogToolbar";

type CourseCatalogPageLayoutProps = {
  idPrefix: string;
  /** Extra section classes, e.g. `course-list-content`. */
  sectionClassName?: string;
  variant: "grid" | "list";
  results: ReactNode;
};

export function CourseCatalogPageLayout({
  idPrefix,
  sectionClassName = "course-content",
  variant,
  results,
}: CourseCatalogPageLayoutProps) {
  return (
    <section className={sectionClassName}>
      <div className="container">
        <div className="row align-items-baseline">
          <div className="col-lg-3 theiaStickySidebar">
            <CourseCatalogFilterSidebar idPrefix={idPrefix} />
          </div>
          <div className="col-lg-9">
            <CourseCatalogToolbar variant={variant} />
            {results}
            <CourseCatalogPagination />
          </div>
        </div>
      </div>
    </section>
  );
}
