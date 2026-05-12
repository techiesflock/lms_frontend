import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

function InstStat({
  icon,
  label,
  value,
  box,
}: {
  icon: string;
  label: string;
  value: string;
  box: string;
}) {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <span className={`icon-box ${box} me-2 me-xxl-3 flex-shrink-0`}>
              <img src={assetPath(icon)} alt="" />
            </span>
            <div>
              <span className="d-block">{label}</span>
              <h4 className="fs-24 mt-1">{value}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstructorDashboardHomeBody() {
  return (
    <>
      <div className="row">
        <InstStat icon="img/icon/graduation.svg" label="Enrolled Courses" value="12" box="bg-primary-transparent" />
        <InstStat icon="img/icon/book.svg" label="Active Courses" value="08" box="bg-secondary-transparent" />
        <InstStat icon="img/icon/bookmark.svg" label="Completed Courses" value="06" box="bg-success-transparent" />
        <InstStat icon="img/icon/user-octagon.svg" label="Total Students" value="17" box="bg-info-transparent" />
        <InstStat icon="img/icon/book-2.svg" label="Total Courses" value="11" box="bg-blue-transparent" />
        <InstStat icon="img/icon/money-add.svg" label="Total Earnings" value="$486" box="bg-purple-transparent" />
      </div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between border-bottom mb-2 pb-3">
            <h5 className="fw-bold">Earnings by Year</h5>
            <div className="input-icon position-relative input-range-picker">
              <span className="input-icon-addon">
                <i className="isax isax-calendar" />
              </span>
              <input type="text" className="form-control date-range bookingrange" placeholder="dd/mm/yyyy - dd/mm/yyyy" />
            </div>
          </div>
          <div id="earnnings_chart" className="py-5 text-center text-muted">
            Chart placeholder
          </div>
        </div>
      </div>
      <h5 className="mb-3 fw-bold">Recently Created Courses</h5>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Courses</th>
              <th>Enrolled</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { img: "img/instructor/instructor-table-01.jpg", title: "Complete HTML, CSS and Javascript Course", en: "0" },
              { img: "img/instructor/instructor-table-02.jpg", title: "Complete Course on Fullstack Web Developer", en: "2" },
              { img: "img/instructor/instructor-table-03.jpg", title: "Data Science Fundamentals and Advanced Bootcamp", en: "2" },
            ].map((r) => (
              <tr key={r.title}>
                <td>
                  <div className="course-title d-flex align-items-center">
                    <Link href="/course-details" className="avatar avatar-xl flex-shrink-0 me-2">
                      <img src={assetPath(r.img)} alt="" />
                    </Link>
                    <div>
                      <p className="fw-medium">
                        <Link href="/course-details">{r.title}</Link>
                      </p>
                    </div>
                  </div>
                </td>
                <td>{r.en}</td>
                <td>Published</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function InstructorProfileBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">My Profile</h5>
      <div className="card">
        <div className="card-body">
          <h6 className="mb-3">About</h6>
          <p>
            Instructor profile content mirrors the template: bio, experience, and teaching focus. Update this section
            with live user data when you connect authentication.
          </p>
        </div>
      </div>
    </>
  );
}

export function InstructorCourseBody() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-4">
        <h5 className="fw-bold mb-0">Courses</h5>
        <Link href="/add-course" className="btn btn-primary rounded-pill btn-sm">
          Add Course
        </Link>
      </div>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Courses</th>
              <th>Enrolled</th>
              <th>Status</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                img: "img/instructor/instructor-table-01.jpg",
                title: "Complete HTML, CSS and Javascript Course",
                en: "0",
                status: "Draft",
              },
              {
                img: "img/instructor/instructor-table-04.jpg",
                title: "Build Responsive Real World Websites",
                en: "12",
                status: "Published",
              },
              {
                img: "img/instructor/instructor-table-02.jpg",
                title: "React UI Components Masterclass",
                en: "4",
                status: "Pending Review",
              },
              {
                img: "img/instructor/instructor-table-03.jpg",
                title: "Design Systems for Teams",
                en: "0",
                status: "Rejected",
              },
            ].map((r) => (
              <tr key={r.title}>
                <td>
                  <div className="course-title d-flex align-items-center">
                    <Link href="/course-details" className="avatar avatar-xl flex-shrink-0 me-2">
                      <img src={assetPath(r.img)} alt="" />
                    </Link>
                    <p className="fw-medium mb-0">
                      <Link href="/course-details">{r.title}</Link>
                    </p>
                  </div>
                </td>
                <td>{r.en}</td>
                <td>
                  <span className={courseStatusClass(r.status)}>{r.status}</span>
                </td>
                <td>
                  <div className="d-flex justify-content-end gap-2">
                    <Link href="/instructor-course-edit" className="btn btn-sm btn-outline-secondary rounded-pill">
                      Edit
                    </Link>
                    <Link href="/course-details" className="btn btn-sm btn-primary rounded-pill">
                      Preview
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

function courseStatusClass(status: string) {
  if (status === "Published") return "badge bg-success-transparent text-success";
  if (status === "Pending Review") return "badge bg-warning-transparent text-warning";
  if (status === "Rejected") return "badge bg-danger-transparent text-danger";
  return "badge bg-light text-gray-9";
}

export function InstructorAnnouncementsBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Announcements</h5>
      <div className="card mb-3">
        <div className="card-body">
          <h6 className="mb-2">Holiday schedule</h6>
          <p className="text-muted fs-14 mb-0">Posted 01 May 2026</p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h6 className="mb-2">New assignment rubric</h6>
          <p className="text-muted fs-14 mb-0">Posted 22 Apr 2026</p>
        </div>
      </div>
    </>
  );
}

export function InstructorAssignmentBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Assignments</h5>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Course</th>
              <th>Due</th>
              <th>Submissions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wireframe homepage</td>
              <td>UX Fundamentals</td>
              <td>18 May 2026</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

const STUDENT_GRID = [
  { img: "img/students/student-01.jpg", name: "Ronald Richard", loc: "Newyork", date: "22 Aug 2025", courses: "10" },
  { img: "img/students/student-02.jpg", name: "Mona Nancy", loc: "Los Angels", date: "15 Jul 2025", courses: "08" },
  { img: "img/students/student-03.jpg", name: "Patrick Alleman", loc: "Alabama", date: "18 Jun 2025", courses: "12" },
];

export function StudentsGridBody() {
  return (
    <>
      <div className="page-title d-flex align-items-center justify-content-between">
        <h5 className="fw-bold">Students</h5>
        <div className="d-flex align-items-center list-icons">
          <Link href="/student-list" className="me-2">
            <i className="isax isax-task" />
          </Link>
          <Link href="/students" className="active">
            <i className="isax isax-element-3" />
          </Link>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-md-4">
          <div className="input-icon mb-3">
            <span className="input-icon-addon">
              <i className="isax isax-search-normal-14" />
            </span>
            <input type="search" className="form-control form-control-md" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="row">
        {STUDENT_GRID.map((s) => (
          <div key={s.name} className="col-xl-4 col-md-6">
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <Link href="/student-details">
                    <img src={assetPath(s.img)} className="rounded-3 img-fluid" alt="" />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between border-bottom mb-3 pb-3">
                  <div>
                    <h5 className="mb-2 fw-bold">
                      <Link href="/student-details">{s.name}</Link>
                    </h5>
                    <span className="text-info d-inline-flex align-items-center">
                      <i className="isax isax-location me-1" />
                      <span className="text-info text-decoration-underline stu-loc">{s.loc}</span>
                    </span>
                  </div>
                  <Link href="#" className="avatar avatar-md avatar-rounded border" aria-label="Message">
                    <i className="isax isax-messages text-gray-9 fs-14" />
                  </Link>
                </div>
                <div className="d-flex align-items-center justify-content-between fs-14">
                  <span className="d-inline-flex align-items-center">
                    <i className="isax isax-calendar-add5 text-primary me-1" />
                    {s.date}
                  </span>
                  <span className="d-inline-flex align-items-center">
                    <i className="isax isax-teacher5 text-secondary me-1" />
                    {s.courses} Courses
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function StudentListBody() {
  return (
    <>
      <div className="page-title d-flex align-items-center justify-content-between">
        <h5 className="fw-bold">Students</h5>
        <div className="d-flex align-items-center list-icons">
          <Link href="/student-list" className="active me-2">
            <i className="isax isax-task" />
          </Link>
          <Link href="/students">
            <i className="isax isax-element-3" />
          </Link>
        </div>
      </div>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Enrolled</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {STUDENT_GRID.map((s) => (
              <tr key={s.name}>
                <td>
                  <div className="d-flex align-items-center">
                    <img src={assetPath(s.img)} alt="" className="img-fluid rounded-circle me-2" width={40} height={40} />
                    {s.name}
                  </div>
                </td>
                <td>student@example.com</td>
                <td>{s.courses}</td>
                <td>
                  <Link href="/student-details" className="btn btn-sm btn-primary rounded-pill">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function InstructorStudentDetailBody() {
  return (
    <div className="row">
      <div className="col-lg-8">
        <div className="instructor-details-item1 mb-4">
          <div className="instructor-details">
            <div className="instructor-img">
              <Link href="#">
                <img src={assetPath("img/students/student-01.jpg")} alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="flex-fill">
              <div className="pb-3 border-bottom mb-3">
                <h6 className="fs-18 fw-bold mb-1">Thompson Hicks</h6>
                <p className="mb-1">Joined on : 24 May 2024</p>
                <p>
                  Hello! I&apos;m Thompson Hicks. I&apos;m passionate about developing innovative software solutions,
                  analyzing classic literature.
                </p>
              </div>
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="d-flex align-items-center counts-details mb-0">
                  <span className="d-flex align-items-center me-4">
                    <i className="isax isax-book5 text-primary me-1" />
                    10 Courses
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-me-card bg-white mb-4">
          <div className="about-me-body">
            <h6 className="page-title fs-18 fw-bold">About Me</h6>
            <p className="mb-2">
              Very well thought out and articulate communication. Clear milestones, deadlines and fast work.
            </p>
            <Link href="#" className="text-secondary text-decoration-underline fs-14">
              Read More
            </Link>
          </div>
        </div>
        <div className="education-card mb-4">
          <div className="education-body">
            <h6 className="fs-18 fw-bold page-title">Education</h6>
            <div className="education-flow">
              <div className="ps-4 pb-3 timeline-flow">
                <h6 className="fs-16 mb-1">BCA - Bachelor of Computer Applications</h6>
                <p>International University - (2004 - 2010)</p>
              </div>
              <div className="ps-4 timeline-flow">
                <h6 className="mb-1">MCA - Master of Computer Application</h6>
                <p>International University - (2010 - 2012)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="course-item-two course-item">
              <div className="course-img">
                <Link href="/course-details">
                  <img src={assetPath("img/course/course-01.jpg")} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="course-content">
                <h6 className="title mb-2">
                  <Link href="/course-details">Information About UI/UX Design Degree</Link>
                </h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="text-secondary mb-0">$120</h5>
                  <Link href="/course-details" className="btn btn-dark btn-sm d-inline-flex align-items-center">
                    View Course<i className="isax isax-arrow-right-3 ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="course-item-two course-item">
              <div className="course-img">
                <Link href="/course-details">
                  <img src={assetPath("img/course/course-02.jpg")} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="course-content">
                <h6 className="title mb-2">
                  <Link href="/course-details">Wordpress for Beginners</Link>
                </h6>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="text-secondary mb-0">$140</h5>
                  <Link href="/course-details" className="btn btn-dark btn-sm d-inline-flex align-items-center">
                    View Course<i className="isax isax-arrow-right-3 ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="certification-card mb-4">
          <div className="certification-body">
            <h5 className="mb-3 fw-bold">Certifications</h5>
            <div className="d-flex align-items-center flex-wrap gap-2">
              {["certificate-01.svg", "certificate-02.svg", "certificate-03.svg"].map((f) => (
                <div key={f} className="certificate-img rounded-circle">
                  <img src={assetPath(`img/certificates/${f}`)} alt="" className="img-fluid" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="contact-card border-0 mb-0">
          <div className="contact-details-body">
            <h5 className="mb-3 fw-bold">Contact Details</h5>
            <div className="d-flex align-items-center mb-4">
              <span className="contact-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3">
                <i className="fa-regular fa-envelope" />
              </span>
              <div>
                <h6 className="mb-0">Email</h6>
                <p className="fs-14 mb-0">jennywilson@example.com</p>
              </div>
            </div>
            <div className="d-flex align-items-center mb-4">
              <span className="contact-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3">
                <i className="isax isax-location" />
              </span>
              <div>
                <h6 className="mb-0">Address</h6>
                <p className="fs-14 mb-0 text-truncate">877 Ferry Street, Huntsville, Alabama</p>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <span className="contact-icon flex-shrink-0 rounded-circle d-flex align-items-center justify-content-center me-3">
                <i className="isax isax-call" />
              </span>
              <div>
                <h6 className="mb-0">Phone</h6>
                <p className="fs-14 mb-0">+1(452) 125-6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstructorQuizBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Quiz</h5>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Quiz</th>
              <th>Course</th>
              <th>Questions</th>
              <th>Attempts</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Module 1 Check</td>
              <td>Web Development</td>
              <td>22</td>
              <td>54</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export function InstructorQuizResultsBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Quiz Results</h5>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Student</th>
              <th>Quiz</th>
              <th>Score</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ronald Richard</td>
              <td>HTML Basics</td>
              <td>18/20</td>
              <td>12 May 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export function InstructorCertificateBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Certificates</h5>
      <div className="row">
        {[1, 2, 3].map((i) => (
          <div key={i} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <img src={assetPath("img/certificates/certificate-01.svg")} alt="" className="img-fluid mb-3" />
                <h6>Certificate #{i}</h6>
                <Link href="#" className="btn btn-sm btn-outline-primary rounded-pill">
                  Download
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function InstructorEarningsBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Earnings</h5>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <span className="text-muted">This month</span>
              <h4 className="mb-0">$1,240</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <span className="text-muted">Lifetime</span>
              <h4 className="mb-0">$48,600</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body text-muted text-center py-5">Earnings chart placeholder</div>
      </div>
    </>
  );
}

export function InstructorPayoutBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Payout</h5>
      <div className="card">
        <div className="card-body">
          <p className="mb-3">Request a payout to your linked bank account.</p>
          <button type="button" className="btn btn-primary rounded-pill">
            Request payout
          </button>
        </div>
      </div>
    </>
  );
}

export function InstructorStatementsBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Statements</h5>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Period</th>
              <th>Orders</th>
              <th>Total</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>April 2026</td>
              <td>18</td>
              <td>$3,420</td>
              <td>
                <Link href="#" className="btn btn-sm btn-light border rounded-pill">
                  PDF
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export function InstructorTicketsBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Support Tickets</h5>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Subject</th>
              <th>Priority</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#IN-204</td>
              <td>Payout delay</td>
              <td>High</td>
              <td>
                <span className="badge bg-info-transparent text-info">In progress</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export function InstructorSettingsBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Settings</h5>
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="mb-3">
              <label className="form-label">Display name</label>
              <input type="text" className="form-control" defaultValue="Eugene Andre" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" defaultValue="instructor@example.com" />
            </div>
            <button type="submit" className="btn btn-primary rounded-pill">
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
