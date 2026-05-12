import Link from "next/link";

const statuses = [
  ["Published", "bg-success-transparent text-success"],
  ["Pending Review", "bg-warning-transparent text-warning"],
  ["Rejected", "bg-danger-transparent text-danger"],
  ["Draft", "bg-light text-gray-9"],
] as const;

export function StaticUiStatesPageBody() {
  return (
    <section className="course-content">
      <div className="container">
        <div className="row row-gap-4">
          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4 p-lg-5 text-center">
                <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light mb-3 p-4">
                  <i className="isax isax-box-search fs-1 text-secondary" />
                </span>
                <h4 className="mb-2">Reusable empty state</h4>
                <p className="text-muted mb-4">
                  Static pattern for empty courses, orders, messages, tickets, certificates, and wishlist screens.
                </p>
                <Link href="/course-grid" className="btn btn-secondary rounded-pill">
                  Primary action
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="mb-3">Skeleton loader</h5>
                {[1, 2, 3].map((item) => (
                  <div className="d-flex align-items-center gap-3 mb-4" key={item}>
                    <span className="placeholder rounded-circle" style={{ width: 56, height: 56 }} />
                    <div style={{ flex: 1 }}>
                      <span className="placeholder col-8 mb-2" />
                      <span className="placeholder col-5" />
                    </div>
                  </div>
                ))}
                <span className="placeholder col-12 mb-2" />
                <span className="placeholder col-10" />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="mb-3">Confirmation modal state</h5>
                <div className="alert alert-warning mb-4">
                  <h6 className="mb-1">Remove course from cart?</h6>
                  <p className="mb-0">Static confirmation block for destructive actions.</p>
                </div>
                <div className="d-flex gap-2">
                  <button type="button" className="btn btn-light rounded-pill">
                    Cancel
                  </button>
                  <button type="button" className="btn btn-danger rounded-pill">
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h5 className="mb-3">Status badges and pagination</h5>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  {statuses.map(([label, className]) => (
                    <span className={`badge ${className}`} key={label}>
                      {label}
                    </span>
                  ))}
                </div>
                <nav aria-label="Static pagination">
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <span className="page-link">Previous</span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <Link href="/ui-states" className="page-link">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link href="/ui-states" className="page-link">
                        Next
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
