import Link from "next/link";

type CourseCatalogToolbarProps = {
  variant: "grid" | "list";
  modern?: boolean;
  showLayoutToggle?: boolean;
  total?: number;
  showingFrom?: number;
  showingTo?: number;
};

export function CourseCatalogToolbar({
  variant,
  modern = false,
  showLayoutToggle = true,
  total = 50,
  showingFrom = 1,
  showingTo = 9,
}: CourseCatalogToolbarProps) {
  if (!modern) {
    return (
      <div className="showing-list mb-4">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="show-result text-center text-lg-start">
              <h6 className="fw-medium">Showing 1-9 of 50 results</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="show-filter add-course-info">
              <form action="/search-results">
                <div className="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">
                  <div className="view-icons mb-2 mb-sm-0">
                    <Link href="/course-grid" className={`grid-view${variant === "grid" ? " active" : ""}`}>
                      <i className="feather-grid" />
                    </Link>
                    <Link href="/course-list" className={`list-view${variant === "list" ? " active" : ""}`}>
                      <i className="isax isax-task" />
                    </Link>
                  </div>
                  <select className="form-select" aria-label="Sort courses">
                    <option>Newly Published </option>
                    <option>Trending Courses</option>
                    <option>Top Rated</option>
                    <option>Free Courses</option>
                  </select>
                  <div className=" search-group">
                    <i className="isax isax-search-normal-1" />
                    <input type="text" name="q" className="form-control" placeholder="Search" defaultValue="react design" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mw-catalog-toolbar">
      <p className="mw-catalog-toolbar__count">
        Showing <strong>{showingFrom}–{showingTo}</strong> of <strong>{total}</strong> results
      </p>

      <div className="mw-catalog-toolbar__actions">
        {showLayoutToggle ? (
          <div className="mw-catalog-view-toggle" role="group" aria-label="Layout">
            <Link
              href="/course-grid"
              className={`mw-catalog-view-btn${variant === "grid" ? " is-active" : ""}`}
              aria-label="Grid view"
              aria-current={variant === "grid" ? "page" : undefined}
            >
              <i className="fa-solid fa-grip" aria-hidden="true" />
            </Link>
            <Link
              href="/course-list"
              className={`mw-catalog-view-btn${variant === "list" ? " is-active" : ""}`}
              aria-label="List view"
              aria-current={variant === "list" ? "page" : undefined}
            >
              <i className="fa-solid fa-list" aria-hidden="true" />
            </Link>
          </div>
        ) : null}

        <label className="mw-catalog-sort">
          <span className="visually-hidden">Sort by</span>
          <select className="mw-catalog-sort__select" defaultValue="popular" aria-label="Sort courses">
            <option value="popular">Most popular</option>
            <option value="newest">Newest</option>
            <option value="rating">Highest rated</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>

        <form action="/search-results" className="mw-catalog-search">
          <i className="fa-solid fa-magnifying-glass mw-catalog-search__icon" aria-hidden="true" />
          <input
            type="search"
            name="q"
            className="mw-catalog-search__input"
            placeholder="Search courses"
            defaultValue=""
            aria-label="Search courses"
          />
        </form>
      </div>
    </div>
  );
}
