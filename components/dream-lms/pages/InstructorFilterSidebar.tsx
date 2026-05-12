/** Sidebar filters from `instructor-grid.html` — `idPrefix` keeps accordion IDs unique per page. */
export function InstructorFilterSidebar({ idPrefix }: { idPrefix: string }) {
  const p = idPrefix;
  const parentId = `${p}-accordion`;
  return (
    <div className="col-lg-3 theiaStickySidebar">
      <div className="filter-clear">
        <div className="clear-filter d-flex align-items-center justify-content-between mb-4 pb-lg-2">
          <h5>
            <i className="feather-filter me-2" />
            Filters
          </h5>
          <div className="clear-text">
            <a href="#" className="clear-text">
              Clear
            </a>
          </div>
        </div>
        <div id={parentId} className="accordion accordion-customicon1 accordions-items-seperate">
          <div className="accordion-item">
            <h2 className="accordion-header" id={`${p}-h1`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${p}-c1`}
                aria-expanded="true"
                aria-controls={`${p}-c1`}
              >
                Categories <i className="fa-solid fa-chevron-down" />
              </button>
            </h2>
            <div id={`${p}-c1`} className="accordion-collapse collapse show" data-bs-parent={`#${parentId}`}>
              <div className="accordion-body">
                {["Backend (3)", "CSS (2)", "Frontend (2)", "IT & Software (2)"].map((label) => (
                  <div key={label}>
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" />
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
            <h2 className="accordion-header" id={`${p}-h2`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${p}-c2`}
                aria-expanded="true"
                aria-controls={`${p}-c2`}
              >
                Instructors<i className="fa-solid fa-chevron-down" />
              </button>
            </h2>
            <div id={`${p}-c2`} className="accordion-collapse collapse show" data-bs-parent={`#${parentId}`}>
              <div className="accordion-body">
                {["Keny White (10)", "John Doe (3)", "Nicole Brown"].map((label) => (
                  <div key={label}>
                    <label className="custom_check">
                      <input type="checkbox" name="select_specialist" />
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
            <h2 className="accordion-header" id={`${p}-h3`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${p}-c3`}
                aria-expanded="true"
                aria-controls={`${p}-c3`}
              >
                Price<i className="fa-solid fa-chevron-down" />
              </button>
            </h2>
            <div id={`${p}-c3`} className="accordion-collapse collapse show" data-bs-parent={`#${parentId}`}>
              <div className="accordion-body">
                {["All (10)", "Free (5)", "Paid (3)"].map((label) => (
                  <div key={label}>
                    <label className="custom_check custom_one">
                      <input type="checkbox" name="select_specialist" />
                      <span className="checkmark" />
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id={`${p}-h4`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${p}-c4`}
                aria-expanded="true"
                aria-controls={`${p}-c4`}
              >
                Range<i className="fa-solid fa-chevron-down" />
              </button>
            </h2>
            <div id={`${p}-c4`} className="accordion-collapse collapse show" data-bs-parent={`#${parentId}`}>
              <div className="accordion-body">
                <div className="filter-range">
                  <input type="text" className="input-range" readOnly />
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id={`${p}-h5`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${p}-c5`}
                aria-expanded="true"
                aria-controls={`${p}-c5`}
              >
                Level<i className="fa-solid fa-chevron-down" />
              </button>
            </h2>
            <div id={`${p}-c5`} className="accordion-collapse collapse show" data-bs-parent={`#${parentId}`}>
              <div className="accordion-body">
                {["Beginner (10)", "Intermediate (5)", "Advanced (21)", "Expert (3)"].map((label) => (
                  <div key={label}>
                    <label className="custom_check custom_one">
                      <input type="checkbox" name="select_specialist" />
                      <span className="checkmark" />
                      {label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
