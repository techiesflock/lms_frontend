import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";

export function AboutUsBody() {
  const clients = ["01", "02", "03", "04", "05", "06", "07"];
  return (
    <>
      <section className="about-section-two pb-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="p-3 p-sm-4 position-relative">
                <div className="position-absolute top-0 start-0 z-n1">
                  <img src={assetPath("img/shapes/shape-1.svg")} alt="" />
                </div>
                <div className="position-absolute bottom-0 end-0 z-n1">
                  <img src={assetPath("img/shapes/shape-2.svg")} alt="" />
                </div>
                <div className="position-absolute bottom-0 start-0 mb-md-5 ms-md-n5">
                  <img src={assetPath("img/icons/icon-1.svg")} alt="" />
                </div>
                <img className="img-fluid img-radius" src={assetPath("img/about/about-2.svg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="ps-0 ps-lg-2 pt-4 pt-lg-0 ps-xl-5">
                <div className="section-header">
                  <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">About</span>
                  <h2>Empowering Learning, Inspiring Growth</h2>
                  <p>
                    At DreamsLMS, we make education accessible to all with interactive courses and expert-led content.
                    Learn anytime, anywhere, and achieve your goals seamlessly.
                  </p>
                </div>
                <div className="d-flex align-items-center about-us-banner">
                  <div>
                    <span className="bg-primary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center">
                      <i className="isax isax-book-1 fs-24" />
                    </span>
                  </div>
                  <div className="ps-3">
                    <h6 className="mb-2">Learn from anywhere</h6>
                    <p>Learning from anywhere has become a transform aspect of modern education, allowing individuals.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center about-us-banner">
                  <div>
                    <span className="bg-secondary-transparent rounded-3 p-2 about-icon d-flex justify-content-center align-items-center">
                      <i className="isax isax-bookmark5 fs-24" />
                    </span>
                  </div>
                  <div className="ps-3">
                    <h6 className="mb-2">Expert Mentors</h6>
                    <p>Expert mentors are invaluable assets in any field, providing seasoned guidance knowledge.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="benefit-section">
        <div className="container">
          <div className="section-header text-center">
            <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Our Benefits</span>
            <h2>Master the Skills to Drive your Career</h2>
            <p>The right course, guided by an expert mentor, can provide invaluable insights, practical skills.</p>
          </div>
          <div className="row">
            {[
              { bg: "bg-1.png", pill: "bg-primary-transparent", icon: "isax-book-1", title: "Flexible Learning" },
              { bg: "bg-2.png", pill: "bg-secondary-transparent", icon: "isax-bookmark5", title: "Lifetime Access" },
              { bg: "bg-3.png", pill: "bg-skyblue-transparent", icon: "isax-chart-26", title: "Expert Instruction" },
            ].map((b) => (
              <div key={b.title} className="col-lg-4 col-md-6">
                <div className="card shadow-sm">
                  <div className="card-body p-4 position-relative">
                    <div className="position-absolute top-0 end-0 mt-n3 me-n4">
                      <img src={assetPath(`img/shapes/${b.bg}`)} alt="" />
                    </div>
                    <div className={`p-4 rounded-pill ${b.pill} d-inline-flex`}>
                      <i className={`isax ${b.icon} fs-24`} />
                    </div>
                    <h5 className="mt-3 mb-1">{b.title}</h5>
                    <p>We believe that high-quality education should be accessible to everyone.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="client-section">
        <div className="container">
          <h6 className="fw-medium text-center mb-4">
            Trusted by <span className="text-decoration-underline text-secondary">20+</span> Institutions Around the World
          </h6>
          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-7 g-2 justify-content-center align-items-center">
            {clients.map((n) => (
              <div key={n} className="col text-center institutions-items p-1">
                <img className="img-fluid" src={assetPath(`img/client/${n}.svg`)} alt="" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="counter-sec">
        <div className="container">
          <div className="row gy-3">
            {[
              { icon: "counter-icon1.svg", color: "text-info", val: "10", suf: "K", label: "Online Courses" },
              { icon: "counter-icon2.svg", color: "text-warning", val: "200", suf: "+", label: "Expert Tutors" },
              { icon: "counter-icon3.svg", color: "text-skyblue", val: "6", suf: "K+", label: "Certified Courses" },
              { icon: "counter-icon4.svg", color: "text-lightgreen", val: "60", suf: "K+", label: "Online Students" },
            ].map((c) => (
              <div key={c.label} className="col-xl-3 col-md-6">
                <div className="card border-0 mb-0">
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="counter-icon">
                        <img src={assetPath(`img/icons/${c.icon}`)} alt="" />
                      </div>
                      <div className="count-content">
                        <h4 className={c.color}>
                          <span className="count-digit">{c.val}</span>
                          {c.suf}
                        </h4>
                        <p>{c.label}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials-section text-center">
        <div className="container">
          <div className="section-header text-center">
            <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
              Featured Instructors
            </span>
            <h2>Top Class & Professional Instructors</h2>
            <p>Words from Those Who’ve Experienced Real Growth.</p>
          </div>
          <div className="row justify-content-center g-4 mt-2">
            {[
              { img: "img/user/user-41.jpg", name: "Brenda Slaton", role: "Designer" },
              { img: "img/user/user-42.jpg", name: "Adrian Dennis", role: "Developer" },
              { img: "img/user/user-43.jpg", name: "Adrian Coztanza", role: "Architect" },
            ].map((t) => (
              <div key={t.name} className="col-md-6 col-lg-4">
                <div className="testimonials-item rounded-3 bg-white h-100 p-4">
                  <div className="position-relative d-inline-flex mb-2">
                    <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                      <Link href="/instructor-details">
                        <img className="img-fluid rounded-circle" src={assetPath(t.img)} alt="" />
                      </Link>
                    </div>
                    <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
                  </div>
                  <h6 className="mb-1">
                    <Link href="/instructor-details">{t.name}</Link>
                  </h6>
                  <p className="fs-14 mb-3">{t.role}</p>
                  <p className="mb-3 text-truncate line-clamb-2">
                    This mentor helped me understand concepts that I had been struggling with for weeks.
                  </p>
                  <div>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <i key={i} className="fa-solid fa-star text-warning" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ContactUsBody() {
  return (
    <section className="contact-sec">
      <div className="container">
        <div className="contact-info">
          <div className="row row-gap-3">
            <div className="col-lg-4 col-md-6">
              <div className="card card-body border p-sm-4">
                <div className="d-flex align-items-center">
                  <div className="contact-icon">
                    <span className="bg-primary fs-24 rounded-3 d-flex justify-content-center align-items-center">
                      <i className="isax isax-location5 text-white" />
                    </span>
                  </div>
                  <div className="ps-3">
                    <h5 className="mb-1">Address</h5>
                    <address className="mb-0">1364 Still Water Dr, AK 99801.</address>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card card-body border p-sm-4">
                <div className="d-flex align-items-center">
                  <div className="contact-icon">
                    <span className="bg-primary fs-24 rounded-3 d-flex justify-content-center align-items-center">
                      <i className="isax isax-headphone5 text-white" />
                    </span>
                  </div>
                  <div className="ps-3">
                    <h5 className="mb-1">Phone</h5>
                    <p className="mb-0">
                      <a href="tel:+19077897623" className="text-gray-5 text-primary-hover text-decoration-underline mb-0">
                        +1 (907) 789-7623
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card card-body border p-sm-4">
                <div className="d-flex align-items-center">
                  <div className="contact-icon">
                    <span className="bg-primary fs-24 rounded-3 d-flex justify-content-center align-items-center">
                      <i className="isax isax-message5 text-white" />
                    </span>
                  </div>
                  <div className="ps-3">
                    <h5 className="mb-1">E-mail Address</h5>
                    <p className="mb-0">
                      <a href="mailto:contact@example.com" className="text-gray-5 text-primary-hover text-decoration-underline mb-0">
                        contact@example.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light border rounded-4 p-4 p-sm-5 p-md-6 mt-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact-details">
                <div className="section-header">
                  <span className="section-badge">Contact Us</span>
                  <h2>Get in touch with us today</h2>
                  <p>
                    Get in touch with us to explore how our LMS solution can enhance your e-learning experience. We are
                    here to help you build a seamless and engaging learning platform!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="card mb-0">
                <div className="card-body p-4 p-sm-5 p-md-6">
                  <h4 className="mb-3">Send Us Message</h4>
                  <form>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-4">
                          <label className="form-label">
                            Name <span className="ms-1 text-danger">*</span>
                          </label>
                          <input type="text" className="form-control form-control-lg" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-4">
                          <label className="form-label">
                            Email Address <span className="ms-1 text-danger">*</span>
                          </label>
                          <input type="email" className="form-control form-control-lg" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="mb-4">
                          <label className="form-label">Phone Number</label>
                          <input type="text" className="form-control form-control-lg" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="mb-4">
                          <label className="form-label">Subject</label>
                          <input type="text" className="form-control form-control-lg" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Your Message</label>
                      <textarea className="form-control form-control-lg" rows={4} />
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-secondary btn-lg">
                        Send Enquiry
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map rounded-4 overflow-hidden mt-4">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40686.62603646482!2d-74.03208057194338!3d40.71688115980892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1738829223631!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-100 border-0"
            style={{ minHeight: 360 }}
          />
        </div>
      </div>
    </section>
  );
}

function NotificationRow({
  avatar,
  text,
  time,
}: {
  avatar: string;
  text: React.ReactNode;
  time: string;
}) {
  return (
    <div className="notification-item mb-3">
      <div className="row row-gap-3">
        <div className="col-md-10">
          <div className="d-flex align-items-center">
            <Link href="/student-details" className="rounded-circle me-2">
              <img src={assetPath(avatar)} alt="" className="img-fluid rounded-circle" />
            </Link>
            <div>
              <div className="text-gray-5 fs-16 mb-0">{text}</div>
              <p className="text-gray-5 fs-16 mb-0">{time}</p>
            </div>
          </div>
        </div>
        <div className="col-md-2 d-flex align-items-center justify-content-end">
          <button type="button" className="btn btn-delete-hidden rounded-pill">
            <i className="isax isax-trash me-1" /> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export function NotificationsBody() {
  return (
    <div className="content">
      <div className="container">
        <div className="notification-content">
          <div className="notification-head">
            <div className="row align-items-center row-gap-3">
              <div className="col-lg-8">
                <h2 className="fs-32 fw-bold">Notifications</h2>
                <p>Improve the way your work, discover a brand new tool and drop the hassle once and for all.</p>
              </div>
              <div className="col-lg-4">
                <div className="d-flex justify-content-end flex-wrap gap-2">
                  <button type="button" className="btn mark-all-btn btn-light rounded-pill">
                    <i className="isax isax-tick-square me-2" /> Mark All as Read
                  </button>
                  <button type="button" className="btn delete-all-btn btn-secondary rounded-pill">
                    <i className="isax isax-trash me-2" />
                    Delete All
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h6 className="fs-18 fw-semibold mb-3">Today</h6>
            <NotificationRow
              avatar="img/user/user-11.jpg"
              time="05 mins ago"
              text={
                <>
                  <Link href="/student-details" className="name-highlight">
                    Thompson Hicks
                  </Link>{" "}
                  enroll a new course on Programming
                </>
              }
            />
            <NotificationRow
              avatar="img/user/user-12.jpg"
              time="10 mins ago"
              text={
                <>
                  <Link href="/student-details" className="name-highlight">
                    Jennifer Tovar
                  </Link>{" "}
                  has submitted their assignment for UI/UX Course.
                </>
              }
            />
          </div>
          <div className="mt-4">
            <h6 className="fs-18 fw-semibold mb-3">Yesterday</h6>
            <NotificationRow
              avatar="img/user/user-13.jpg"
              time="20 Dec 2024"
              text={
                <>
                  <Link href="/student-details" className="name-highlight">
                    James Schulte{" "}
                  </Link>
                  has requested feedback for their assignment in WordPress Course
                </>
              }
            />
            <NotificationRow
              avatar="img/user/user-14.jpg"
              time="05 mins ago"
              text={
                <>
                  You have a new message from{" "}
                  <Link href="/student-details" className="name-highlight">
                    William Aragon
                  </Link>{" "}
                  regarding HTML Course.
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BecomeInstructorBody() {
  return (
    <>
      <div className="share-your-knowledge">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 pe-xl-5">
              <div className="share-knowledge-content">
                <div className="section-header">
                  <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                    Share Knowledge
                  </span>
                  <h2>Share Your Knowledge. Inspire the Future.</h2>
                  <p>
                    Share your knowledge, inspire learners worldwide, and earn while doing what you love. Join a
                    community of experts transforming education through engaging and accessible content.
                  </p>
                </div>
                <div className="row">
                  {[
                    { icon: "instructor-icon1.svg", t: "Flexible Work", d: "Teach at your own pace." },
                    { icon: "instructor-icon2.svg", t: "Earning Potential", d: "Monetize your expertise." },
                    { icon: "instructor-icon3.svg", t: "Impact", d: "Reach and educate" },
                    { icon: "instructor-icon4.svg", t: "Support", d: "Access to dedicated support" },
                  ].map((x) => (
                    <div key={x.t} className="col-lg-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                              <span className="bg-secondary-transparent d-flex justify-content-center align-items-center p-3 rounded-pill">
                                <img src={assetPath(`img/icons/${x.icon}`)} alt="" />
                              </span>
                            </div>
                            <div>
                              <h6 className="mb-1">{x.t}</h6>
                              <p className="text-truncate line-clamb-1 mb-0">{x.d}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/register" className="btn register-btn-1 d-inline-flex align-items-center mt-3">
                  Register Now <i className="isax isax-arrow-right-3 ms-1" />
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="share-your-knowledge-img d-none d-lg-flex">
                <img src={assetPath("img/shapes/shape-4.png")} alt="" className="img-fluid become-instructor-bg-02" />
                <img src={assetPath("img/shapes/shape-5.png")} alt="" className="img-fluid become-instructor-bg-01" />
                <img src={assetPath("img/shapes/shape-3.png")} alt="" className="img-fluid become-instructor-bg-03" />
                <img src={assetPath("img/feature/feature-5.jpg")} alt="" className="img-fluid rounded-4 become-instructor-bg-04" />
                <img src={assetPath("img/feature/feature-6.jpg")} alt="" className="img-fluid rounded-4 become-instructor-bg-05" />
                <img src={assetPath("img/shapes/shape-7.svg")} alt="" className="img-fluid become-instructor-bg-06" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="how-it-works-sec bg-light-900">
        <div className="container">
          <div className="section-header">
            <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">Our Workflow</span>
            <h2>How It Works</h2>
            <p>Turn Your Expertise into Impact in Just 3 Simple Steps!</p>
          </div>
          <div className="row row-gap-4">
            {[
              { i: "how-it-works-1.svg", t: "Apply & Get Approved", p: "Submit your application and get approved to access the platform" },
              { i: "how-it-works-2.svg", t: "Create & Upload Content", p: "Develop and upload your courses, including videos, lessons, quizzes, and assignments." },
              { i: "how-it-works-3.svg", t: "Teach & Earn", p: "Reach learners worldwide, teach, and start earning while making an impact." },
            ].map((s) => (
              <div key={s.t} className="col-lg-4">
                <div className="share-knowledge-item-2">
                  <img src={assetPath(`img/icons/${s.i}`)} alt="" />
                  <h5 className="mt-3 mb-2">{s.t}</h5>
                  <p className="text-truncate line-clamb-2">{s.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="counter-sec">
        <div className="container">
          <div className="row row-gap-4">
            {[
              { icon: "counter-icon1.svg", color: "text-info", v: "10", s: "K", l: "Online Courses" },
              { icon: "counter-icon2.svg", color: "text-warning", v: "200", s: "+", l: "Expert Tutors" },
              { icon: "counter-icon3.svg", color: "text-skyblue", v: "6", s: "K+", l: "Certified Courses" },
              { icon: "counter-icon4.svg", color: "text-lightgreen", v: "60", s: "K+", l: "Online Students" },
            ].map((c) => (
              <div key={c.l} className="col-xl-3 col-md-6">
                <div className="become-instructor-item-3 mb-0">
                  <div className="d-flex align-items-center">
                    <div className="counter-icon">
                      <img src={assetPath(`img/icons/${c.icon}`)} alt="" />
                    </div>
                    <div className="count-content ps-1 pb-2">
                      <h4 className={c.color}>
                        <span className="count-digit">{c.v}</span>
                        {c.s}
                      </h4>
                      <p className="fw-medium text-truncate">{c.l}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="register-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="rounded-4 pe-lg-5">
                <img className="img-fluid rounded-5 d-none d-lg-flex" src={assetPath("img/feature/feature-4.jpg")} alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="register-section p-4 p-sm-5 p-md-6">
                <h5 className="mb-2">Register</h5>
                <p>Your email address will not be published. Required fields are marked *</p>
                <form>
                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <label className="form-label mb-1">
                        Name<span className="ms-1 text-danger">*</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label mb-1">
                        Email<span className="ms-1 text-danger">*</span>
                      </label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <label className="form-label mb-1">
                        Phone Number<span className="ms-1 text-danger">*</span>
                      </label>
                      <input type="tel" className="form-control" />
                    </div>
                    <div className="col-lg-12 mb-3 position-relative">
                      <label className="form-label mb-1">
                        Password<span className="ms-1 text-danger">*</span>
                      </label>
                      <div className="position-relative">
                        <input type="password" className="pass-inputs form-control" />
                        <span className="isax toggle-passwords isax-eye-slash text-gray-7 fs-14" />
                      </div>
                    </div>
                    <div className="col-lg-12 mb-4 position-relative">
                      <label className="form-label mb-1">
                        Confirm Password<span className="ms-1 text-danger">*</span>
                      </label>
                      <div className="position-relative">
                        <input type="password" className="pass-input form-control" />
                        <span className="isax toggle-password isax-eye-slash text-gray-7 fs-14" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button type="submit" className="btn btn-secondary btn-lg w-100 justify-content-center">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="become-an-instructor rounded-2 bg-primary position-relative mt-5 p-5">
            <img src={assetPath("img/shapes/instructor-bg-1.png")} alt="" className="instructor-bg-1" />
            <img src={assetPath("img/shapes/instructor-bg-2.png")} alt="" className="instructor-bg-2" />
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3 className="text-white mb-2 mblg-3">Become an Instructor</h3>
                <p className="text-light">
                  Turn your expertise into impactful courses and inspire learners worldwide. Join our community of
                  instructors and start your journey today!
                </p>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-end justify-content-center">
                <Link href="/register" className="btn btn-secondary btn-lg mt-3 mt-lg-0">
                  Start Teaching Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function StarRow() {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <i key={i} className="fa-solid fa-star text-warning fs-12" />
      ))}
    </div>
  );
}

export function TestimonialsBody() {
  const items = [
    { title: "Flexible Learning", user: "user-04.jpg", name: "Johnathan Smith", role: "Entrepreneur" },
    { title: "Design Concept", user: "user-53.jpg", name: "Emily Jackson", role: "Marketing Specialist" },
    { title: "AI Learning", user: "user-54.jpg", name: "Adriana Hrit", role: "Digital Marketing User" },
    { title: "Certification", user: "user-04.jpg", name: "Michael Chen", role: "Product Manager" },
    { title: "Mentorship", user: "user-53.jpg", name: "Sarah Lee", role: "HR Lead" },
    { title: "Community", user: "user-54.jpg", name: "David Park", role: "Engineer" },
  ];
  return (
    <div className="testimonials-sec-two mb-0 position-relative">
      <div className="container">
        <div className="row">
          {items.map((it) => (
            <div key={it.name} className="col-xl-4 col-md-6 d-flex">
              <div className="testimonial-item flex-fill">
                <div className="d-flex justify-content-between mb-1">
                  <h6>{it.title}</h6>
                  <i className="isax isax-quote-up5 fs-24 text-primary text-opacity-50" />
                </div>
                <p className="mb-3">
                  Working with this team has been a game-changer for my business. Their professionalism and attention to
                  detail helped me streamline operations and expand my reach.
                </p>
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Link href="/student-details" className="avatar avatar-lg rounded-circle">
                      <img className="img-fluid rounded-circle" src={assetPath(`img/user/${it.user}`)} alt="" />
                    </Link>
                    <div className="ms-2">
                      <Link href="/student-details">{it.name}</Link>
                      <p className="fs-12 mb-0">{it.role}</p>
                    </div>
                  </div>
                  <StarRow />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Cell({ ok }: { ok: boolean }) {
  return (
    <td className="text-center">
      <i className={`isax fs-24 ${ok ? "isax-tick-circle5 text-success" : "isax-close-circle5 text-danger"}`} />
    </td>
  );
}

export function PricingPlanBody() {
  const rows: { label: string; basic: boolean; team: boolean; pro: boolean }[] = [
    { label: "Separate business/personal", basic: true, team: true, pro: true },
    { label: "Track deductible mileage", basic: true, team: true, pro: true },
    { label: "Download online banking", basic: true, team: true, pro: true },
    { label: "Multi-device", basic: false, team: true, pro: true },
    { label: "Create invoices & estimates", basic: false, team: true, pro: true },
    { label: "Manage VAT", basic: false, team: true, pro: true },
    { label: "Manage bills & payments", basic: false, team: false, pro: true },
    { label: "Multiple currencies", basic: false, team: false, pro: true },
  ];
  return (
    <section className="pricing-plan-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mx-auto">
            <div className="text-center">
              <p className="fw-medium text-secondary mb-2">We keep it simple</p>
              <h2 className="main-title mb-2">Choose The Right Plan</h2>
              <p>Improve the way your work, discover a brand new tool and drop the hassle once and for all.</p>
              <div className="text-end">
                <img src={assetPath("img/icons/save-10.svg")} alt="" />
              </div>
              <div className="enable-item d-flex align-items-center justify-content-center text-gray-9">
                <label className="mb-0 me-2">Monthly</label>
                <div className="form-check form-switch check-on m-0">
                  <input className="form-check-input" type="checkbox" id="pricingPlanAnnual" />
                </div>
                <label className="mb-0 ms-2" htmlFor="pricingPlanAnnual">
                  Annualy
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row pricing-cover">
          {[
            { title: "Basic", price: "10", desc: "Perfect for individuals or small teams taking their first step into online." },
            { title: "Standard", price: "50", desc: "Ideal for growing institutions that need advanced tools and greater flexibility." },
            { title: "Premium", price: "100", desc: "Designed for large-scale learning with robust features and custom branding." },
          ].map((plan) => (
            <div key={plan.title} className="col-xl-3 col-md-6 px-2 d-flex">
              <div className="pricing-item flex-fill">
                <h5 className="mb-2">{plan.title}</h5>
                <h1 className="mb-2">
                  <sup className="fs-24 me-1">$</sup>
                  {plan.price}
                </h1>
                <p>{plan.desc}</p>
                <div className="border-top pt-3 mt-3">
                  <p className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-circle fs-5 me-2" />
                    10 active courses
                  </p>
                  <p className="d-flex align-items-center mb-3">
                    <i className="fa-solid fa-circle fs-5 me-2" />
                    Basic course creation tools
                  </p>
                  <Link href="/checkout" className="btn btn-start-free w-100">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
          <div className="col-xl-3 col-md-6 px-2 d-flex">
            <div className="pricing-item flex-fill">
              <h5 className="fw-bold mb-2 pb-2">Benefits</h5>
              <p className="d-flex align-items-center mb-3">
                <i className="fa-solid fa-circle fs-5 me-2" />
                Access to slack community
              </p>
              <p className="d-flex align-items-center mb-3">
                <i className="fa-solid fa-circle fs-5 me-2" />
                Access to support team
              </p>
              <h5 className="fw-bold mb-2 pb-2 mt-4">Features</h5>
              <p className="d-flex align-items-center mb-3">
                <i className="fa-solid fa-circle fs-5 me-2" />
                Search term isolation
              </p>
              <Link href="/checkout" className="btn btn-start-free w-100">
                Start For Free
              </Link>
            </div>
          </div>
        </div>

        <div className="table-responsive mt-4">
          <table className="table table-price">
            <thead>
              <tr>
                <th className="bg-transparent" />
                <th className="bg-primary-100 text-primary">Self-Employed & Freelance</th>
                <th className="bg-primary-100 text-primary" colSpan={2}>
                  Small businesses that need accounting, invoicing or payroll
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="basic">
                <td className="border-0" />
                <td className="text-center">Basic</td>
                <td className="text-center">Team</td>
                <td className="text-center">Pro</td>
              </tr>
              {rows.map((r) => (
                <tr key={r.label}>
                  <td>{r.label}</td>
                  <Cell ok={r.basic} />
                  <Cell ok={r.team} />
                  <Cell ok={r.pro} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FaqCard({ id, q, children }: { id: string; q: string; children: ReactNode }) {
  return (
    <div className="faq-card">
      <h6 className="faq-title">
        <a className="collapsed" data-bs-toggle="collapse" href={`#${id}`} aria-expanded="false">
          {q}
        </a>
      </h6>
      <div id={id} className="collapse">
        <div className="faq-detail">{children}</div>
      </div>
    </div>
  );
}

export function FaqBody() {
  const qa = [
    { id: "faqM1", q: "Is there a 14-days trial?" },
    { id: "faqM2", q: "How much time I will need to learn this app?" },
    { id: "faqM3", q: "Is there a month-to-month payment option?" },
  ];
  const qa2 = [
    { id: "faqM4", q: "What’s the benefits of the Premium Membership?" },
    { id: "faqM5", q: "Are there any free tutorials available?" },
    { id: "faqM6", q: "How do I cancel my subscription?" },
  ];
  const ans = (
    <p className="mb-0">
      No, we currently do not offer a 14-day trial. However, you can explore our platform through free demo courses or
      contact our team for a personalized walkthrough of the features.
    </p>
  );
  return (
    <div className="content">
      <div className="container">
        <h2 className="main-title mb-1">Most frequently asked questions</h2>
        <p className="mb-4">Here are the most frequently asked questions you may check before getting started</p>
        <div className="row">
          <div className="col-lg-6">
            {qa.map((x) => (
              <FaqCard key={x.id} id={x.id} q={x.q}>
                {ans}
              </FaqCard>
            ))}
          </div>
          <div className="col-lg-6">
            {qa2.map((x) => (
              <FaqCard key={x.id} id={x.id} q={x.q}>
                {ans}
              </FaqCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function TermsAndConditionsBody() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 mx-auto">
            <div className="mb-3">
              <h5 className="mb-3">Introduction</h5>
              <p className="mb-0">
                Welcome to DreamsLMS. By accessing or using our platform, you agree to comply with and be bound by the
                following terms and conditions (“Terms”). Please read them carefully before using our services.
              </p>
            </div>
            <div className="mb-3">
              <h5 className="mb-3">Acceptance of Terms</h5>
              <p className="mb-2">By accessing or using our LMS, you confirm that you have read, understood, and agreed to these Terms.</p>
              <p className="mb-0">If you do not agree to these Terms, you may not use the Website or its services.</p>
            </div>
            <div className="mb-3">
              <h5 className="mb-3">Eligibility</h5>
              <p className="mb-2">Users must be at least 18 years old or have parental/guardian consent to use the platform</p>
              <p className="mb-0">Organizations must ensure that their members comply with these Terms</p>
            </div>
            <div className="mb-3">
              <h5 className="mb-3">Account Registration</h5>
              <p className="mb-2">Users are required to register an account to access courses and other features.</p>
              <p className="mb-2">You agree to provide accurate and complete information during registration.</p>
              <p className="mb-0">You are responsible for maintaining the confidentiality of your login credentials.</p>
            </div>
            <div className="mb-3">
              <h5 className="mb-3">Payments and Subscriptions</h5>
              <p className="mb-2">Certain courses or features may require payment or a subscription.</p>
              <p className="mb-0">You are responsible for any taxes applicable to your purchase.</p>
            </div>
            <div className="mb-0">
              <h5 className="mb-3">Changes to Terms & Conditions</h5>
              <p className="mb-0">
                DreamsLMS may update these Terms & Conditions periodically. Any changes will be communicated through the
                website or via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PrivacyPolicyBody() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 mx-auto">
            <p className="mb-4">
              At DreamsLMS, we are committed to protecting your privacy. This policy outlines how we handle your
              information:
            </p>
            <div className="mb-4">
              <h6 className="mb-2">Information We Collect</h6>
              <p className="mb-1">Data, such as your name, email address, and payment details, collected during registration or purchases.</p>
              <p className="mb-0">
                Non-personal data, including device information, browser type, and usage patterns, to improve user experience.
              </p>
            </div>
            <div className="mb-4">
              <h6 className="mb-2">How We Use Your Information</h6>
              <p className="mb-1">To provide access to courses and services.</p>
              <p className="mb-1">To process payments securely.</p>
              <p className="mb-1">To deliver personalized content and updates.</p>
              <p className="mb-0">For research, analytics, and marketing (with your consent when required).</p>
            </div>
            <div className="mb-4">
              <h6 className="mb-2">Data Protection</h6>
              <p className="mb-1">We implement technical and organizational measures to safeguard your data.</p>
              <p className="mb-0">
                Your information is not sold or shared with third parties except for essential service providers (e.g.,
                payment processors) or legal obligations.
              </p>
            </div>
            <div className="mb-4">
              <h6 className="mb-2">Third-Party Links</h6>
              <p className="mb-1">Our platform may include links to external websites.</p>
              <p className="mb-0">We are not responsible for their privacy practices, and you should review their policies.</p>
            </div>
            <div className="mb-4">
              <h6 className="mb-2">Your Rights</h6>
              <p className="mb-0">Access, update, or delete your personal information by contacting us at [Insert Contact Information].</p>
            </div>
            <div className="mb-0">
              <h6 className="mb-2">Policy Updates</h6>
              <p className="mb-1">We may update this policy and notify you of significant changes through our platform or email.</p>
              <p className="mb-0">
                For any questions or concerns about this Privacy Policy, contact us at{" "}
                <a href="mailto:dreamslms@example.com">dreamslms@example.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
