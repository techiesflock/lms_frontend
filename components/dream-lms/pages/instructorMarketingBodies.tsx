import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { InstructorFilterSidebar } from "./InstructorFilterSidebar";

const GRID_INSTRUCTORS = [
  { img: "img/user/user-61.jpg", name: "Rolands Granger", role: "Developer", lessons: "12+", time: "169hr 20min" },
  { img: "img/user/user-62.jpg", name: "Lisa Lopezr", role: "Finance", lessons: "22+", time: "15hr 06min" },
  { img: "img/user/user-63.jpg", name: "Charles Ruizr", role: "Cloud Engineer", lessons: "18+", time: "42hr 10min" },
  { img: "img/user/user-61.jpg", name: "Maria Davis", role: "Designer", lessons: "9+", time: "88hr 00min" },
  { img: "img/user/user-62.jpg", name: "James Wilson", role: "Marketing", lessons: "30+", time: "12hr 30min" },
  { img: "img/user/user-63.jpg", name: "Emily Carter", role: "Data Science", lessons: "14+", time: "56hr 45min" },
];

function InstructorGridCard({
  img,
  name,
  role,
  lessons,
  time,
}: (typeof GRID_INSTRUCTORS)[number]) {
  return (
    <div className="col-xl-4 col-md-6 d-flex">
      <div className="instructor-item instructor-item-six flex-fill">
        <div className="instructors-img ">
          <Link href="/instructor-details" tabIndex={0}>
            <img className="img-fluid" src={assetPath(img)} alt="" />
          </Link>
          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
            <span className="verify">
              <img src={assetPath("img/icons/verify-icon.svg")} alt="" className="img-fluid" />
            </span>
            <a href="#" className="favourite ms-auto" tabIndex={0}>
              <i className="isax isax-heart" />
            </a>
          </div>
        </div>
        <div className="instructor-content">
          <div>
            <p className="rating mb-2">
              <i className="fas fa-star me-1" />
              4.9 (200 Reviews)
            </p>
            <h3 className="title mb-2">
              <Link href="/instructor-details">{name}</Link>
            </h3>
            <span className="designation">{role}</span>
          </div>
          <div className="d-flex justify-content-between align-items-center instructor-bottom">
            <div className="d-flex align-items-center">
              <span className="d-flex align-items-center">
                <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                {lessons} Lesson
              </span>
            </div>
            <div className="d-flex align-items-center">
              <span className="d-flex align-items-center">
                <i className="isax isax-timer-start5 fs-16 text-primary me-2" />
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstructorGridPageBody() {
  return (
    <section className="course-content">
      <div className="container">
        <div className="row align-items-baseline">
          <InstructorFilterSidebar idPrefix="igrid" />
          <div className="col-lg-9">
            <div className="showing-list mb-4">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="show-result text-center text-lg-start">
                    <h6 className="fw-medium">Showing 1-9 of 50 results</h6>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="show-filter add-course-info">
                    <form action="#">
                      <div className="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">
                        <div className="view-icons mb-2 mb-sm-0">
                          <Link href="/instructor-grid" className="grid-view active">
                            <i className="feather-grid" />
                          </Link>
                          <Link href="/instructor-list" className="list-view">
                            <i className="isax isax-task" />
                          </Link>
                        </div>
                        <select className="form-select" defaultValue="Newly Published">
                          <option>Newly Published</option>
                          <option>Trending Courses</option>
                          <option>Top Rated</option>
                          <option>Free Courses</option>
                        </select>
                        <div className=" search-group">
                          <i className="feather-search" />
                          <input type="text" className="form-control" placeholder="Search" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row course-list-cover">{GRID_INSTRUCTORS.map((i) => <InstructorGridCard key={i.name} {...i} />)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LIST_INSTRUCTORS = [
  { img: "img/user/user-61.jpg", name: "Rolands Granger", role: "Developer", heart: "default" as const },
  { img: "img/user/user-62.jpg", name: "Lisa Lopezr", role: "Finance", heart: "selected" as const },
  { img: "img/user/user-63.jpg", name: "Charles Ruizr", role: "Cloud Engineer", heart: "selected" as const },
];

export function InstructorListPageBody() {
  return (
    <section className="course-content">
      <div className="container">
        <div className="row align-items-baseline">
          <InstructorFilterSidebar idPrefix="ilist" />
          <div className="col-lg-9">
            <div className="showing-list mb-4">
              <div className="row align-items-center">
                <div className="col-lg-4">
                  <div className="show-result text-center text-lg-start">
                    <h6 className="fw-medium">Showing 1-9 of 50 results</h6>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="show-filter add-course-info">
                    <form action="#">
                      <div className="d-sm-flex justify-content-center justify-content-lg-end mb-1 mb-lg-0">
                        <div className="view-icons mb-2 mb-sm-0">
                          <Link href="/instructor-grid" className="grid-view">
                            <i className="feather-grid" />
                          </Link>
                          <Link href="/instructor-list" className="list-view active">
                            <i className="isax isax-task" />
                          </Link>
                        </div>
                        <select className="form-select" defaultValue="Newly Published ">
                          <option>Newly Published </option>
                          <option>Trending Courses</option>
                          <option>Top Rated</option>
                          <option>Free Courses</option>
                        </select>
                        <div className=" search-group">
                          <i className="isax isax-search-normal-1" />
                          <input type="text" className="form-control" placeholder="Search" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {LIST_INSTRUCTORS.map((ins) => (
              <div key={ins.name} className="instructor-item instructor-item-seven">
                <div className="instructor-img">
                  <Link href="/instructor-details">
                    <img src={assetPath(ins.img)} alt="" className="img-fluid" />
                  </Link>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <a className={`favourite${ins.heart === "selected" ? " selected" : ""}`} href="#">
                      <i className="isax isax-heart color-active" />
                    </a>
                  </div>
                </div>
                <div className="instructor-content flex-fill">
                  <div className="pb-3 border-bottom mb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-1 mb-1">
                      <div>
                        <h6 className="title">
                          <Link href="/instructor-details">{ins.name}</Link>
                        </h6>
                        <span className="designation">{ins.role}</span>
                      </div>
                      <div>
                        <p className="rating">
                          <i className="fas fa-star me-1" />
                          4.9 (200 Reviews)
                        </p>
                      </div>
                    </div>
                    <p>
                      I am a web developer with a vast array of knowledge in many different front end and back end
                      languages, responsive frameworks, databases, and best code practices.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                    <div className="d-flex align-items-center flex-wrap gap-y-2 fs-14 counts-details">
                      <span className="d-flex align-items-center me-4">
                        <span className="d-flex align-items-center">
                          <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                        </span>
                        12+ Lesson
                      </span>
                      <span className="d-flex align-items-center me-4">
                        <span className="d-flex align-items-center">
                          <i className="isax isax-timer-start5 fs-16 text-primary me-2" />
                        </span>
                        169hr 20min
                      </span>
                      <span className="d-flex align-items-center">
                        <span className="d-flex align-items-center">
                          <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                        </span>
                        50 Students
                      </span>
                    </div>
                    <div className="d-flex align-items-center flex-wrap gap-1">
                      <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">Web Design</div>
                      <div className="badge bg-gray-100 text-dark badge-md fs-10 fw-medium rounded">Development</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseMini({
  courseImg,
  avatar,
  instructor,
  tag,
  title,
  price,
}: {
  courseImg: string;
  avatar: string;
  instructor: string;
  tag: string;
  title: string;
  price: string;
}) {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="course-item course-item-three mb-0">
        <div className="course-carousal-img position-relative overflow-hidden rounded-3 mb-3">
          <Link href="/course-details">
            <img className="img-fluid rounded-3" src={assetPath(courseImg)} alt="" />
          </Link>
          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
            <a className="like" href="#">
              <i className="isax isax-heart color-active" />
            </a>
          </div>
        </div>
        <div className="d-flex flex-wrap align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <div className="avatar avatar-sm rounded-circle">
              <img className="img-fluid rounded-circle object-fit-cover" src={assetPath(avatar)} alt="" />
            </div>
            <p className="ms-2 mb-0">
              <Link href="/instructor-details">{instructor}</Link>
            </p>
          </div>
          <span className="tag-btn">{tag}</span>
        </div>
        <h5 className="mt-3 mb-2 text-truncate line-clamb-2">
          <Link href="/course-details">{title}</Link>
        </h5>
        <div className="d-flex align-items-center">
          <i className="ti ti-star-filled text-warning" />
          <p className="ms-2 mb-0">4.4 (160 Reviews)</p>
        </div>
        <div className="d-flex justify-content-between mt-3 align-items-center">
          <h6 className="fs-16 text-secondary mb-0">{price}</h6>
          <Link href="/course-grid" className="btn view-course-btn">
            View Course<i className="fs-8 fas fa-angle-right ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export function InstructorDetailsPageBody() {
  return (
    <div className="instructor-detail-content">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="card bg-light mb-4">
              <div className="card-body instructor-details">
                <div className="instructor-img">
                  <a href="#">
                    <img src={assetPath("img/user/user-61.jpg")} alt="" className="img-fluid" />
                  </a>
                  <a href="#" className="btn heart">
                    <i className="isax isax-heart5 text-danger" />
                  </a>
                </div>
                <div className="flex-fill">
                  <div className="pb-3 border-bottom mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-1">
                      <h6 className="fw-bold mb-0">
                        <a href="#">Rolands Granger</a>
                      </h6>
                    </div>
                    <div className="d-flex align-items-center mb-1">
                      <a href="#" className="fs-14 me-2">
                        Developer
                      </a>
                      <span className="me-2">
                        <i className="fa-solid fa-star text-warning" />
                      </span>
                      <span className="fs-14">4.9 (200 Reviews)</span>
                    </div>
                    <div>
                      <p className="mb-0">
                        I am a web developer with a vast array of knowledge in many different front end and back end
                        languages, responsive frameworks, databases, and best code practices.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between flex-wrap">
                    <div className="d-flex align-items-center counts-details">
                      <span className="d-flex align-items-center me-4">
                        <span className="d-flex align-items-center">
                          <i className="isax isax-book-saved5 fs-16 text-secondary me-2" />
                        </span>
                        12+ Lesson
                      </span>
                      <span className="d-flex align-items-center">
                        <span className="d-flex align-items-center">
                          <i className="isax isax-profile-2user5 fs-16 text-secondary me-2" />
                        </span>
                        50 Students
                      </span>
                    </div>
                    <div className="d-flex align-items-center">
                      <span>
                        <a
                          href="#"
                          className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                        >
                          <i className="fa-brands fa-facebook-f" />
                        </a>
                      </span>
                      <span>
                        <a
                          href="#"
                          className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                        >
                          <i className="fa-brands fa-instagram" />
                        </a>
                      </span>
                      <span>
                        <a
                          href="#"
                          className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                        >
                          <i className="fa-brands fa-x-twitter" />
                        </a>
                      </span>
                      <span>
                        <a
                          href="#"
                          className="rounded-circle d-inline-flex align-items-center justify-content-center me-2"
                        >
                          <i className="fa-brands fa-youtube" />
                        </a>
                      </span>
                      <span>
                        <a href="#" className="rounded-circle d-inline-flex align-items-center justify-content-center">
                          <i className="fa-brands fa-linkedin-in" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="mb-3">About Me</h5>
                <p className="mb-3">
                  Very well thought out and articulate communication. Clear milestones, deadlines and fast work.
                  Patience. Infinite patience. No shortcuts.
                </p>
                <a href="#" className="read-more-btn">
                  Read More
                </a>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="mb-3">Education</h5>
                <div className="education-flow">
                  <div className="ps-4 pb-4 timeline-flow">
                    <div>
                      <h6 className="mb-1">BCA - Bachelor of Computer Applications</h6>
                      <p className="fs-14">International University - (2004 - 2010)</p>
                    </div>
                  </div>
                  <div className="ps-4 timeline-flow">
                    <div>
                      <h6 className="mb-1">MCA - Master of Computer Application</h6>
                      <p className="fs-14">International University - (2010 - 2012)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card border-0">
              <div className="card-body p-0">
                <h5 className="mb-3">Courses</h5>
                <div className="row g-3">
                  <CourseMini
                    courseImg="img/course/course-02.jpg"
                    avatar="img/avatar/avatar2.jpg"
                    instructor="Ana Reyes"
                    tag="Wordpress"
                    title="Wordpress for Beginners - Master Wordpress Quickly"
                    price="$140"
                  />
                  <CourseMini
                    courseImg="img/course/course-03.jpg"
                    avatar="img/avatar/avatar3.jpg"
                    instructor="Andrew Pirtle"
                    tag="Angular"
                    title="Learn Angular Fundamentals From beginning to advance lavel"
                    price="$200"
                  />
                  <CourseMini
                    courseImg="img/course/course-04.jpg"
                    avatar="img/avatar/avatar4.jpg"
                    instructor="Christy"
                    tag="Programming"
                    title="Build Responsive Real World Websites with Crash Course"
                    price="$200"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3">Certifications</h5>
                <div className="d-flex align-items-center">
                  {["certificate-01.svg", "certificate-02.svg", "certificate-03.svg", "certificate-01.svg"].map((c, i) => (
                    <div key={`${c}-${i}`} className="certificate-img rounded-circle me-2">
                      <img src={assetPath(`img/certificates/${c}`)} alt="" className="img-fluid" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="mb-3">Contact Details</h5>
                <div className="d-flex align-items-center mb-4">
                  <span className="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                    <i className="fa-regular fa-envelope" />
                  </span>
                  <div>
                    <h6 className="mb-0">Email</h6>
                    <p className="mb-0">jennywilson@example.com</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <span className="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                    <i className="isax isax-location" />
                  </span>
                  <div>
                    <h6 className="fs-16 fw-medium text-gray-9 mb-0">Address</h6>
                    <p className="mb-0 text-truncate">877 Ferry Street, Huntsville, Alabama</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <span className="contact-icon rounded-circle d-flex align-items-center justify-content-center me-3">
                    <i className="isax isax-call" />
                  </span>
                  <div>
                    <h6 className="fs-16 fw-medium text-gray-9 mb-0">Phone</h6>
                    <p className="mb-0">+1(452) 125-6789</p>
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
