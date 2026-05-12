import Link from "next/link";
import {
  CATEGORY_BROWSE_PILLS,
  CATEGORY_TAB_GRAPHICS,
} from "@/config/courseCategoryPages";
import { assetPath } from "@/lib/assetPath";

/** Full `course-category.html` body: intro, pills, tab panes with tile grids. */
export function CourseCategoryV1Body() {
  return (
    <section className="course-category">
      <div className="container">
        <h2 className="mb-1">Browse By Categories</h2>
        <p>One stop shop for all your needs</p>

        <ul className="nav nav-pills" id="pills-tab" role="tablist">
          {CATEGORY_BROWSE_PILLS.map((pill, idx) => (
            <li key={pill.id} className="nav-item" role="presentation">
              <button
                className={`nav-link${idx === 0 ? " active" : ""}`}
                id={`${pill.id}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#${pill.target}`}
                type="button"
                role="tab"
                aria-controls={pill.target}
                aria-selected={idx === 0 ? "true" : "false"}
              >
                {pill.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="tab-content pt-4" id="pills-tabContent">
          {CATEGORY_BROWSE_PILLS.map((pill, idx) => (
            <div
              key={pill.target}
              className={`tab-pane fade${idx === 0 ? " show active" : ""}`}
              id={pill.target}
              role="tabpanel"
              aria-labelledby={`${pill.id}-tab`}
            >
              <div className="row">
                {CATEGORY_TAB_GRAPHICS.map((tile) => (
                  <div key={`${pill.id}-${tile.title}`} className="col-lg-4 col-md-6">
                    <div className="course-category-item">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            className="img-fluid category-image"
                            src={assetPath(tile.image)}
                            alt=""
                          />
                          <h6 className="pe-2">
                            <Link href="/course-details">{tile.title}</Link>
                          </h6>
                        </div>
                        <span className="cat-count text-white fw-medium bg-dark d-inline-flex">
                          {tile.count}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
