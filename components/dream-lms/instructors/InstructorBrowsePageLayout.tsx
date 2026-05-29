import Link from "next/link";
import type { ReactNode } from "react";
import { CourseCatalogPagination } from "@/components/dream-lms/courses/catalog/CourseCatalogPagination";
import { InstructorBrowseFilterSidebar } from "./InstructorBrowseFilterSidebar";
import { InstructorBrowseToolbar } from "./InstructorBrowseToolbar";

const TOPIC_PILLS = ["Development", "Design", "Business", "Marketing", "Data Science", "Cloud"];

type InstructorBrowsePageLayoutProps = {
  idPrefix: string;
  variant: "grid" | "list";
  results: ReactNode;
  title?: string;
  description?: string;
  totalResults?: number;
};

export function InstructorBrowsePageLayout({
  idPrefix,
  variant,
  results,
  title = "Find instructors",
  description = "Learn from industry experts who teach practical, job-ready skills.",
  totalResults = 50,
}: InstructorBrowsePageLayoutProps) {
  const showingTo = Math.min(variant === "grid" ? 6 : 3, totalResults);

  return (
    <section className="mw-catalog-page mw-catalog-page--elevated">
      <div className="container">
        <div className="mw-catalog-hero" role="banner">
          <div className="mw-catalog-hero__mesh" aria-hidden />
          <div className="mw-catalog-hero__orb mw-catalog-hero__orb--1" aria-hidden />
          <div className="mw-catalog-hero__orb mw-catalog-hero__orb--2" aria-hidden />

          <div className="mw-catalog-hero__content">
            <nav className="mw-catalog-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span aria-hidden="true">/</span>
              <span>Instructors</span>
            </nav>

            <span className="mw-catalog-header__label">Instructor directory</span>
            <h1 className="mw-catalog-header__title">
              {title.split(" ").length > 1 ? (
                <>
                  {title.split(" ")[0]}{" "}
                  <span className="mw-catalog-header__accent">{title.split(" ").slice(1).join(" ")}</span>
                </>
              ) : (
                <span className="mw-catalog-header__accent">{title}</span>
              )}
            </h1>
            <p className="mw-catalog-header__desc">{description}</p>

            <form action="/instructor-grid" className="mw-catalog-hero-search" role="search">
              <label htmlFor={`${idPrefix}-hero-search`} className="visually-hidden">
                Search instructors
              </label>
              <i className="fa-solid fa-magnifying-glass mw-catalog-hero-search__icon" aria-hidden="true" />
              <input
                id={`${idPrefix}-hero-search`}
                type="search"
                name="q"
                className="mw-catalog-hero-search__input"
                placeholder="Search by name, topic, or skill…"
              />
              <button type="submit" className="mw-catalog-hero-search__btn">
                Search
              </button>
            </form>

            <div className="mw-catalog-hero-stats" aria-label="Platform highlights">
              <div>
                <strong>1,200+</strong>
                <span>Instructors</span>
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
                <Link key={topic} href="/instructor-grid" className="mw-catalog-topic" role="listitem">
                  {topic}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mw-catalog-layout">
          <aside className="mw-catalog-layout__sidebar">
            <InstructorBrowseFilterSidebar idPrefix={idPrefix} />
          </aside>

          <div className="mw-catalog-layout__main">
            <InstructorBrowseToolbar
              variant={variant}
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
