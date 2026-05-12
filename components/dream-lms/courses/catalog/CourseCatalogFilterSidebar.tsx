type CourseCatalogFilterSidebarProps = {
  /** Prefix for accordion DOM ids so multiple sidebars do not collide. */
  idPrefix: string;
};

export function CourseCatalogFilterSidebar({ idPrefix }: CourseCatalogFilterSidebarProps) {
  const acc = `acc-${idPrefix}`;
  return (
    <div className="filter-clear">
      <div className="clear-filter mb-4 pb-lg-2 d-flex align-items-center justify-content-between">
        <h5>
          <i className="feather-filter me-2" />
          Filters
        </h5>
        <a href="#" className="clear-text">
          Clear
        </a>
      </div>

      <div className="accordion accordion-customicon1 accordions-items-seperate" id={acc}>
        <div className="accordion-item">
          <h2 className="accordion-header" id={`${idPrefix}-h1`}>
            <a
              href="#"
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target={`#${idPrefix}-c1`}
              aria-expanded="true"
              aria-controls={`${idPrefix}-c1`}
            >
              Categories <i className="fa-solid fa-chevron-down" />
            </a>
          </h2>
          <div
            id={`${idPrefix}-c1`}
            className="accordion-collapse collapse show"
            aria-labelledby={`${idPrefix}-h1`}
            data-bs-parent={`#${acc}`}
          >
            <div className="accordion-body">
              {["Backend (3)", "CSS (2)", "Frontend (2)", "General (2)", "IT & Software (2)", "Photography (2)"].map(
                (label) => (
                  <div key={label}>
                    <label className="custom_check">
                      <input type="checkbox" name="cat" />
                      <span className="checkmark" />
                      {label}
                    </label>
                  </div>
                ),
              )}
              <a href="#" className="see-more-btn">
                See More
              </a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id={`${idPrefix}-h2`}>
            <a
              href="#"
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target={`#${idPrefix}-c2`}
              aria-expanded="true"
              aria-controls={`${idPrefix}-c2`}
            >
              Instructors<i className="fa-solid fa-chevron-down" />
            </a>
          </h2>
          <div
            id={`${idPrefix}-c2`}
            className="accordion-collapse collapse show"
            aria-labelledby={`${idPrefix}-h2`}
            data-bs-parent={`#${acc}`}
          >
            <div className="accordion-body">
              {["Keny White (10)", "Hinata Hyuga (5)", "John Doe (3)", "Nicole Brown"].map((label) => (
                <div key={label}>
                  <label className="custom_check">
                    <input type="checkbox" name="ins" />
                    <span className="checkmark" />
                    {label}
                  </label>
                </div>
              ))}
              <a href="#" className="see-more-btn">
                See More
              </a>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id={`${idPrefix}-h3`}>
            <a
              href="#"
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target={`#${idPrefix}-c3`}
              aria-expanded="true"
              aria-controls={`${idPrefix}-c3`}
            >
              Price<i className="fa-solid fa-chevron-down" />
            </a>
          </h2>
          <div
            id={`${idPrefix}-c3`}
            className="accordion-collapse collapse show"
            aria-labelledby={`${idPrefix}-h3`}
            data-bs-parent={`#${acc}`}
          >
            <div className="accordion-body">
              {["All (10)", "Free (5)", "Paid (3)"].map((label) => (
                <div key={label}>
                  <label className="custom_check custom_one">
                    <input type="checkbox" name="price" />
                    <span className="checkmark" />
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id={`${idPrefix}-h4`}>
            <a
              href="#"
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target={`#${idPrefix}-c4`}
              aria-expanded="true"
              aria-controls={`${idPrefix}-c4`}
            >
              Level<i className="fa-solid fa-chevron-down" />
            </a>
          </h2>
          <div
            id={`${idPrefix}-c4`}
            className="accordion-collapse collapse show"
            aria-labelledby={`${idPrefix}-h4`}
            data-bs-parent={`#${acc}`}
          >
            <div className="accordion-body">
              {["Beginner (10)", "Intermediate (5)", "Advanced (21)", "Expert (3)"].map((label) => (
                <div key={label}>
                  <label className="custom_check custom_one">
                    <input type="checkbox" name="lvl" />
                    <span className="checkmark" />
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id={`${idPrefix}-h5`}>
            <a
              href="#"
              className="accordion-button"
              data-bs-toggle="collapse"
              data-bs-target={`#${idPrefix}-c5`}
              aria-expanded="true"
              aria-controls={`${idPrefix}-c5`}
            >
              Reviews <i className="fa-solid fa-chevron-down" />
            </a>
          </h2>
          <div
            id={`${idPrefix}-c5`}
            className="accordion-collapse collapse show"
            aria-labelledby={`${idPrefix}-h5`}
            data-bs-parent={`#${acc}`}
          >
            <div className="accordion-body">
              {[5, 4, 3, 2, 1].map((n) => (
                <div key={n}>
                  <label className="custom_check custom_one">
                    <input type="checkbox" name="rev" />
                    <span className="checkmark" />
                    {Array.from({ length: 5 }, (_, i) => (
                      <i
                        key={i}
                        className={`fa-solid fa-star ${i < n ? "text-warning" : "text-light"} me-1`}
                      />
                    ))}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
