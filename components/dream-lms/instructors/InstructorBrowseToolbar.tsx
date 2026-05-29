import Link from "next/link";

type InstructorBrowseToolbarProps = {
  variant: "grid" | "list";
  total?: number;
  showingFrom?: number;
  showingTo?: number;
};

export function InstructorBrowseToolbar({
  variant,
  total = 50,
  showingFrom = 1,
  showingTo = 6,
}: InstructorBrowseToolbarProps) {
  return (
    <div className="mw-catalog-toolbar">
      <p className="mw-catalog-toolbar__count">
        Showing <strong>{showingFrom}–{showingTo}</strong> of <strong>{total}</strong> instructors
      </p>

      <div className="mw-catalog-toolbar__actions">
        <div className="mw-catalog-view-toggle" role="group" aria-label="Layout">
          <Link
            href="/instructor-grid"
            className={`mw-catalog-view-btn${variant === "grid" ? " is-active" : ""}`}
            aria-label="Grid view"
            aria-current={variant === "grid" ? "page" : undefined}
          >
            <i className="fa-solid fa-grip" aria-hidden="true" />
          </Link>
          <Link
            href="/instructor-list"
            className={`mw-catalog-view-btn${variant === "list" ? " is-active" : ""}`}
            aria-label="List view"
            aria-current={variant === "list" ? "page" : undefined}
          >
            <i className="fa-solid fa-list" aria-hidden="true" />
          </Link>
        </div>

        <label className="mw-catalog-sort">
          <span className="visually-hidden">Sort by</span>
          <select className="mw-catalog-sort__select" defaultValue="popular" aria-label="Sort instructors">
            <option value="popular">Most popular</option>
            <option value="newest">Newest</option>
            <option value="rating">Highest rated</option>
          </select>
        </label>

        <form action="/instructor-grid" className="mw-catalog-search">
          <i className="fa-solid fa-magnifying-glass mw-catalog-search__icon" aria-hidden="true" />
          <input
            type="search"
            name="q"
            className="mw-catalog-search__input"
            placeholder="Search instructors"
            aria-label="Search instructors"
          />
        </form>
      </div>
    </div>
  );
}
