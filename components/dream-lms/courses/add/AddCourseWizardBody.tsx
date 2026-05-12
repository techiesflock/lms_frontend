import Link from "next/link";

const WIZARD_STEPS = [
  "Course Information",
  "Course Media",
  "Curriculum",
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
                <fieldset className="form-inner wizard-form-card mt-4" id="add-course-step-2">
                  <div className="title">
                    <h5>Course Media</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="bg-light border p-4 rounded-3 text-center h-100">
                        <i className="isax isax-gallery-add fs-1 text-secondary mb-3" />
                        <h6 className="mb-2">Course thumbnail</h6>
                        <p className="fs-14 text-muted">Static upload state for course image, 1280x720 recommended.</p>
                        <button type="button" className="btn btn-outline-secondary rounded-pill btn-sm">
                          Choose image
                        </button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="bg-light border p-4 rounded-3 text-center h-100">
                        <i className="isax isax-video-add fs-1 text-secondary mb-3" />
                        <h6 className="mb-2">Promo video</h6>
                        <p className="fs-14 text-muted">Static upload state for marketplace preview video.</p>
                        <button type="button" className="btn btn-outline-secondary rounded-pill btn-sm">
                          Choose video
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="form-inner wizard-form-card mt-4" id="add-course-step-3">
                  <div className="title d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <h5>Curriculum Builder</h5>
                    <button type="button" className="btn btn-primary rounded-pill btn-sm">
                      <i className="isax isax-add me-1" />
                      Add Section
                    </button>
                  </div>
                  {[
                    { section: "Getting Started", lessons: ["Welcome lesson", "Setup files", "Project overview"] },
                    { section: "Core Concepts", lessons: ["Reusable components", "Responsive layouts", "Final exercise"] },
                  ].map((group, groupIndex) => (
                    <div className="bg-light border rounded-3 p-3 mb-3" key={group.section}>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <h6 className="mb-0">
                          Section {groupIndex + 1}: {group.section}
                        </h6>
                        <button type="button" className="btn btn-outline-secondary btn-sm rounded-pill">
                          Add Lesson
                        </button>
                      </div>
                      {group.lessons.map((lesson, lessonIndex) => (
                        <div
                          className="d-flex align-items-center justify-content-between bg-white border rounded-2 p-3 mb-2"
                          key={lesson}
                        >
                          <span>
                            <i className="isax isax-video-play me-2 text-secondary" />
                            Lesson {lessonIndex + 1}: {lesson}
                          </span>
                          <span className="badge bg-light text-gray-9">08:24</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </fieldset>

                <fieldset className="form-inner wizard-form-card mt-4" id="add-course-step-4">
                  <div className="title">
                    <h5>Additional Information</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-block">
                        <label className="form-label">Certificate availability</label>
                        <select className="select form-control" defaultValue="yes">
                          <option value="yes">Certificate included</option>
                          <option value="no">No certificate</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="input-block">
                        <label className="form-label">Course status</label>
                        <select className="select form-control" defaultValue="draft">
                          <option value="draft">Draft</option>
                          <option value="pending">Pending review</option>
                          <option value="published">Published</option>
                          <option value="rejected">Rejected</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block">
                        <label className="form-label">Instructor notes</label>
                        <textarea
                          className="form-control"
                          rows={4}
                          defaultValue="Static notes for reviewer: includes preview video, assignments, and certificate."
                        />
                      </div>
                    </div>
                  </div>
                </fieldset>

                <fieldset className="form-inner wizard-form-card mt-4" id="add-course-step-5">
                  <div className="title">
                    <h5>Pricing & Publish Checklist</h5>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="input-block">
                        <label className="form-label">List Price</label>
                        <input type="text" className="form-control" defaultValue="$99" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-block">
                        <label className="form-label">Sale Price</label>
                        <input type="text" className="form-control" defaultValue="$49" />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="input-block">
                        <label className="form-label">Access</label>
                        <select className="select form-control" defaultValue="lifetime">
                          <option value="lifetime">Lifetime access</option>
                          <option value="free">Free course</option>
                          <option value="subscription">Subscription only</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light border rounded-3 p-3 mb-4">
                    {[
                      "Basic info completed",
                      "Thumbnail and promo video added",
                      "At least one curriculum section added",
                      "Pricing reviewed",
                      "Ready to submit for review",
                    ].map((item, index) => (
                      <div className="form-check mb-2" key={item}>
                        <input className="form-check-input" type="checkbox" id={`publish-check-${index}`} defaultChecked={index < 4} />
                        <label className="form-check-label" htmlFor={`publish-check-${index}`}>
                          {item}
                        </label>
                      </div>
                    ))}
                  </div>
                  <div className="add-form-btn widget-next-btn submit-btn d-flex justify-content-end mb-0 gap-2">
                    <Link href="/instructor-course" className="btn btn-outline-secondary rounded-pill">
                      Save Draft
                    </Link>
                    <Link href="/instructor-course" className="btn main-btn">
                      Submit for Review <i className="isax isax-arrow-right-3 ms-1" />
                    </Link>
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
