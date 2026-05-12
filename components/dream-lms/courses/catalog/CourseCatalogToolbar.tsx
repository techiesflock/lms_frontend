import Link from "next/link";

export function CourseCatalogToolbar({ variant }: { variant: "grid" | "list" }) {
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
