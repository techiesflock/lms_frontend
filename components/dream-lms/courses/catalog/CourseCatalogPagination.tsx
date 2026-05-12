export function CourseCatalogPagination() {
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
