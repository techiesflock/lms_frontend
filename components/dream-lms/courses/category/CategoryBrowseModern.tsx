import Link from "next/link";
import type { CategoryIconTile } from "@/config/courseCategoryPages";
import { assetPath } from "@/lib/assetPath";

type CategoryBrowseModernProps = {
  items: CategoryIconTile[];
};

export function CategoryBrowseModern({ items }: CategoryBrowseModernProps) {
  return (
    <section className="mw-category-browse">
      <div className="container">
        <header className="mw-category-browse__header">
          <nav className="mw-category-browse__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Categories</span>
          </nav>
          <h1 className="mw-category-browse__title">
            Explore <span className="mw-category-browse__title-accent">categories</span>
          </h1>
          <p className="mw-category-browse__desc">
            Find courses across management, technology, design, marketing, and more — taught by
            industry experts.
          </p>
        </header>

        <div className="mw-category-browse__grid" role="list">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href === "#" ? "/course-grid" : item.href}
              className="mw-category-browse__card"
              role="listitem"
            >
              <span className="mw-category-browse__icon-wrap">
                <img src={assetPath(item.icon)} alt="" className="mw-category-browse__icon" />
              </span>
              <span className="mw-category-browse__card-body">
                <span className="mw-category-browse__card-title">{item.title}</span>
                <span className="mw-category-browse__card-count">{item.count}</span>
              </span>
              <span className="mw-category-browse__arrow" aria-hidden>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3.75 9h10.5M9.75 4.5L14.25 9l-4.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <p className="mw-category-browse__footer">
          Looking for a specific course?{" "}
          <Link href="/course-grid">Browse all courses</Link>
        </p>
      </div>
    </section>
  );
}
