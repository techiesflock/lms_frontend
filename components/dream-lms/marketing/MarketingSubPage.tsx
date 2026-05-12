import Link from "next/link";
import type { ReactNode } from "react";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";

export type MarketingBreadcrumbItem = { label: string; href?: string };

export type MarketingSubPageProps = {
  title: string;
  /** Short intro under the breadcrumb; shown above optional `children` when not embedding. */
  description?: string;
  breadcrumb?: MarketingBreadcrumbItem[];
  children?: ReactNode;
  /**
   * When true, renders only header chrome + breadcrumb + `children` (no extra `course-content` wrapper).
   * Use when `children` already include `<section className="course-content">` or equivalent template markup.
   */
  embedMain?: boolean;
};

export function MarketingSubPage({
  title,
  description = "This area is scaffolded in React. Replace it with real course UI when you migrate each template screen.",
  breadcrumb,
  children,
  embedMain = false,
}: MarketingSubPageProps) {
  const crumbs = breadcrumb ?? [{ label: "Home", href: "/" }, { label: title }];

  const breadcrumbBlock = (
    <div className="breadcrumb-bar text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title mb-2">{title}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                {crumbs.map((c, i) => {
                  const isLast = i === crumbs.length - 1;
                  return (
                    <li
                      key={`${c.label}-${i}`}
                      className={`breadcrumb-item${isLast ? " active" : ""}`}
                      {...(isLast ? { "aria-current": "page" as const } : {})}
                    >
                      {!isLast && c.href ? (
                        <Link href={c.href}>{c.label}</Link>
                      ) : (
                        c.label
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );

  if (embedMain) {
    return (
      <MarketingChrome>
        {breadcrumbBlock}
        {children}
      </MarketingChrome>
    );
  }

  return (
    <MarketingChrome>
      {breadcrumbBlock}
      <section className="course-content py-5">
        <div className="container">
          {description ? <p className="text-muted mb-4">{description}</p> : null}
          {children ?? (
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="mb-0">
                  <Link href="/" className="btn btn-outline-primary btn-sm me-2">
                    Back to home
                  </Link>
                  <Link href="/course-list" className="btn btn-outline-secondary btn-sm">
                    Course list
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </MarketingChrome>
  );
}
