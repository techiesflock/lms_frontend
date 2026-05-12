import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { CourseCurriculumAccordion } from "./CourseCurriculumAccordion";

/** From `course-details-2.html`: `inner-banner` + `section.course-details`. */
export function CourseDetailsClassicPageBody() {
  return (
    <>
      <section className="inner-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="text-white mb-3 mb-sm-2">The Complete Web Developer Course 2.0</h1>
              <p className="text-white fs-14 mb-3">
                Learn Web Development by building 25 websites and mobile apps using HTML, CSS, Javascript, PHP, Python
              </p>
              <div className="d-flex align-items-center gap-2 gap-sm-3 gap-xl-4 flex-wrap justify-content-md-start justify-content-center">
                <p className="fw-medium text-white d-flex align-items-center mb-0">
                  <img className="me-2" src={assetPath("img/icons/book.svg")} alt="" />
                  12+ Lesson
                </p>
                <p className="fw-medium text-white d-flex align-items-center mb-0">
                  <img className="me-2" src={assetPath("img/icons/timer-start.svg")} alt="" />
                  9hr 30min
                </p>
                <p className="fw-medium text-white d-flex align-items-center mb-0">
                  <img className="me-2" src={assetPath("img/icons/people.svg")} alt="" />
                  32 students enrolled
                </p>
                <span className="badge badge-sm rounded-pill bg-warning fs-12">Web Development</span>
              </div>
              <div className="d-sm-flex align-items-center justify-content-sm-between mt-5">
                <div className="d-flex text-start align-items-center justify-content-sm-start justify-content-center">
                  <div className="avatar avatar-lg">
                    <img className="rounded-circle" src={assetPath("img/avatar/avatar10.jpg")} alt="" />
                  </div>
                  <div className="ms-2">
                    <h6 className="fs-18 text-white">
                      <Link href="/instructor-details">Nicole Brown</Link>
                    </h6>
                    <p className="text-white fs-14">Instructor</p>
                  </div>
                </div>
                <div className="d-flex mt-sm-0 mt-2 align-items-center justify-content-sm-start justify-content-center">
                  <i className="fa-solid fa-star text-warning me-1" />
                  <i className="fa-solid fa-star text-warning me-1" />
                  <i className="fa-solid fa-star text-warning me-1" />
                  <i className="fa-solid fa-star text-warning me-1" />
                  <i className="fa-solid fa-star text-white me-1" />
                  <p className="text-white fs-14">
                    <span className="text-warning">4.0</span> (15){" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="course-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="course-page-content">
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="subs-title mb-3">Overview</h5>
                    <h6 className="mb-3">Course Description</h6>
                    <p>
                      Embark on a transformative journey into AI with Mike Wheeler, your guide in this Udemy Best
                      Seller course on ChatGPT and Prompt Engineering. As an experience instructor who has taught well
                      over 300,000 students, Mike unveils the secrets of developing your own custom GPTs, ensuring your
                      skills shine in the thriving digital marketplace.
                    </p>
                    <p>
                      This course will get your familiar with Generative AI and the effective use of ChatGPT and is
                      perfect for the beginner. You will also learn advanced prompting techniques to take your Prompt
                      Engineering skills to the next level!
                    </p>
                    <h6 className="mb-3">What you&apos;ll learn</h6>
                    <ul className="custom-list">
                      <li className="list-items">Become a UX designer</li>
                      <li className="list-items">You will be able to add UX designer to your CV</li>
                      <li className="list-items">Become a UI designer</li>
                      <li className="list-items">Build & test a full website design.</li>
                      <li className="list-items">Build & test a full mobile app.</li>
                    </ul>
                    <h6 className="mb-3 mt-4">Requirements</h6>
                    <ul className="custom-list mb-0">
                      <li className="list-items">
                        You will need a copy of Adobe XD 2019 or above. A free trial can be downloaded from Adobe.
                      </li>
                      <li className="list-items">No previous design experience is needed.</li>
                      <li className="list-items">No previous Adobe XD skills are needed.</li>
                    </ul>
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between flex-wrap">
                      <h5 className="subs-title mb-2 mb-sm-3">Course Content</h5>
                      <h6 className="text-gray-7 mb-3">
                        92 Lectures <span className="text-secondary">10:56:11</span>
                      </h6>
                    </div>
                    <CourseCurriculumAccordion idPrefix="cd-classic" lastItemClassName="mb-0" />
                  </div>
                </div>
                <div className="card mb-4">
                  <div className="card-body">
                    <h5 className="subs-title mb-3">About the instructor</h5>
                    <div className="d-flex align-items-center justify-content-between mt-4 gap-2 flex-wrap">
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-lg">
                          <img className="rounded-circle" src={assetPath("img/avatar/avatar10.jpg")} alt="" />
                        </div>
                        <div className="ms-2">
                          <h5 className="fs-18 fw-semibold">
                            <Link href="/instructor-details">Nicole Brown</Link>
                          </h5>
                          <p className="mb-0">UX/UI Designer</p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <i className="fa-solid fa-star text-warning me-1" />
                        <i className="fa-solid fa-star text-warning me-1" />
                        <i className="fa-solid fa-star text-warning me-1" />
                        <i className="fa-solid fa-star text-warning me-1" />
                        <i className="fa-solid fa-star text-warning me-1" />
                        <p className="mb-0">4.5</p>
                      </div>
                    </div>
                    <div className="course-info align-items-center d-flex gap-2 gap-xl-3 mt-3 mb-3 flex-wrap">
                      <p className="fw-medium d-flex align-items-center fs-14 mb-0">
                        <img className="me-2" src={assetPath("img/icons/play2.svg")} alt="" />
                        5Courses
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
                    <p>
                      Skills: Web Design, UI Design, UX/UI Design, Mobile Design, User Interface Design, Sketch,
                      Photoshop, GUI, Html, Css, Grid Systems, Typography, Minimal, Template, English, Bootstrap,
                      Responsive Web Design, Pixel Perfect, Graphic Design, Corporate, Creative, Flat, Luxury and much
                      more.
                    </p>
                    <h6 className="fs-16 mb-2">Available for:</h6>
                    <ol className="order-list mb-0">
                      <li className="list-items">Full Time Office Work</li>
                      <li className="list-items">Remote Work</li>
                      <li className="list-items">Freelance</li>
                      <li className="list-items">Contract</li>
                      <li className="list-items">Worldwide</li>
                    </ol>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="subs-title mb-3">Post A comment</h5>
                    <form className="course-details-form" action="#">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <label className="form-label fs-14 fw-medium text-gray-7">Name</label>
                            <input className="form-control fs-14 text-gray-7" type="text" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <label className="form-label fs-14 fw-medium text-gray-7">Email</label>
                            <input className="form-control fs-14 text-gray-7" type="email" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label fs-14 fw-medium text-gray-7">Subject</label>
                            <input className="form-control fs-14 text-gray-7" type="text" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="mb-3">
                            <label className="form-label fs-14 fw-medium text-gray-7">Comments</label>
                            <textarea className="form-control fs-14 text-gray-7" />
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary post-btn">
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
              <div className="course-sidebar-sec">
                <div className="card">
                  <div className="card-body">
                    <div className="position-relative mb-4">
                      <Link href="https://www.youtube.com/embed/1trvO6dqQUI" target="_blank" rel="noopener noreferrer">
                        <img className="img-fluid" src={assetPath("img/course/video-bg.jpg")} alt="" />
                        <div className="play-icon">
                          <i className="ti ti-player-play-filled fs-28" />
                        </div>
                      </Link>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h2 className="text-success fs-30">FREE</h2>
                      <p className="mb-0">
                        <span className="text-decoration-line-through me-2">$99.00</span>50% off
                      </p>
                    </div>
                    <div className="d-flex justify-content-between gap-3 wishlist-btns">
                      <Link className="btn d-flex btn-wish" href="#">
                        <i className="isax isax-heart me-1 fs-18" />
                        Add to Wishlist
                      </Link>
                      <Link className="btn d-flex btn-wish" href="#">
                        <i className="ti ti-share me-1 fs-18" />
                        Share
                      </Link>
                    </div>
                    <Link href="/cart" className="btn btn-primary w-100 mt-4 btn-enroll">
                      Enroll Now
                    </Link>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h5 className="subs-title">Includes</h5>
                    <p>
                      <img className="me-2" src={assetPath("img/icons/play.svg")} alt="" />
                      11 hours on-demand video
                    </p>
                    <p>
                      <img className="me-2" src={assetPath("img/icons/import.svg")} alt="" />
                      69 downloadable resources
                    </p>
                    <p>
                      <img className="me-2" src={assetPath("img/icons/key.svg")} alt="" />
                      Full lifetime access
                    </p>
                    <p>
                      <img className="me-2" src={assetPath("img/icons/monitor-mobbile.svg")} alt="" />
                      Access on mobile and TV
                    </p>
                    <p>
                      <img className="me-2" src={assetPath("img/icons/cloud-lightning.svg")} alt="" />
                      Assignments
                    </p>
                    <p className="mb-0">
                      <img className="me-2" src={assetPath("img/icons/teacher.svg")} alt="" />
                      Certificate of Completion
                    </p>
                  </div>
                </div>
                <div className="cou-features-card">
                  <div className="cou-features">
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
    </>
  );
}
