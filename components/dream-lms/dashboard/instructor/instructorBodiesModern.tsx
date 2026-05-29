import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import {
  INSTRUCTOR_ANNOUNCEMENTS,
  INSTRUCTOR_ASSIGNMENTS,
  INSTRUCTOR_COURSES,
  instructorCourseStatusClass,
} from "./instructorCourseData";
import { INSTRUCTOR_STUDENT_DETAIL, INSTRUCTOR_STUDENTS } from "./instructorStudentsData";

function StudentViewToggle({ active }: { active: "grid" | "list" }) {
  return (
    <div className="mw-idash__view-toggle" role="group" aria-label="View mode">
      <Link
        href="/student-list"
        className={`mw-idash__view-btn${active === "list" ? " is-active" : ""}`}
        aria-current={active === "list" ? "page" : undefined}
      >
        List
      </Link>
      <Link
        href="/students"
        className={`mw-idash__view-btn${active === "grid" ? " is-active" : ""}`}
        aria-current={active === "grid" ? "page" : undefined}
      >
        Grid
      </Link>
    </div>
  );
}

function DataTable({
  columns,
  rows,
}: {
  columns: string[];
  rows: { cells: ReactNode[]; key: string }[];
}) {
  return (
    <div className="mw-idash__table-wrap mw-sdash__table-wrap">
      <table className="mw-idash__table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key}>
              {row.cells.map((cell, i) => (
                <td key={`${row.key}-${i}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function InstructorProfileBodyModern() {
  return (
    <>
      <div className="mw-sdash__toolbar">
        <Link href="/instructor-settings" className="mw-idash__link">
          Edit in settings →
        </Link>
      </div>
      <div className="mw-sdash__profile-hero mw-sdash__profile-hero--instructor">
        <img src={assetPath("img/user/user-01.jpg")} alt="" className="mw-sdash__profile-hero-img" />
        <div>
          <h3 className="mw-sdash__profile-hero-name">Eugene Andre</h3>
          <p className="mw-sdash__profile-hero-meta">instructor@example.com · Senior Web Developer</p>
          <p className="mw-sdash__profile-hero-extra">11 courses · 1,247 students · 4.8 instructor rating</p>
        </div>
      </div>
      <div className="mw-idash__stats mw-idash__stats--3">
        <article className="mw-idash__stat mw-idash__stat--blue">
          <p className="mw-idash__stat-label">Total students</p>
          <p className="mw-idash__stat-value">1,247</p>
        </article>
        <article className="mw-idash__stat mw-idash__stat--navy">
          <p className="mw-idash__stat-label">Courses published</p>
          <p className="mw-idash__stat-value">08</p>
        </article>
        <article className="mw-idash__stat mw-idash__stat--green">
          <p className="mw-idash__stat-label">Lifetime earnings</p>
          <p className="mw-idash__stat-value">$48.6k</p>
        </article>
      </div>
      <section className="mw-idash__card">
        <h3 className="mw-idash__card-title">About</h3>
        <p className="mw-sdash__bio">
          Eugene teaches full-stack web development with a focus on real-world projects. Former lead engineer at a
          product studio, now helping thousands of learners ship responsive apps and APIs.
        </p>
      </section>
      <section className="mw-idash__card">
        <h3 className="mw-idash__card-title">Experience</h3>
        <ul className="mw-idash__timeline">
          <li>
            <h4 className="mw-idash__timeline-title">Lead Instructor · MetaWaves</h4>
            <p className="mw-idash__timeline-meta">2022 – Present</p>
          </li>
          <li>
            <h4 className="mw-idash__timeline-title">Senior Frontend Engineer · Product Studio</h4>
            <p className="mw-idash__timeline-meta">2018 – 2022</p>
          </li>
        </ul>
      </section>
    </>
  );
}

function CourseFilterPills() {
  return (
    <div className="mw-sdash__filters" role="tablist">
      {[
        { label: "All courses", count: INSTRUCTOR_COURSES.length, active: true },
        { label: "Published", count: 1 },
        { label: "Draft", count: 1 },
        { label: "Pending", count: 1 },
      ].map((item) => (
        <button
          key={item.label}
          type="button"
          role="tab"
          className={`mw-sdash__filter${item.active ? " is-active" : ""}`}
        >
          {item.label}
          <span className="mw-sdash__filter-count">{item.count}</span>
        </button>
      ))}
    </div>
  );
}

export function InstructorCourseBodyModern() {
  return (
    <>
      <div className="mw-sdash__toolbar mw-sdash__toolbar--split">
        <CourseFilterPills />
        <Link href="/add-course" className="mw-idash__btn mw-idash__btn--primary">
          Add course
        </Link>
      </div>
      <div className="mw-idash__table-wrap mw-sdash__table-wrap">
        <table className="mw-idash__table">
          <thead>
            <tr>
              <th>Course</th>
              <th>Enrolled</th>
              <th>Status</th>
              <th className="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            {INSTRUCTOR_COURSES.map((course) => (
              <tr key={course.id}>
                <td>
                  <div className="mw-idash__course-cell">
                    <img src={assetPath(course.img)} alt="" className="mw-idash__course-thumb" />
                    <Link href="/course-details" className="mw-idash__course-title">
                      {course.title}
                    </Link>
                  </div>
                </td>
                <td>{course.enrolled.toLocaleString()}</td>
                <td>
                  <span className={instructorCourseStatusClass(course.status)}>{course.status}</span>
                </td>
                <td className="text-end">
                  <Link href="/instructor-course-edit" className="mw-idash__table-action me-3">
                    Edit
                  </Link>
                  <Link href="/course-details" className="mw-idash__table-action">
                    Preview
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

export function InstructorAnnouncementsBodyModern() {
  return (
    <>
      <div className="mw-sdash__toolbar">
        <button type="button" className="mw-idash__btn mw-idash__btn--primary">
          New announcement
        </button>
      </div>
      <ul className="mw-idash__announce-list">
        {INSTRUCTOR_ANNOUNCEMENTS.map((item) => (
          <li key={item.id} className="mw-idash__card mw-idash__announce-item">
            <div className="mw-idash__announce-head">
              <h3 className="mw-idash__announce-title">{item.title}</h3>
              <time className="mw-idash__announce-date">{item.date}</time>
            </div>
            <p className="mw-idash__announce-body">{item.body}</p>
            <div className="mw-idash__announce-actions">
              <button type="button" className="mw-idash__table-action">
                Edit
              </button>
              <button type="button" className="mw-sdash__btn-text-danger">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export function InstructorAssignmentBodyModern() {
  return (
    <>
      <div className="mw-sdash__toolbar">
        <Link href="#" className="mw-idash__btn mw-idash__btn--primary">
          Create assignment
        </Link>
      </div>
      <DataTable
        columns={["Title", "Course", "Due date", "Submissions", ""]}
        rows={INSTRUCTOR_ASSIGNMENTS.map((a) => ({
          key: a.id,
          cells: [
            a.title,
            a.course,
            a.due,
            String(a.submissions),
            <Link key="v" href="#" className="mw-idash__table-action">
              Review
            </Link>,
          ],
        }))}
      />
    </>
  );
}

export function InstructorQuizBodyModern() {
  return (
    <>
      <div className="mw-sdash__toolbar">
        <Link href="#" className="mw-idash__btn mw-idash__btn--primary">
          Create quiz
        </Link>
      </div>
      <DataTable
        columns={["Quiz", "Course", "Questions", "Attempts", ""]}
        rows={[
          {
            key: "q1",
            cells: [
              "Module 1 Check",
              "Web Development",
              "22",
              "54",
              <Link key="a" href="#" className="mw-idash__table-action">
                Edit
              </Link>,
            ],
          },
          {
            key: "q2",
            cells: [
              "Final Assessment",
              "Python for Data Science",
              "30",
              "128",
              <Link key="b" href="#" className="mw-idash__table-action">
                Edit
              </Link>,
            ],
          },
        ]}
      />
    </>
  );
}

export function InstructorQuizResultsBodyModern() {
  return (
    <DataTable
      columns={["Student", "Quiz", "Score", "Date", ""]}
      rows={[
        {
          key: "r1",
          cells: [
            "Ronald Richard",
            "HTML Basics",
            "18/20",
            "12 May 2026",
            <Link key="v" href="#" className="mw-idash__table-action">
              View
            </Link>,
          ],
        },
        {
          key: "r2",
          cells: [
            "Sarah Chen",
            "CSS Layout",
            "20/22",
            "10 May 2026",
            <Link key="v2" href="#" className="mw-idash__table-action">
              View
            </Link>,
          ],
        },
      ]}
    />
  );
}

export function InstructorCertificateBodyModern() {
  const certs = [
    { id: 1, name: "Course completion", course: "Web Development" },
    { id: 2, name: "Excellence award", course: "UI/UX Design" },
    { id: 3, name: "Participation", course: "Python Bootcamp" },
  ];

  return (
    <div className="mw-sdash__cert-grid">
      {certs.map((c) => (
        <article key={c.id} className="mw-sdash__cert-card">
          <div className="mw-sdash__cert-card-visual mw-sdash__cert-card-visual--doc">
            <img src={assetPath("img/certificates/certificate-01.svg")} alt="" />
            <span className="mw-sdash__cert-badge">Template</span>
          </div>
          <div className="mw-sdash__cert-card-body">
            <h3 className="mw-sdash__cert-title">{c.name}</h3>
            <p className="mw-sdash__cert-meta">{c.course}</p>
            <div className="mw-sdash__cert-actions">
              <Link href="#" className="mw-idash__btn mw-idash__btn--primary">
                Download
              </Link>
              <Link href="#" className="mw-idash__link">
                Preview
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function InstructorEarningsBodyModern() {
  return (
    <>
      <div className="mw-idash__stats mw-idash__stats--3">
        <article className="mw-idash__stat mw-idash__stat--blue">
          <p className="mw-idash__stat-label">This month</p>
          <p className="mw-idash__stat-value">$1,240</p>
          <p className="mw-idash__stat-trend">+12% vs last month</p>
        </article>
        <article className="mw-idash__stat mw-idash__stat--navy">
          <p className="mw-idash__stat-label">Pending payout</p>
          <p className="mw-idash__stat-value">$860</p>
          <p className="mw-idash__stat-trend">Available to withdraw</p>
        </article>
        <article className="mw-idash__stat mw-idash__stat--green">
          <p className="mw-idash__stat-label">Lifetime earnings</p>
          <p className="mw-idash__stat-value">$48,600</p>
          <p className="mw-idash__stat-trend">Since Jan 2024</p>
        </article>
      </div>
      <section className="mw-idash__card mw-idash__card--chart">
        <div className="mw-idash__card-head">
          <div>
            <h3 className="mw-idash__card-title">Revenue trend</h3>
            <p className="mw-idash__card-sub">Monthly earnings from all courses</p>
          </div>
          <label className="mw-idash__date-filter">
            <span className="visually-hidden">Date range</span>
            <input type="text" placeholder="Jan 2026 – May 2026" readOnly />
          </label>
        </div>
        <div className="mw-idash__chart-placeholder" aria-hidden>
          <div className="mw-idash__chart-bars">
            {[38, 62, 48, 78, 70, 88, 55].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function InstructorPayoutBodyModern() {
  return (
    <>
      <section className="mw-sdash__referral-banner mw-sdash__referral-banner--payout">
        <div>
          <h3 className="mw-sdash__referral-title">Available balance</h3>
          <p className="mw-sdash__referral-desc">Funds ready to transfer to your bank account.</p>
        </div>
        <span className="mw-sdash__referral-stat">$860.00</span>
      </section>
      <section className="mw-idash__card">
        <h3 className="mw-idash__card-title">Request payout</h3>
        <p className="mw-idash__card-sub mb-3">
          Payouts are processed within 3–5 business days to your linked account ending in •••• 4821.
        </p>
        <div className="mw-sdash__form-grid">
          <label className="mw-sdash__field">
            <span>Amount (USD)</span>
            <input type="text" defaultValue="860" />
          </label>
          <label className="mw-sdash__field">
            <span>Payout method</span>
            <select className="mw-sdash__field-select">
              <option>Bank transfer</option>
              <option>PayPal</option>
            </select>
          </label>
        </div>
        <div className="mw-sdash__form-actions">
          <button type="button" className="mw-idash__btn mw-idash__btn--primary">
            Request payout
          </button>
        </div>
      </section>
    </>
  );
}

export function InstructorStatementsBodyModern() {
  return (
    <DataTable
      columns={["Period", "Orders", "Total", ""]}
      rows={[
        {
          key: "s1",
          cells: [
            "April 2026",
            "18",
            "$3,420",
            <Link key="pdf" href="#" className="mw-idash__table-action">
              Download PDF
            </Link>,
          ],
        },
        {
          key: "s2",
          cells: [
            "March 2026",
            "22",
            "$4,180",
            <Link key="pdf2" href="#" className="mw-idash__table-action">
              Download PDF
            </Link>,
          ],
        },
      ]}
    />
  );
}

export function InstructorTicketsBodyModern() {
  return (
    <>
      <div className="mw-sdash__toolbar">
        <Link href="#" className="mw-idash__btn mw-idash__btn--primary">
          New ticket
        </Link>
      </div>
      <DataTable
        columns={["ID", "Subject", "Priority", "Status", "Updated"]}
        rows={[
          {
            key: "t1",
            cells: [
              "#IN-204",
              "Payout delay",
              <span key="p" className="mw-sdash__priority mw-sdash__priority--high">
                High
              </span>,
              <span key="s" className="mw-idash__status mw-idash__status--draft">
                In progress
              </span>,
              "10 May 2026",
            ],
          },
          {
            key: "t2",
            cells: [
              "#IN-198",
              "Course video upload",
              <span key="p2" className="mw-sdash__priority">
                Normal
              </span>,
              <span key="s2" className="mw-idash__status mw-idash__status--published">
                Resolved
              </span>,
              "02 May 2026",
            ],
          },
        ]}
      />
    </>
  );
}

export function InstructorSettingsBodyModern() {
  const tabs = ["Profile", "Payout", "Notifications", "Security"];

  return (
    <>
      <div className="mw-sdash__settings-tabs" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab}
            type="button"
            role="tab"
            className={`mw-sdash__settings-tab${i === 0 ? " is-active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <section className="mw-idash__card">
        <form className="mw-sdash__form" action="#">
          <div className="mw-sdash__settings-upload">
            <img src={assetPath("img/user/user-01.jpg")} alt="" className="mw-sdash__profile-hero-img" />
            <div>
              <h3 className="mw-idash__card-title">Profile photo</h3>
              <p className="mw-idash__card-sub">Shown on your courses and instructor page</p>
              <div className="mw-sdash__settings-upload-actions">
                <button type="button" className="mw-sdash__btn-secondary">
                  Upload
                </button>
              </div>
            </div>
          </div>
          <div className="mw-sdash__form-grid">
            <label className="mw-sdash__field">
              <span>Display name</span>
              <input type="text" defaultValue="Eugene Andre" />
            </label>
            <label className="mw-sdash__field">
              <span>Email</span>
              <input type="email" defaultValue="instructor@example.com" />
            </label>
            <label className="mw-sdash__field mw-sdash__field--full">
              <span>Headline</span>
              <input type="text" defaultValue="Senior Web Developer & Instructor" />
            </label>
            <label className="mw-sdash__field mw-sdash__field--full">
              <span>Bio</span>
              <textarea className="mw-sdash__field-textarea" rows={4} defaultValue="Teaching full-stack development and helping students ship real projects." />
            </label>
          </div>
          <div className="mw-sdash__form-actions">
            <button type="submit" className="mw-idash__btn mw-idash__btn--primary">
              Save changes
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export function StudentsGridBodyModern() {
  return (
    <>
      <div className="mw-sdash__toolbar mw-sdash__toolbar--split">
        <label className="mw-idash__search">
          <span className="visually-hidden">Search students</span>
          <input type="search" placeholder="Search students…" />
        </label>
        <StudentViewToggle active="grid" />
      </div>
      <div className="mw-idash__student-grid">
        {INSTRUCTOR_STUDENTS.map((s) => (
          <article key={s.id} className="mw-idash__student-card">
            <Link href="/student-details" className="mw-idash__student-card-photo">
              <img src={assetPath(s.img)} alt="" />
            </Link>
            <div className="mw-idash__student-card-body">
              <div className="mw-idash__student-card-head">
                <div>
                  <h3 className="mw-idash__student-card-name">
                    <Link href="/student-details">{s.name}</Link>
                  </h3>
                  <p className="mw-idash__student-card-loc">{s.loc}</p>
                </div>
                <Link href="/student-messages" className="mw-idash__student-msg-btn" aria-label={`Message ${s.name}`}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 6h14v8H9l-4 4V6Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="mw-idash__student-card-meta">
                <span>Joined {s.date}</span>
                <span>{s.courses} courses</span>
              </div>
              <Link href="/student-details" className="mw-idash__table-action">
                View profile →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export function StudentListBodyModern() {
  return (
    <>
      <div className="mw-sdash__toolbar mw-sdash__toolbar--split">
        <label className="mw-idash__search">
          <span className="visually-hidden">Search students</span>
          <input type="search" placeholder="Search students…" />
        </label>
        <StudentViewToggle active="list" />
      </div>
      <DataTable
        columns={["Student", "Email", "Location", "Courses", ""]}
        rows={INSTRUCTOR_STUDENTS.map((s) => ({
          key: s.id,
          cells: [
            <div key="n" className="mw-idash__course-cell">
              <img src={assetPath(s.img)} alt="" className="mw-idash__student-avatar" />
              <Link href="/student-details" className="mw-idash__course-title">
                {s.name}
              </Link>
            </div>,
            s.email,
            s.loc,
            String(s.courses),
            <Link key="v" href="/student-details" className="mw-idash__table-action">
              View
            </Link>,
          ],
        }))}
      />
    </>
  );
}

export function InstructorStudentDetailBodyModern() {
  const s = INSTRUCTOR_STUDENT_DETAIL;

  return (
    <>
      <Link href="/student-list" className="mw-idash__back-link">
        ← Back to students
      </Link>
      <div className="mw-idash__student-detail">
        <div className="mw-idash__student-detail-main">
          <section className="mw-idash__card mw-idash__student-profile-card">
            <div className="mw-idash__student-profile-row">
              <img src={assetPath(s.img)} alt="" className="mw-idash__student-profile-img" />
              <div>
                <h3 className="mw-idash__student-profile-name">{s.name}</h3>
                <p className="mw-idash__card-sub">Joined {s.joined}</p>
                <p className="mw-idash__student-profile-bio">{s.bio}</p>
                <p className="mw-idash__student-profile-stat">
                  <strong>{s.courses}</strong> courses enrolled
                </p>
              </div>
            </div>
          </section>
          <section className="mw-idash__card">
            <h3 className="mw-idash__card-title">About</h3>
            <p className="mw-sdash__bio">{s.about}</p>
          </section>
          <section className="mw-idash__card">
            <h3 className="mw-idash__card-title">Education</h3>
            <ul className="mw-idash__timeline">
              {s.education.map((edu) => (
                <li key={edu.degree}>
                  <h4 className="mw-idash__timeline-title">{edu.degree}</h4>
                  <p className="mw-idash__timeline-meta">
                    {edu.school} · {edu.years}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section className="mw-idash__card">
            <h3 className="mw-idash__card-title">Enrolled courses</h3>
            <div className="mw-sdash__course-grid mw-sdash__course-grid--compact">
              {s.enrolled.map((c) => (
                <article key={c.title} className="mw-sdash__wish-card">
                  <Link href="/course-details" className="mw-sdash__course-card-thumb">
                    <img src={assetPath(c.img)} alt="" />
                  </Link>
                  <div className="mw-sdash__wish-card-body">
                    <h4 className="mw-sdash__course-card-title">
                      <Link href="/course-details">{c.title}</Link>
                    </h4>
                    <p className="mw-sdash__wish-price">{c.price}</p>
                    <Link href="/course-details" className="mw-sdash__course-cta">
                      View course
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
        <aside className="mw-idash__student-detail-aside">
          <section className="mw-idash__card">
            <h3 className="mw-idash__card-title">Certifications</h3>
            <div className="mw-idash__cert-icons">
              {["certificate-01.svg", "certificate-02.svg", "certificate-03.svg"].map((f) => (
                <img key={f} src={assetPath(`img/certificates/${f}`)} alt="" />
              ))}
            </div>
          </section>
          <section className="mw-idash__card">
            <h3 className="mw-idash__card-title">Contact</h3>
            <ul className="mw-idash__contact-list">
              <li>
                <span className="mw-idash__contact-label">Email</span>
                <span>{s.email}</span>
              </li>
              <li>
                <span className="mw-idash__contact-label">Phone</span>
                <span>{s.phone}</span>
              </li>
              <li>
                <span className="mw-idash__contact-label">Address</span>
                <span>{s.address}</span>
              </li>
            </ul>
            <Link href="/student-messages" className="mw-idash__btn mw-idash__btn--primary w-100 mt-3">
              Send message
            </Link>
          </section>
        </aside>
      </div>
    </>
  );
}
