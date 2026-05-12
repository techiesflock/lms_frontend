import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

function ResumeLessonRows() {
  return (
    <>
      <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-3 align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1">
            <i className="fa-solid fa-circle mx-1 fs-5" />
            5.20
          </span>
          <p className="fw-medium mx-2">Describe SEO Engine</p>
        </div>
        <div className="d-flex float-end">
          <Link href="/course-watch" className="resume-play-btn" aria-label="Play">
            <i className="isax isax-play-circle5" />
          </Link>
          <Link href="#" className="delete-btn" aria-label="Remove">
            <i className="isax isax-trash" />
          </Link>
        </div>
      </div>
      <div className="d-flex border rounded-2 bg-white p-2 p-sm-3 mt-2 align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <span className="badge badge-primary d-inline-flex align-items-center badge-md p-1">
            <i className="fa-solid fa-circle mx-1 fs-5" />
            5.20
          </span>
          <p className="fw-medium mx-2">Know about all marketing</p>
        </div>
        <div className="d-flex float-end">
          <Link href="/course-watch" className="resume-play-btn" aria-label="Play">
            <i className="isax isax-play-circle5" />
          </Link>
          <Link href="#" className="delete-btn" aria-label="Remove">
            <i className="isax isax-trash" />
          </Link>
        </div>
      </div>
    </>
  );
}

/** Main block from `course-resume.html` (`div.course-resume`). */
export function CourseResumePageBody() {
  const parentId = "resume-curriculum-acc";

  return (
    <div className="course-resume">
      <div className="container">
        <div className="card mb-4">
          <div className="card-body">
            <div className="course-resume-details-1 d-lg-flex align-items-center mb-3">
              <div className="position-relative cou-resume-image">
                <img className="img-fluid" src={assetPath("img/course/course-26.jpg")} alt="" />
              </div>
              <div className="cou-resume-content w-100 ps-lg-4">
                <h3 className="mb-2">The Complete Web Developer Course 2.0</h3>
                <p className="mb-3 fs-14">
                  Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python
                </p>
                <div className="d-flex align-items-center cou-lesson">
                  <p className="d-flex align-items-center">
                    <img className="img-fluid" src={assetPath("img/icons/book3.svg")} alt="" />
                    12+ Lesson
                  </p>
                  <p className="d-flex align-items-center">
                    <img className="img-fluid" src={assetPath("img/icons/timer-start.svg")} alt="" />
                    9hr 30min
                  </p>
                  <p className="d-flex align-items-center">
                    <img className="img-fluid" src={assetPath("img/icons/people3.svg")} alt="" />
                    32 students enrolled
                  </p>
                  <span className="badge badge-sm fs-12 rounded-pill bg-warning">Web Development</span>
                </div>
                <Link href="/course-watch" className="btn btn-secondary d-inline-flex align-items-center">
                  <i className="isax isax-pause-circle5 me-1" /> Resume Course
                </Link>
              </div>
            </div>
            <div className="course-resume-details-2">
              <h5>Course Curriculum</h5>
              <div className="accordion accordion-customicon1 accordions-items-seperate" id={parentId}>
                <div className="accordion-item" data-aos="fade-up">
                  <h2 className="accordion-header" id="resume-h-1">
                    <button
                      type="button"
                      className="accordion-button"
                      data-bs-toggle="collapse"
                      data-bs-target="#resume-c-1"
                      aria-expanded="true"
                      aria-controls="resume-c-1"
                    >
                      <span>
                        Introduction of Digital Marketing{" "}
                        <small className="d-flex fs-14 text-gray-7 fw-normal mt-1">No of Lecturers : 3</small>
                      </span>{" "}
                      <i className="isax isax-arrow-circle-up4" />
                    </button>
                  </h2>
                  <div
                    id="resume-c-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="resume-h-1"
                    data-bs-parent={`#${parentId}`}
                  >
                    <div className="accordion-body pb-0">
                      <p className="mb-2 fs-16">
                        1/3 Completed <span className="float-end text-gray-9 fw-medium">50%</span>
                      </p>
                      <div
                        className="progress mb-1 progress-xs progress-animate border-radius-0"
                        role="progressbar"
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="progress-bar bg-secondary" style={{ width: "50%" }} />
                      </div>
                      <ul>
                        <li>
                          <h6 className="d-flex align-items-center">
                            <i className="isax isax-play-circle5 fs-24 text-success me-1" />
                            Introduction <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span>
                          </h6>
                          <div className="d-flex mt-3">
                            <Link href="#" className="btn note-btn px-3 me-2">
                              <i className="isax isax-note-2 me-2 fs-10" />
                              Note
                            </Link>
                            <Link href="#" className="btn play-again-btn px-3 me-2">
                              <i className="isax isax-note-favorite5 me-2 fs-10" />
                              Play Again
                            </Link>
                          </div>
                          <ResumeLessonRows />
                        </li>
                        <li>
                          <h6 className="d-flex align-items-center">
                            <i className="isax isax-play-circle5 fs-24 text-success me-1" />
                            What is Digital Marketing What is Digital Marketing{" "}
                            <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">2m 10s</span>
                          </h6>
                          <div className="d-flex mt-3">
                            <Link href="#" className="btn note-btn px-3 me-2">
                              <i className="isax isax-note-2 me-2 fs-10" />
                              Note
                            </Link>
                            <Link href="#" className="btn play-again-btn px-3 me-2">
                              <i className="isax isax-note-favorite5 me-2 fs-10" />
                              Play Again
                            </Link>
                          </div>
                        </li>
                        <li>
                          <h6 className="d-flex align-items-center">
                            <i className="isax isax-play-circle5 fs-24 text-info me-1" />
                            Type of Digital Marketing{" "}
                            <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">18m 10s</span>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="accordion-item" data-aos="fade-up" data-aos-delay="250">
                  <h2 className="accordion-header" id="resume-h-2">
                    <button
                      type="button"
                      className="accordion-button collapsed"
                      data-bs-toggle="collapse"
                      data-bs-target="#resume-c-2"
                      aria-expanded="false"
                      aria-controls="resume-c-2"
                    >
                      <span>
                        Advanced Marketing Topics{" "}
                        <small className="d-flex fs-14 text-gray-7 fw-normal mt-1">No of Lecturers : 3</small>
                      </span>{" "}
                      <i className="isax isax-arrow-circle-up4" />
                    </button>
                  </h2>
                  <div
                    id="resume-c-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="resume-h-2"
                    data-bs-parent={`#${parentId}`}
                  >
                    <div className="accordion-body pb-0">
                      <p className="mb-1 fs-16">
                        0/3 Completed <span className="float-end text-gray-9 fw-medium">0%</span>
                      </p>
                      <div
                        className="progress mb-1 progress-xs progress-animate border-radius-0"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div className="progress-bar bg-secondary" style={{ width: "0%" }} />
                      </div>
                      <ul>
                        <li>
                          <h6 className="d-flex align-items-center">
                            <i className="isax isax-play-circle5 fs-24 text-info me-1" />
                            Upcoming module <span className="text-gray-7 fw-normal ms-auto flex-shrink-0">12m</span>
                          </h6>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
