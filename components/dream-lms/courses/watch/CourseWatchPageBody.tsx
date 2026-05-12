import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const SECTIONS = [
  {
    id: "watch-sec-1",
    title: "Html Introduction",
    lessons: [
      { name: "Introduction", state: "completed" },
      { name: "What is HTML", state: "current" },
      { name: "What is a Web page?", state: "locked" },
    ],
  },
  {
    id: "watch-sec-2",
    title: "Your First webpage",
    lessons: [
      { name: "Create a document", state: "locked" },
      { name: "Add semantic tags", state: "locked" },
      { name: "Preview in browser", state: "locked" },
    ],
  },
  {
    id: "watch-sec-3",
    title: "Project and certificate",
    lessons: [
      { name: "Portfolio assignment", state: "assignment" },
      { name: "Final quiz", state: "quiz" },
      { name: "Certificate eligibility", state: "locked" },
    ],
  },
] as const;

/** `course-watch.html` player + curriculum column. */
export function CourseWatchPageBody() {
  const accId = "course-watch-curriculum";

  return (
    <div className="content pt-0">
      <div className="container-fluid">
        <div className="course-watch-section">
          <div className="row">
            <div className="col-lg-4 border-end">
              <div className="progress-overview-section">
                <div className="mb-4">
                  <Link href="/course-resume" className="back-to-course">
                    <i className="isax isax-arrow-left me-1" />
                    Back to Course
                  </Link>
                </div>
                <h3>Learn Responsive Web Design Essentials</h3>
                <div className="mb-4">
                  <p className="mb-1">46% Complete</p>
                  <div
                    className="progress progress-xs mb-2"
                    role="progressbar"
                    aria-valuenow={46}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="progress-bar bg-success" style={{ width: "46%" }} />
                  </div>
                  <span className="fw-medium">Last activity on April 20, 2025</span>
                </div>
                <div className="accordions-items-seperate" id={accId}>
                  {SECTIONS.map((sec, idx) => (
                    <div key={sec.id} className="accordion-item">
                      <div className="accordion-header" id={`${sec.id}-head`}>
                        <div
                          className={`accordion-button${idx === 0 ? "" : " collapsed"}`}
                          role="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${sec.id}-body`}
                          aria-expanded={idx === 0 ? "true" : "false"}
                          aria-controls={`${sec.id}-body`}
                        >
                          <div>
                            <span className="d-block mb-1">Section {idx + 1}</span>
                            <h6 className="mb-0">{sec.title}</h6>
                          </div>
                        </div>
                      </div>
                      <div
                        id={`${sec.id}-body`}
                        className={`accordion-collapse collapse${idx === 0 ? " show" : ""}`}
                        aria-labelledby={`${sec.id}-head`}
                        data-bs-parent={`#${accId}`}
                      >
                        <div className="accordion-body">
                          {sec.lessons.map((lesson, li) => (
                            <div
                              key={lesson.name}
                              className={`d-flex align-items-center justify-content-between${li < sec.lessons.length - 1 ? " mb-3" : ""}`}
                            >
                              <div className="d-flex align-items-center">
                                <span className="d-flex">
                                  <i className={`${lessonIcon(lesson.state)} fs-24 me-1`} />
                                </span>
                                <p className="accordian-content mb-0">{lesson.name}</p>
                              </div>
                              <span className="d-inline-flex align-items-center gap-1">
                                {lessonLabel(lesson.state)}
                                <small>2m 10s</small>
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="course-watch-content">
                <div className="position-relative video-btn">
                  <Link href="https://www.youtube.com/embed/1trvO6dqQUI" target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid" src={assetPath("img/course/course-27.jpg")} alt="" />
                    <div className="play-icon">
                      <i className="fa-solid fa-play fs-28" />
                    </div>
                  </Link>
                </div>
                <ul className="nav-tabs mb-4 nav-justified border-0 nav-style-1 d-sm-flex d-block" role="tablist">
                  <li className="nav-item active">
                    <button type="button" className="btn nav-link active" data-bs-toggle="tab" data-bs-target="#watch-overview">
                      Overview
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn nav-link" data-bs-toggle="tab" data-bs-target="#watch-notes">
                      Notes
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn nav-link" data-bs-toggle="tab" data-bs-target="#watch-faq">
                      FAQ
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn nav-link" data-bs-toggle="tab" data-bs-target="#watch-resources">
                      Resources
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn nav-link" data-bs-toggle="tab" data-bs-target="#watch-qa">
                      Q&A
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className="btn nav-link" data-bs-toggle="tab" data-bs-target="#watch-announcements">
                      Announcements
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active show" id="watch-overview" role="tabpanel">
                    <div className="mb-4">
                      <h6 className="fs-18 fw-semibold mb-1">About this course</h6>
                      <p>Learn Web Development Without Writing Much Code</p>
                    </div>
                    <div className="mb-4">
                      <h6 className="fs-18 fw-semibold mb-2">Description</h6>
                      <p>
                        Embark on a transformative journey into AI with Mike Wheeler, your guide in this Udemy Best
                        Seller course on ChatGPT and Prompt Engineering. As an experience instructor who has taught well
                        over 300,000 students, Mike unveils the secrets of developing your own custom GPTs, ensuring
                        your skills shine in the thriving digital marketplace.
                      </p>
                      <p className="mb-1">
                        This course will get your familiar with Generative AI and the effective use of ChatGPT and is
                        perfect for the beginner. You will also learn advanced prompting techniques to take your Prompt
                        Engineering skills to the next level!
                      </p>
                      <Link href="#" className="readmore-btn">
                        Readmore
                      </Link>
                    </div>
                    <div className="mb-4">
                      <h6 className="fs-18 fw-semibold mb-2">What You&apos;ll Learn</h6>
                      <ul className="list-unstyled what-you-learn ms-4" style={{ listStyleType: "disc" }}>
                        <li className="mb-2">Setting up the environment</li>
                        <li className="mb-2">Advanced HTML Practices</li>
                        <li className="mb-2">Build a portfolio website</li>
                        <li className="mb-2">Responsive Designs</li>
                        <li className="mb-2">Understand HTML Programming</li>
                        <li className="mb-2">Code HTML</li>
                        <li className="mb-0">Start building beautiful websites</li>
                      </ul>
                    </div>
                    <div className="mb-0">
                      <h6 className="fs-18 fw-semibold mb-2">Requirements</h6>
                      <ul className="list-unstyled what-you-learn ms-4" style={{ listStyleType: "disc" }}>
                        <li className="mb-2">Any computer will work: Windows, macOS or Linux</li>
                        <li className="mb-2">Basic programming HTML and CSS.</li>
                        <li className="mb-0">Basic/Minimal understanding of JavaScript</li>
                      </ul>
                    </div>
                  </div>
                  <div className="tab-pane" id="watch-notes" role="tabpanel">
                    <div className="mb-0">
                      <h6 className="fs-18 fw-semibold mb-1">Notes</h6>
                      <p>
                        Embark on a transformative journey into AI with Mike Wheeler, your guide in this Udemy Best
                        Seller course on ChatGPT and Prompt Engineering. As an experience instructor who has taught well
                        over 300,000 students, Mike unveils the secrets of developing your own custom GPTs, ensuring your
                        skills shine in the thriving digital marketplace.
                      </p>
                      <p className="mb-0">
                        This course will get your familiar with Generative AI and the effective use of ChatGPT and is
                        perfect for the beginner. You will also learn advanced prompting techniques to take your Prompt
                        Engineering skills to the next level!
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="watch-faq" role="tabpanel">
                    <div className="faq-accordion">
                      <div className="accordions-items-seperate" id="watch-faq-acc">
                        <div className="accordion-item">
                          <div className="accordion-header" id="watch-faq-h1">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#watch-faq-c1"
                              aria-expanded="false"
                              aria-controls="watch-faq-c1"
                            >
                              How do I enroll in a course?
                            </button>
                          </div>
                          <div
                            id="watch-faq-c1"
                            className="accordion-collapse collapse"
                            aria-labelledby="watch-faq-h1"
                            data-bs-parent="#watch-faq-acc"
                          >
                            <div className="accordion-body">
                              <p className="mb-0">
                                Many websites offer a Certificate of Completion for paid courses. Free courses may or
                                may not include a certificate, depending on the platform&apos;s policies.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item">
                          <h2 className="accordion-header" id="watch-faq-h2">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#watch-faq-c2"
                              aria-expanded="false"
                              aria-controls="watch-faq-c2"
                            >
                              How long do I have access to a course?
                            </button>
                          </h2>
                          <div
                            id="watch-faq-c2"
                            className="accordion-collapse collapse"
                            aria-labelledby="watch-faq-h2"
                            data-bs-parent="#watch-faq-acc"
                          >
                            <div className="accordion-body">
                              <p className="mb-0">
                                Many websites offer a Certificate of Completion for paid courses. Free courses may or
                                may not include a certificate, depending on the platform&apos;s policies.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="watch-resources" role="tabpanel">
                    <h6 className="fs-18 fw-semibold mb-3">Downloadable resources</h6>
                    {["starter-files.zip", "html-cheatsheet.pdf", "project-brief.pdf"].map((file) => (
                      <div key={file} className="d-flex align-items-center justify-content-between border rounded-3 p-3 mb-2">
                        <span>
                          <i className="isax isax-document-download me-2 text-secondary" />
                          {file}
                        </span>
                        <Link href="#" className="btn btn-sm btn-outline-secondary">
                          Download
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="tab-pane" id="watch-qa" role="tabpanel">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
                      <h6 className="fs-18 fw-semibold mb-0">Lesson Q&A</h6>
                      <button type="button" className="btn btn-secondary btn-sm">
                        Ask a question
                      </button>
                    </div>
                    {["Why use semantic HTML?", "Can I skip locked lessons?"].map((question) => (
                      <div key={question} className="border rounded-3 p-3 mb-2">
                        <h6 className="mb-1">{question}</h6>
                        <p className="mb-0 text-muted fs-14">Static thread preview with instructor reply state.</p>
                      </div>
                    ))}
                  </div>
                  <div className="tab-pane" id="watch-announcements" role="tabpanel">
                    <div className="alert alert-info">
                      <h6 className="mb-1">New assignment added</h6>
                      <p className="mb-0">Submit your portfolio homepage draft before the final quiz unlocks.</p>
                    </div>
                    <div className="alert alert-light border">
                      <h6 className="mb-1">Certificate reminder</h6>
                      <p className="mb-0">Complete every lesson, quiz, and assignment to preview your certificate.</p>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mt-4 pt-4 border-top">
                  <Link href="/course-resume" className="btn btn-outline-secondary">
                    Previous lesson
                  </Link>
                  <div className="d-flex gap-2">
                    <Link href="/student-quiz" className="btn btn-outline-secondary">
                      Take quiz
                    </Link>
                    <Link href="/student-certificates" className="btn btn-secondary">
                      Preview certificate
                    </Link>
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

function lessonIcon(state: string) {
  if (state === "completed") return "isax isax-tick-circle5 text-success";
  if (state === "current") return "isax isax-play-circle5 text-secondary";
  if (state === "assignment") return "isax isax-document-text text-info";
  if (state === "quiz") return "isax isax-message-question text-warning";
  return "isax isax-lock text-gray-7";
}

function lessonLabel(state: string) {
  if (state === "completed") return <span className="badge bg-success-subtle text-success">Done</span>;
  if (state === "current") return <span className="badge bg-secondary-subtle text-secondary">Current</span>;
  if (state === "assignment") return <span className="badge bg-info-subtle text-info">Assignment</span>;
  if (state === "quiz") return <span className="badge bg-warning-subtle text-warning">Quiz</span>;
  return <span className="badge bg-light text-gray-7">Locked</span>;
}
