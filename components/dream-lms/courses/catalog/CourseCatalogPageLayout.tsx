import Link from "next/link";
import type { ReactNode } from "react";
import { CourseCatalogFilterSidebar } from "./CourseCatalogFilterSidebar";
import { CourseCatalogPagination } from "./CourseCatalogPagination";
import { CourseCatalogToolbar } from "./CourseCatalogToolbar";

const TOPIC_PILLS = ["Development", "Design", "Business", "Marketing", "Data Science", "Personal Development"];

type CourseCatalogPageLayoutProps = {
  idPrefix: string;
  /** Extra section classes, e.g. `course-list-content`. */
  sectionClassName?: string;
  variant: "grid" | "list";
  results: ReactNode;
  modern?: boolean;
  title?: string;
  description?: string;
  totalResults?: number;
  showLayoutToggle?: boolean;
  showCatalogHeader?: boolean;
};

export function CourseCatalogPageLayout({
  idPrefix,
  sectionClassName = "course-content",
  variant,
  results,
  modern = false,
  title = "Browse courses",
  description = "Explore expert-led courses to build skills for your next role.",
  totalResults = 50,
  showLayoutToggle = true,
  showCatalogHeader = true,
}: CourseCatalogPageLayoutProps) {
  if (!modern) {
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

  const showingTo = Math.min(9, totalResults);

  return (
    <section
      className={`mw-catalog-page mw-catalog-page--elevated${showCatalogHeader ? "" : " mw-catalog-page--compact"}`}
    >
      <div className="container">
        {showCatalogHeader ? (
          <div className="mw-catalog-hero" role="banner">
            <div className="mw-catalog-hero__mesh" aria-hidden />
            <div className="mw-catalog-hero__orb mw-catalog-hero__orb--1" aria-hidden />
            <div className="mw-catalog-hero__orb mw-catalog-hero__orb--2" aria-hidden />

            <div className="mw-catalog-hero__content">
              <nav className="mw-catalog-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>Courses</span>
              </nav>

              <span className="mw-catalog-header__label">Course catalog</span>
              <h1 className="mw-catalog-header__title">
                {title.includes(" ") ? (
                  <>
                    {title.split(" ")[0]}{" "}
                    <span className="mw-catalog-header__accent">
                      {title.split(" ").slice(1).join(" ")}
                    </span>
                  </>
                ) : (
                  <span className="mw-catalog-header__accent">{title}</span>
                )}
              </h1>
              <p className="mw-catalog-header__desc">{description}</p>

              <form action="/search-results" className="mw-catalog-hero-search" role="search">
                <label htmlFor={`${idPrefix}-hero-search`} className="visually-hidden">
                  Search courses
                </label>
                <i className="fa-solid fa-magnifying-glass mw-catalog-hero-search__icon" aria-hidden="true" />
                <input
                  id={`${idPrefix}-hero-search`}
                  type="search"
                  name="q"
                  className="mw-catalog-hero-search__input"
                  placeholder="Search development, design, business…"
                />
                <button type="submit" className="mw-catalog-hero-search__btn">
                  Search
                </button>
              </form>

              <div className="mw-catalog-hero-stats" aria-label="Platform highlights">
                <div>
                  <strong>1,200+</strong>
                  <span>Courses</span>
                </div>
                <div>
                  <strong>50K+</strong>
                  <span>Learners</span>
                </div>
                <div>
                  <strong>4.8</strong>
                  <span>Avg. rating</span>
                </div>
              </div>

              <div className="mw-catalog-topics" role="list" aria-label="Popular topics">
                {TOPIC_PILLS.map((topic) => (
                  <Link key={topic} href="/course-grid" className="mw-catalog-topic" role="listitem">
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        <div className="mw-catalog-layout">
          <aside className="mw-catalog-layout__sidebar">
            <CourseCatalogFilterSidebar idPrefix={idPrefix} modern />
          </aside>

          <div className="mw-catalog-layout__main">
            <CourseCatalogToolbar
              variant={variant}
              modern
              showLayoutToggle={showLayoutToggle}
              total={totalResults}
              showingFrom={1}
              showingTo={showingTo}
            />
            {results}
            <CourseCatalogPagination modern />
          </div>
        </div>
      </div>
    </section>
  );
}
