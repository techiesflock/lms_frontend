import Link from "next/link";
import { COURSE_CATALOG_ITEMS } from "@/config/courseCatalog";
import { assetPath } from "@/lib/assetPath";
import { CourseCurriculumAccordion } from "./CourseCurriculumAccordion";

/** Layout from `course-details.html`: `section.course-details-two` with hero card + 8/4 columns. */
export function CourseDetailsTwoPageBody() {
  return (
    <section className="course-details-two">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card bg-light">
              <div className="card-body d-lg-flex align-items-center">
                <div className="position-relative">
                  <Link href="https://www.youtube.com/embed/1trvO6dqQUI" target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid rounded-2" src={assetPath("img/course/video-bg.jpg")} alt="" />
                    <div className="play-icon">
                      <i className="ti ti-player-play-filled fs-28" />
                    </div>
                  </Link>
                </div>
                <div className="w-100 ps-lg-4">
                  <h3 className="mb-2">The Complete Web Developer Course 2.0</h3>
                  <p className="fs-14 mb-3">
                    Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP,
                    Python
                  </p>
                  <div className="d-flex align-items-center gap-2 gap-sm-3 gap-xl-4 flex-wrap my-3 my-sm-0">
                    <p className="fw-medium d-flex align-items-center mb-0">
                      <img className="me-2" src={assetPath("img/icons/book.svg")} alt="" />
                      12+ Lesson
                    </p>
                    <p className="fw-medium d-flex align-items-center mb-0">
                      <img className="me-2" src={assetPath("img/icons/timer-start.svg")} alt="" />
                      9hr 30min
                    </p>
                    <p className="fw-medium d-flex align-items-center mb-0">
                      <img className="me-2" src={assetPath("img/icons/people.svg")} alt="" />
                      32 students enrolled
                    </p>
                    <span className="badge badge-sm rounded-pill bg-warning fs-12">Web Development</span>
                  </div>
                  <div className="d-sm-flex align-items-center justify-content-sm-between mt-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg">
                        <img className="rounded-circle" src={assetPath("img/avatar/avatar10.jpg")} alt="" />
                      </div>
                      <div className="ms-2">
                        <h5 className="fs-18 fw-semibold">
                          <Link href="/instructor-details">Nicole Brown</Link>
                        </h5>
                        <p className="fs-14">Instructor</p>
                      </div>
                    </div>
                    <div className="d-flex mt-sm-0 mt-2 align-items-center">
                      <i className="fa-solid fa-star text-warning me-1" />
                      <i className="fa-solid fa-star text-warning me-1" />
                      <i className="fa-solid fa-star text-warning me-1" />
                      <i className="fa-solid fa-star text-warning me-1" />
                      <i className="fa-solid fa-star text-gray-1 me-1" />
                      <p className="fs-14">
                        <span className="text-gray-9">4.0</span> (15){" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-8">
            <div>
              <img
                src={assetPath("img/course/course-details-two-2.jpg")}
                alt=""
                className="img-fluid mb-4"
              />
            </div>
            <div className="course-page-content pt-0">
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="mb-3">Overview</h5>
                  <h6 className="mb-2">Course Description</h6>
                  <p>
                    Embark on a transformative journey into AI with Mike Wheeler, your guide in this Udemy Best Seller
                    course on ChatGPT and Prompt Engineering. As an experience instructor who has taught well over
                    300,000 students, Mike unveils the secrets of developing your own custom GPTs, ensuring your skills
                    shine in the thriving digital marketplace.
                  </p>
                  <p>
                    This course will get your familiar with Generative AI and the effective use of ChatGPT and is
                    perfect for the beginner. You will also learn advanced prompting techniques to take your Prompt
                    Engineering skills to the next level!
                  </p>
                  <h6 className="mb-2">What you&apos;ll learn</h6>
                  <ul className="custom-list mb-3">
                    <li className="list-item">Become a UX designer</li>
                    <li className="list-item">You will be able to add UX designer to your CV</li>
                    <li className="list-item">Become a UI designer</li>
                    <li className="list-item">Build & test a full website design.</li>
                    <li className="list-item">Build & test a full mobile app.</li>
                  </ul>
                  <h6 className="mb-2">Requirements</h6>
                  <ul className="custom-list mb-0">
                    <li className="list-item">
                      You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.
                    </li>
                    <li className="list-item">No previous design experience is needed.</li>
                    <li className="list-item">No previous Adobe XD skills are needed.</li>
                  </ul>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between flex-wrap">
                    <h5 className="subs-title mb-2 mb-sm-3">Course Content</h5>
                    <h6 className="fs-16 fw-medium text-gray-7 mb-3">
                      92 Lectures <span className="text-secondary">10:56:11</span>
                    </h6>
                  </div>
                  <CourseCurriculumAccordion idPrefix="cd-two" lastItemClassName="mb-0" />
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="subs-title mb-4">About the instructor</h5>
                  <div className="d-flex align-items-center justify-content-between mt-4 gap-2 flex-wrap">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-lg">
                        <img className="rounded-circle" src={assetPath("img/avatar/avatar10.jpg")} alt="" />
                      </div>
                      <div className="ms-2">
                        <Link href="/instructor-details" className="name-link">
                          Nicole Brown
                        </Link>
                        <p className="mb-0 fs-14">UX/UI Designer</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <i className="fa-solid fa-star text-warning me-1" />
                      <i className="fa-solid fa-star text-warning me-1" />
                      <i className="fa-solid fa-star text-warning me-1" />
                      <i className="fa-solid fa-star text-warning me-1" />
                      <i className="fa-solid fa-star text-warning me-2" />
                      <p className="mb-0 fs-14">4.5</p>
                    </div>
                  </div>
                  <div className="course-info align-items-center d-flex gap-2 gap-xl-3 mt-3 mb-3 flex-wrap">
                    <p className="fw-medium d-flex align-items-center fs-14 mb-0">
                      <img className="me-2" src={assetPath("img/icons/play2.svg")} alt="" />
                      5 Courses
                    </p>
                    <p className="fw-medium d-flex align-items-center fs-14 mb-0">
                      <img className="me-2" src={assetPath("img/icons/book2.svg")} alt="" />
                      12+ Lesson
                    </p>
                    <p className="fw-medium d-flex align-items-center fs-14 mb-0">
                      <img className="me-2" src={assetPath("img/icons/timer-start2.svg")} alt="" />
                      9hr 30min
                    </p>
                    <p className="fw-medium d-flex align-items-center fs-14 mb-0">
                      <img className="me-2" src={assetPath("img/icons/people.svg")} alt="" />
                      270,866 students enrolled
                    </p>
                  </div>
                  <p>UI/UX Designer, with 7+ Years Experience. Guarantee of High Quality Work.</p>
                  <h6 className="fs-16 mb-2">Skills: </h6>
                  <p>
                    Web Design, UI Design, UX/UI Design, Mobile Design, User Interface Design, Sketch, Photoshop, GUI,
                    Html, Css, Grid Systems, Typography, Minimal, Template, English, Bootstrap, Responsive Web Design,
                    Pixel Perfect, Graphic Design, Corporate, Creative, Flat, Luxury and much more.
                  </p>
                  <h6 className="fs-16 mb-2">Available for:</h6>
                  <ol className="ordered-list">
                    <li className="list-items">Full Time Office Work</li>
                    <li className="list-items">Remote Work</li>
                    <li className="list-items">Freelance</li>
                    <li className="list-items">Contract</li>
                    <li className="list-items mb-0">Worldwide</li>
                  </ol>
                </div>
              </div>
              <CourseFaqCard />
              <CourseReviewsCard />
              <RelatedCourses />
              <div className="card">
                <div className="card-body">
                  <h5 className="subs-title mb-3">Post A comment</h5>
                  <form className="course-details-form" action="#">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label">Name</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input className="form-control" type="email" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">Subject</label>
                          <input className="form-control" type="text" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">Comments</label>
                          <textarea className="form-control" />
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn post-btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-sidebar-sec mt-0 sticky-top">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 className="text-success fs-30">$49</h2>
                    <p className="fs-14 mb-0">
                      <span className="text-decoration-line-through me-2">$99.00</span>50% off
                    </p>
                  </div>
                  <div className="d-flex justify-content-between gap-3 wishlist-btns">
                    <Link className="btn d-flex btn-wish" href="#">
                      <i className="isax isax-heart5 me-1 fs-18 text-danger" />
                      Wishlisted
                    </Link>
                    <Link className="btn d-flex btn-wish" href="#">
                      <i className="ti ti-share me-1 fs-18" />
                      Share
                    </Link>
                  </div>
                  <Link href="/cart" className="btn btn-dark w-100 mt-3">
                    Add to Cart
                  </Link>
                  <Link href="/checkout" className="btn btn-primary w-100 mt-2 btn-enroll">
                    Enroll Now
                  </Link>
                </div>
              </div>
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="subs-title mb-4">Includes</h5>
                  <p className="mb-3">
                    <img className="me-2" src={assetPath("img/icons/play.svg")} alt="" />
                    11 hours on-demand video
                  </p>
                  <p className="mb-3">
                    <img className="me-2" src={assetPath("img/icons/import.svg")} alt="" />
                    69 downloadable resources
                  </p>
                  <p className="mb-3">
                    <img className="me-2" src={assetPath("img/icons/key.svg")} alt="" />
                    Full lifetime access
                  </p>
                  <p className="mb-3">
                    <img className="me-2" src={assetPath("img/icons/monitor-mobbile.svg")} alt="" />
                    Access on mobile and TV
                  </p>
                  <p className="mb-3">
                    <img className="me-2" src={assetPath("img/icons/cloud-lightning.svg")} alt="" />
                    Assignments
                  </p>
                  <p className="mb-0">
                    <img className="me-2" src={assetPath("img/icons/teacher.svg")} alt="" />
                    Certificate of Completion
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-body cou-features">
                  <h5 className="subs-title">Course Features</h5>
                  <ul>
                    <li>
                      <p className="mb-0">
                        <img className="me-2" src={assetPath("img/icons/people2.svg")} alt="" />
                        Enrolled: 32 students
                      </p>
                    </li>
                    <li>
                      <p className="mb-0">
                        <img className="me-2" src={assetPath("img/icons/timer-start3.svg")} alt="" />
                        Duration: 20 hours
                      </p>
                    </li>
                    <li>
                      <p className="mb-0">
                        <img className="me-2" src={assetPath("img/icons/note.svg")} alt="" />
                        Chapters: 15
                      </p>
                    </li>
                    <li>
                      <p className="mb-0">
                        <img className="me-2" src={assetPath("img/icons/play3.svg")} alt="" />
                        Video: 12 hours
                      </p>
                    </li>
                    <li>
                      <p className="mb-0">
                        <img className="me-2" src={assetPath("img/icons/chart.svg")} alt="" />
                        Level: Beginner
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseFaqCard() {
  const faqs = [
    {
      q: "Do I get lifetime access?",
      a: "Yes. This static UI shows the lifetime access promise that appears after purchase.",
    },
    {
      q: "Is there a certificate?",
      a: "Yes. Learners see certificate eligibility after completing all required lessons and quizzes.",
    },
    {
      q: "Can I preview lessons before buying?",
      a: "Preview lessons are marked inside the curriculum accordion and the hero preview opens a video.",
    },
  ];

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="subs-title mb-3">Frequently asked questions</h5>
        <div className="accordion accordion-customicon1 accordions-items-seperate" id="course-faq">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={faq.q}>
              <h2 className="accordion-header" id={`faq-heading-${index}`}>
                <a
                  href="#"
                  className={`accordion-button${index === 0 ? "" : " collapsed"}`}
                  data-bs-toggle="collapse"
                  data-bs-target={`#faq-collapse-${index}`}
                  aria-expanded={index === 0}
                  aria-controls={`faq-collapse-${index}`}
                >
                  {faq.q}
                  <i className="fa-solid fa-chevron-down" />
                </a>
              </h2>
              <div
                id={`faq-collapse-${index}`}
                className={`accordion-collapse collapse${index === 0 ? " show" : ""}`}
                aria-labelledby={`faq-heading-${index}`}
                data-bs-parent="#course-faq"
              >
                <div className="accordion-body">
                  <p className="mb-0">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CourseReviewsCard() {
  const reviews = [
    {
      name: "Sarah Johnson",
      text: "Clear roadmap, strong examples, and the projects feel practical for a portfolio.",
      rating: "5.0",
    },
    {
      name: "Lucas Garcia",
      text: "Good course structure. I would like more downloadable worksheets in the research section.",
      rating: "4.5",
    },
  ];

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <div>
            <h5 className="subs-title mb-1">Learner reviews</h5>
            <p className="mb-0 text-muted fs-14">Static review list with filter and sort controls.</p>
          </div>
          <select className="form-select w-auto" aria-label="Sort course reviews">
            <option>Most recent</option>
            <option>Highest rated</option>
            <option>Lowest rated</option>
          </select>
        </div>
        {reviews.map((review) => (
          <div className="border rounded-3 p-3 mb-3" key={review.name}>
            <div className="d-flex justify-content-between gap-3 flex-wrap">
              <h6 className="mb-1">{review.name}</h6>
              <span className="d-inline-flex align-items-center text-warning">
                <i className="fa-solid fa-star me-1" />
                {review.rating}
              </span>
            </div>
            <p className="mb-0 text-muted">{review.text}</p>
          </div>
        ))}
        <Link href="/student-reviews" className="btn btn-outline-secondary btn-sm">
          View all reviews
        </Link>
      </div>
    </div>
  );
}

function RelatedCourses() {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
          <h5 className="subs-title mb-0">Related courses</h5>
          <Link href="/course-grid" className="view-all">
            View All
          </Link>
        </div>
        <div className="row">
          {COURSE_CATALOG_ITEMS.slice(0, 2).map((course) => (
            <div className="col-md-6" key={course.id}>
              <div className="course-item-two course-item mx-0 mb-0">
                <div className="course-img">
                  <Link href="/course-details">
                    <img src={assetPath(course.image)} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="course-content">
                  <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-2">
                    {course.category}
                  </span>
                  <h6 className="title mb-2">
                    <Link href="/course-details">{course.title}</Link>
                  </h6>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className="text-warning">
                      <i className="fa-solid fa-star me-1" />
                      {course.rating}
                    </span>
                    <h6 className="text-secondary mb-0">{course.price}</h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
