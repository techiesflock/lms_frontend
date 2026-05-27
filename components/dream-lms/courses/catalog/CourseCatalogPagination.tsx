type CourseCatalogPaginationProps = {
  modern?: boolean;
  currentPage?: number;
  totalPages?: number;
};

export function CourseCatalogPagination({
  modern = false,
  currentPage = 1,
  totalPages = 2,
}: CourseCatalogPaginationProps) {
  if (!modern) {
    return (
      <div className="row align-items-center">
        <div className="col-md-2">
          <p className="pagination-text">Page 1 of 2</p>
        </div>
        <div className="col-md-10">
          <ul className="pagination lms-page justify-content-center justify-content-md-end mt-2 mt-md-0">
            <li className="page-item prev">
              <a className="page-link" href="#" tabIndex={-1}>
                <i className="fas fa-angle-left" />
              </a>
            </li>
            <li className="page-item first-page active">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item next">
              <a className="page-link" href="#">
                <i className="fas fa-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="mw-catalog-pagination" aria-label="Course pagination">
      <p className="mw-catalog-pagination__meta">
        Page {currentPage} of {totalPages}
      </p>
      <ul className="mw-catalog-pagination__list">
        <li>
          <a
            className="mw-catalog-pagination__btn"
            href="#"
            aria-label="Previous page"
            aria-disabled={currentPage <= 1}
          >
            <i className="fa-solid fa-chevron-left" aria-hidden="true" />
          </a>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <a
              className={`mw-catalog-pagination__btn${page === currentPage ? " is-active" : ""}`}
              href="#"
              aria-label={`Page ${page}`}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a
            className="mw-catalog-pagination__btn"
            href="#"
            aria-label="Next page"
            aria-disabled={currentPage >= totalPages}
          >
            <i className="fa-solid fa-chevron-right" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
