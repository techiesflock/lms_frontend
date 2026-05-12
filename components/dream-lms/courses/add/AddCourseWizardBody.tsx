import Link from "next/link";

const WIZARD_STEPS = [
  "Course Information",
  "Course Media",
  "Curriculam",
  "Additional information",
  "Pricing",
] as const;

/** Wizard chrome + step 1 (Basic Information) from `add-course.html`. */
export function AddCourseWizardBody() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="add-course-item">
              <div className="wizard">
                <ul className="form-wizard-steps" id="progressbar2">
                  {WIZARD_STEPS.map((label, i) => (
                    <li key={label} className={i === 0 ? "progress-active" : ""}>
                      <div className="profile-step">
                        <span className="dot-active mb-2">
                          <span className="number">{String(i + 1).padStart(2, "0")}</span>
                          <span className="tickmark">
                            <i className="fa-solid fa-check" />
                          </span>
                        </span>
                        <div className="step-section">
                          <p>{label}</p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="initialization-form-set">
                <fieldset className="form-inner wizard-form-card" id="add-course-step-1">
                  <div className="title">
                    <h5>Basic Information</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="input-block">
                        <label className="form-label">
                          Course Title<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-block">
                        <label className="form-label">
                          Course Category<span className="text-danger ms-1">*</span>
                        </label>
                        <select className="select form-control" defaultValue="">
                          <option value="">Select</option>
                          <option>Management</option>
                          <option>IT & Softwares</option>
                          <option>Marketing</option>
                          <option>Finance</option>
                          <option>Productivity</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-block">
                        <label className="form-label">
                          Course Level<span className="text-danger ms-1">*</span>
                        </label>
                        <select className="select form-control" defaultValue="">
                          <option value="">Select</option>
                          <option>Beginner </option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                          <option>Expert</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-block">
                        <label className="form-label">
                          Language<span className="text-danger ms-1">*</span>
                        </label>
                        <select className="select form-control" defaultValue="">
                          <option value="">Select</option>
                          <option>French </option>
                          <option>German</option>
                          <option>Arabic</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label className="form-label">
                          Max Number of Students<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control student-count" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label className="form-label">
                          Public / Private Course<span className="text-danger ms-1">*</span>
                        </label>
                        <select className="select form-control" defaultValue="">
                          <option value="">Select</option>
                          <option>Private </option>
                          <option>Public</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block">
                        <label className="form-label">
                          Short Description<span className="text-danger ms-1">*</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block">
                        <label className="form-label">
                          Course Description<span className="text-danger ms-1">*</span>
                        </label>
                        <textarea className="form-control" rows={5} placeholder="Course description" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-light border p-4 rounded-3">
                        <h6 className="mb-2">What will students learn in your course?</h6>
                        <div className="input-block">
                          <div className="d-flex align-items-center add-new-input">
                            <input type="text" className="form-control" defaultValue="Become a UX designer" />
                            <Link href="#" className="link-trash" aria-label="Remove item">
                              <i className="isax isax-trash" />
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                          <Link href="#" className="d-flex align-items-center add-new-topic">
                            <i className="isax isax-add me-1" /> Add New Item
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-light border p-4 rounded-3">
                        <h6 className="mb-2">Requirements</h6>
                        <div className="input-block">
                          <div className="d-flex align-items-center add-new-input">
                            <input type="text" className="form-control" />
                            <Link href="#" className="link-trash" aria-label="Remove item">
                              <i className="isax isax-trash" />
                            </Link>
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-end">
                          <Link href="#" className="d-flex align-items-center add-new-topic">
                            <i className="isax isax-add me-1" /> Add New Item
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check form-switch form-check-md mb-0 mt-3">
                        <input className="form-check-input form-checked-success" type="checkbox" id="add-course-featured" defaultChecked />
                        <label className="form-check-label" htmlFor="add-course-featured">
                          Check this for featured course
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="add-form-btn widget-next-btn submit-btn d-flex justify-content-end mb-0">
                    <div className="btn-left">
                      <Link href="#" className="btn main-btn next_btns">
                        Next <i className="isax isax-arrow-right-3 ms-1" />
                      </Link>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
