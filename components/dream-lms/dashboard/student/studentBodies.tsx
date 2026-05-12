import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const COURSE_WISHLIST = [
  { img: "img/course/course-01.jpg", title: "Information About UI/UX Design Degree", price: "$120" },
  { img: "img/course/course-04.jpg", title: "Build Responsive Real World Websites", price: "$200" },
  { img: "img/course/course-07.jpg", title: "Learn ReactJS Tech Fundamentals", price: "$147" },
];

function StatCard({
  icon,
  label,
  value,
  boxClass,
}: {
  icon: string;
  label: string;
  value: string;
  boxClass: string;
}) {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <span className={`icon-box ${boxClass} me-2 me-xxl-3 flex-shrink-0`}>
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

function StudentEmptyState({
  icon,
  title,
  description,
  actionHref,
  actionLabel,
}: {
  icon: string;
  title: string;
  description: string;
  actionHref: string;
  actionLabel: string;
}) {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body p-4 p-lg-5 text-center">
        <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light mb-3 p-4">
          <i className={`${icon} fs-1 text-secondary`} />
        </span>
        <h5 className="mb-2">{title}</h5>
        <p className="text-muted mb-4">{description}</p>
        <Link href={actionHref} className="btn btn-secondary rounded-pill">
          {actionLabel}
        </Link>
      </div>
    </div>
  );
}

function StudentSkeletonPreview() {
  return (
    <div className="card border-0 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center gap-3 mb-4">
          <span className="placeholder rounded-circle col-2" style={{ width: 52, height: 52 }} />
          <div className="flex-grow-1">
            <span className="placeholder col-7 mb-2" />
            <span className="placeholder col-5" />
          </div>
        </div>
        <span className="placeholder col-12 mb-2" />
        <span className="placeholder col-10 mb-2" />
        <span className="placeholder col-8" />
      </div>
    </div>
  );
}

export function StudentDashboardHomeBody() {
  return (
    <>
      <div className="card bg-light quiz-ans-card">
        <img src={assetPath("img/shapes/withdraw-bg1.svg")} className="quiz-ans-bg1" alt="" />
        <img src={assetPath("img/shapes/withdraw-bg2.svg")} className="quiz-ans-bg2" alt="" />
        <div className="card-body">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h6 className="mb-1">Quiz : Build Responsive Real World </h6>
              <p>Answered : 15/22</p>
            </div>
            <div className="col-md-4">
              <div className="text-end">
                <Link href="/student-quiz" className="btn btn-primary rounded-pill">
                  Continue Quiz
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <StatCard icon="img/icon/graduation.svg" label="Enrolled Courses" value="12" boxClass="bg-primary-transparent" />
        <StatCard icon="img/icon/book.svg" label="Active Courses" value="03" boxClass="bg-secondary-transparent" />
        <StatCard icon="img/icon/bookmark.svg" label="Completed Courses" value="10" boxClass="bg-success-transparent" />
      </div>
      <div className="row mb-4">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <StudentEmptyState
            icon="isax isax-book"
            title="No courses enrolled yet"
            description="Static empty dashboard state for a new learner before their first enrollment."
            actionHref="/course-grid"
            actionLabel="Browse courses"
          />
        </div>
        <div className="col-lg-5">
          <StudentSkeletonPreview />
        </div>
      </div>
      <div>
        <h5 className="fs-18">AI Learning Insights</h5>
        <p className="fs-16">Personalized recommendations based on your progress</p>
        <div className="row justify-content-center">
          <div className="col-md-6 col-xl-4 mb-4">
            <div className="learning-item card-purple h-100">
              <div className="learning-header">
                <div className="learning-icon">
                  <i className="isax isax-book-saved" />
                </div>
                <span className="badge">On track</span>
              </div>
              <h3 className="text-white fs-18 mb-1">Full Stack Developer Path</h3>
              <p className="text-white fs-14">You are closer to Full Stack Developer</p>
              <div>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <p className="mb-0 text-white fs-16">Progress</p>
                  <p className="mb-0 text-white fs-14">70%</p>
                </div>
                <div className="progress progress-xs flex-grow-1">
                  <div className="progress-bar bg-white rounded" style={{ width: "70%" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-4">
            <div className="learning-item card-magenta h-100">
              <div className="learning-header">
                <div className="learning-icon">
                  <i className="isax isax-trend-up" />
                </div>
                <span className="badge">React Masterclass</span>
              </div>
              <h3 className="text-white fs-18 mb-1">Next Up for You</h3>
              <p className="text-white fs-14">Continue your React journey</p>
              <Link href="/course-details" className="btn btn-white d-inline-flex align-items-center justify-content-center rounded-pill me-2">
                View Course <i className="isax isax-arrow-right-3" />
              </Link>
            </div>
          </div>
          <div className="col-md-6 col-xl-4 mb-4">
            <div className="learning-item card-blue h-100">
              <div className="learning-header">
                <div className="learning-icon">
                  <i className="isax isax-message-question" />
                </div>
                <span className="badge">Based on Web progress</span>
              </div>
              <h3 className="text-white fs-18 mb-1">Recommended for You</h3>
              <p className="text-white fs-14">Node.js API Development</p>
              <Link href="/course-details" className="btn btn-white d-inline-flex align-items-center justify-content-center rounded-pill me-2">
                View Course <i className="isax isax-arrow-right-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-body">
              <h5 className="mb-3 border-bottom pb-3 fs-18">Recent Invoices</h5>
              {[
                { title: "Build Responsive Real World Websites..", id: "#INV001", amt: "$200" },
                { title: "Wordpress for Beginners", id: "#INV002", amt: "$310" },
                { title: "Information About UI/UX Design Degree", id: "#INV003", amt: "$270" },
              ].map((inv) => (
                <div
                  key={inv.id}
                  className="d-flex align-items-center justify-content-between flex-wrap row-gap-2 mb-3"
                >
                  <div>
                    <h6 className="mb-1">{inv.title}</h6>
                    <div className="d-flex align-items-center gap-2">
                      <p className="mb-0">{inv.id}</p>
                      <i className="fa-solid fa-circle dot-icon" />
                      <p className="mb-0">
                        Amount : <span className="heading-color text-info">{inv.amt}</span>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <span className="badge fw-normal bg-success d-inline-flex align-items-center me-1">
                      <i className="fa-solid fa-circle fs-5 me-1" />
                      Paid
                    </span>
                    <Link href="#" className="action-icon" aria-label="Download invoice">
                      <i className="isax isax-document-download" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="card">
            <div className="card-body">
              <h5 className="mb-3 fs-18 border-bottom pb-3">Latest Quizes</h5>
              {[
                { score: "15/22", date: "15 Jan 2026", pct: "95%" },
                { score: "18/22", date: "04 Jan 2026", pct: "100%" },
                { score: "25/30", date: "26 Dec 2026", pct: "80%" },
              ].map((q) => (
                <div
                  key={q.date}
                  className="d-flex align-items-center flex-wrap flex-md-nowrap justify-content-between row-gap-2 mb-3"
                >
                  <div>
                    <h6 className="mb-1">Sketch from A to Z (2024)</h6>
                    <div className="d-flex align-items-center gap-2 flex-wrap">
                      <p className="mb-0">Correct Answer : {q.score}</p>
                      <i className="fa-solid fa-circle dot-icon" />
                      <p className="mb-0">Date : {q.date}</p>
                    </div>
                  </div>
                  <div className="rounded-circle border border-success px-3 py-2 flex-shrink-0">{q.pct}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function StudentProfileBody() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <h5 className="fw-bold">My Profile</h5>
        <Link href="#" className="edit-profile-icon" aria-label="Edit">
          <i className="isax isax-edit-2" />
        </Link>
      </div>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="mb-3 fs-18">Basic Details</h5>
          <div className="row g-3">
            {[
              ["First Name", "Ronald"],
              ["Last Name", "Richard"],
              ["Registration Date", "16 Jan 2024, 11:15 AM"],
              ["User Name", "studentdemo"],
              ["Phone Number", "90154-91036"],
              ["Email", "studentdemo@example.com"],
              ["Gender", "Male"],
              ["DOB", "16 Jan 2020"],
              ["Age", "24"],
            ].map(([k, v]) => (
              <div key={k} className="col-md-4">
                <h6>{k}</h6>
                <p>{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="card shadow-sm mb-0 mt-3">
        <div className="card-body">
          <h5 className="mb-3">Bio</h5>
          <p>
            Hello! I&apos;m Ronald Richard. I&apos;m passionate about developing innovative software solutions,
            analyzing classic literature. I aspire to become a software developer, work as an editor. In my free time,
            I enjoy coding, reading, hiking etc.
          </p>
        </div>
      </div>
    </>
  );
}

function CourseProgressCard({
  image,
  badge,
  badgeClass,
  instructor,
  instructorImg,
  title,
  progress,
}: {
  image: string;
  badge: string;
  badgeClass: string;
  instructor: string;
  instructorImg: string;
  title: string;
  progress: string;
}) {
  return (
    <div className="col-xxl-4 col-md-6">
      <div className="course-item-two course-item">
        <div className="course-img">
          <Link href="/course-details">
            <img src={assetPath(image)} alt="" className="img-fluid" />
          </Link>
          <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
            <span className={`badge badge-sm ${badgeClass}`}>{badge}</span>
          </div>
        </div>
        <div className="course-content">
          <div className="d-flex justify-content-between mb-2">
            <div className="d-flex align-items-center">
              <Link href="/instructor-details" className="avatar avatar-sm">
                <img src={assetPath(instructorImg)} alt="" className="img-fluid avatar avatar-sm rounded-circle" />
              </Link>
              <div className="ms-2">
                <Link href="/instructor-details" className="link-default fs-14">
                  {instructor}
                </Link>
              </div>
            </div>
            <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
              Technology
            </span>
          </div>
          <h6 className="title mb-4 text-truncate">
            <Link href="/course-details">{title}</Link>
          </h6>
          <div className="d-flex align-items-center mb-4">
            <p className="d-inline-flex fs-14 align-items-center me-2 pe-2 border-end mb-0">
              <i className="isax isax-book-1 me-2 text-gray fs-18 fw-bold" />
              6/7 Lesson
            </p>
            <p className="d-inline-flex fs-14 align-items-center mb-0">
              <i className="isax isax-clock me-2 text-gray fw-bold fs-18" />
              26h
            </p>
          </div>
          <div className="d-flex align-items-center gap-2 mb-3">
            <p className="mb-0 text-dark fs-14 flex-shrink-0">Progress</p>
            <div className="progress progress-xs flex-grow-1">
              <div className="progress-bar bg-success rounded" style={{ width: progress }} />
            </div>
            <p className="mb-0 text-dark fs-14 flex-shrink-0">{progress}</p>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <Link
              href="/course-watch"
              className="btn btn-gray btn-lg d-inline-flex align-items-center justify-content-center w-100 rounded-pill"
            >
              <i className="isax isax-play-circle me-2" />
              Start Learning
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function StudentCoursesBody() {
  return (
    <>
      <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between mb-4">
        <h4>Enrolled Courses</h4>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <Link href="/student-courses" className="badge-item bg-secondary">
            All Courses (16)
          </Link>
          <span className="badge-item bg-light border border-1">Not Started (8)</span>
          <span className="badge-item bg-light border border-1">Inprogress (4)</span>
          <span className="badge-item bg-light border border-1">Completed (4)</span>
        </div>
      </div>
      <div className="row">
        <CourseProgressCard
          image="img/course/course-52.jpg"
          badge="Completed"
          badgeClass="bg-success-transparent text-success"
          instructor="Christy Garner"
          instructorImg="img/user/user-64.jpg"
          title="Build Responsive Real World Websites with Crash Course"
          progress="100%"
        />
        <CourseProgressCard
          image="img/course/course-57.jpg"
          badge="Inprogress"
          badgeClass="bg-purple-transparent text-purple"
          instructor="Carolyn Hines"
          instructorImg="img/user/user-65.jpg"
          title="Introduction to Python for Data Science"
          progress="45%"
        />
        <CourseProgressCard
          image="img/course/course-01.jpg"
          badge="Not Started"
          badgeClass="bg-warning-transparent text-warning"
          instructor="Brenda Slaton"
          instructorImg="img/user/user-29.jpg"
          title="Information About UI/UX Design Degree"
          progress="0%"
        />
      </div>
      <div className="mt-4">
        <StudentEmptyState
          icon="isax isax-teacher"
          title="No enrolled courses"
          description="Static enrolled-course empty state for learners who have not purchased or joined a course yet."
          actionHref="/course-grid"
          actionLabel="Find your first course"
        />
      </div>
    </>
  );
}

export function StudentCertificatesBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">My Certificates</h5>
      <div className="row">
        {[
          { img: "img/course/course-01.jpg", title: "UI/UX Design Degree", date: "12 May 2026" },
          { img: "img/course/course-02.jpg", title: "Wordpress Masterclass", date: "02 Apr 2026" },
          { img: "img/course/course-03.jpg", title: "Sketch App Design", date: "18 Mar 2026" },
        ].map((c) => (
          <div key={c.title} className="col-md-6 col-xl-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <div className="mb-3">
                  <img src={assetPath(c.img)} alt="" className="img-fluid rounded-3" />
                </div>
                <h6 className="mb-2">{c.title}</h6>
                <p className="text-muted fs-14 mb-3">Issued on {c.date}</p>
                <Link href="#" className="btn btn-primary btn-sm rounded-pill">
                  Download
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <StudentEmptyState
        icon="isax isax-award"
        title="No certificates yet"
        description="Static certificate empty state shown before a learner completes their first eligible course."
        actionHref="/student-courses"
        actionLabel="Continue learning"
      />
    </>
  );
}

export function StudentWishlistBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Wishlist</h5>
      <div className="row">
        {COURSE_WISHLIST.map((c) => (
          <div key={c.title} className="col-xl-4 col-md-6">
            <div className="course-item-two course-item mx-0">
              <div className="course-img">
                <Link href="/course-details">
                  <img src={assetPath(c.img)} alt="" className="img-fluid" />
                </Link>
              </div>
              <div className="course-content">
                <h6 className="title mb-2">
                  <Link href="/course-details">{c.title}</Link>
                </h6>
                <p className="text-secondary fw-bold mb-3">{c.price}</p>
                <Link href="/cart" className="btn btn-dark btn-sm w-100 rounded-pill">
                  Add to cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <StudentEmptyState
        icon="isax isax-heart"
        title="Wishlist is empty"
        description="Static wishlist empty state for learners who have not saved any courses yet."
        actionHref="/course-grid"
        actionLabel="Explore courses"
      />
    </>
  );
}

export function StudentReviewsBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Reviews</h5>
      <div className="card">
        <div className="card-body">
          {[
            {
              course: "Sketch from A to Z",
              rating: "5.0",
              text: "Excellent structure and pacing.",
              date: "02 May 2026",
            },
            {
              course: "Wordpress for Beginners",
              rating: "4.5",
              text: "Very helpful for getting started.",
              date: "18 Apr 2026",
            },
          ].map((r) => (
            <div key={r.course} className="border-bottom pb-3 mb-3">
              <div className="d-flex justify-content-between flex-wrap gap-2">
                <h6 className="mb-1">{r.course}</h6>
                <span className="text-warning">
                  <i className="fa-solid fa-star me-1" />
                  {r.rating}
                </span>
              </div>
              <p className="mb-1">{r.text}</p>
              <p className="text-muted fs-14 mb-0">{r.date}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function StudentQuizBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">My Quiz Attempts</h5>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Quiz</th>
              <th>Course</th>
              <th>Score</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {[
              { q: "HTML Basics", c: "Web Developer", score: "18/20", status: "Passed" },
              { q: "CSS Layout", c: "Responsive Web", score: "15/22", status: "In progress" },
            ].map((row) => (
              <tr key={row.q}>
                <td>{row.q}</td>
                <td>{row.c}</td>
                <td>{row.score}</td>
                <td>
                  <span className="badge bg-success-transparent text-success">{row.status}</span>
                </td>
                <td>
                  <Link href="/student-quiz" className="btn btn-sm btn-primary rounded-pill">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <StudentEmptyState
        icon="isax isax-receipt"
        title="No orders yet"
        description="Static order-history empty state shown before a learner buys their first course."
        actionHref="/course-grid"
        actionLabel="Shop courses"
      />
    </>
  );
}

export function StudentOrderHistoryBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Order History</h5>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Order ID</th>
              <th>Course</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "#ORD-1024", course: "UI/UX Design", date: "12 May 2026", amt: "$120", status: "Completed" },
              { id: "#ORD-1023", course: "Python Bootcamp", date: "03 May 2026", amt: "$210", status: "Completed" },
            ].map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.course}</td>
                <td>{row.date}</td>
                <td>{row.amt}</td>
                <td>
                  <span className="badge bg-light text-dark">{row.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export function StudentReferralBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Referrals</h5>
      <div className="card mb-4">
        <div className="card-body">
          <h6 className="mb-2">Your referral link</h6>
          <div className="input-group">
            <input type="text" className="form-control" readOnly value="https://dreamslms.com/ref/STU-88291" />
            <button type="button" className="btn btn-primary">
              Copy
            </button>
          </div>
        </div>
      </div>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Friend</th>
              <th>Joined</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>alex.j@example.com</td>
              <td>20 Apr 2026</td>
              <td>$10 credit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export function StudentMessagesBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Messages</h5>
      <div className="card">
        <ul className="list-group list-group-flush">
          {[
            { from: "Nicole Brown", preview: "Thanks for joining the live session...", time: "2h ago" },
            { from: "Course Support", preview: "Your certificate is ready to download.", time: "1d ago" },
          ].map((m) => (
            <li key={m.from} className="list-group-item d-flex justify-content-between align-items-start">
              <div>
                <h6 className="mb-1">{m.from}</h6>
                <p className="mb-0 text-muted fs-14">{m.preview}</p>
              </div>
              <span className="text-muted fs-13">{m.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export function StudentTicketsBody() {
  return (
    <>
      <h5 className="fw-bold mb-4">Support Tickets</h5>
      <div className="d-flex justify-content-end mb-3">
        <Link href="#" className="btn btn-primary rounded-pill btn-sm">
          New Ticket
        </Link>
      </div>
      <div className="table-responsive custom-table">
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Ticket</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#TK-9001</td>
              <td>Payment not reflecting</td>
              <td>
                <span className="badge bg-warning-transparent text-warning">Open</span>
              </td>
              <td>10 May 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export function StudentSettingsBody() {
  return (
    <>
      <div className="mb-3">
        <h5>Settings</h5>
      </div>
      <ul className="settings-nav d-flex align-items-center flex-wrap border bg-light-900 rounded mb-4">
        <li>
          <span className="active">Edit Profile</span>
        </li>
        <li>
          <Link href="#">Security</Link>
        </li>
        <li>
          <Link href="#">Social Profiles</Link>
        </li>
        <li>
          <Link href="#">Linked Accounts</Link>
        </li>
        <li>
          <Link href="#">Notifications</Link>
        </li>
        <li>
          <Link href="#">Billing Address</Link>
        </li>
      </ul>
      <div className="card">
        <div className="card-body">
          <form action="#">
            <div className="profile-upload-group mb-4">
              <div className="d-flex align-items-center">
                <Link href="/student-profile" className="avatar flex-shrink-0 avatar-xxxl avatar-rounded border me-3">
                  <img src={assetPath("img/user/user-02.jpg")} alt="" className="img-fluid" />
                </Link>
                <div>
                  <h6>
                    <Link href="/student-profile">Profile Photo</Link>
                  </h6>
                  <p className="fs-14 mb-0">PNG or JPG no bigger than 800px width and height</p>
                  <div className="d-flex align-items-center mt-2 gap-2">
                    <span className="btn bg-gray-100 btn-sm rounded-pill">Upload</span>
                    <span className="btn btn-secondary btn-sm rounded-pill">Delete</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="edit-profile-info mb-3">
              <h5 className="mb-1">Personal Details</h5>
              <p>Edit your personal information</p>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" defaultValue="Ronald" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" defaultValue="Richard" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">
                  Email <span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" defaultValue="studentdemo@example.com" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input type="text" className="form-control" defaultValue="90154-91036" />
              </div>
            </div>
            <div className="text-end">
              <button type="submit" className="btn btn-primary rounded-pill">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
