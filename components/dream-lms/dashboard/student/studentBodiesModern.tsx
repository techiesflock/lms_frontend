import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";

const WISHLIST = [
  { img: "img/course/course-01.jpg", title: "Information About UI/UX Design Degree", price: "$120", rating: "4.9" },
  { img: "img/course/course-04.jpg", title: "Build Responsive Real World Websites", price: "$200", rating: "4.7" },
  { img: "img/course/course-07.jpg", title: "Learn ReactJS Tech Fundamentals", price: "$147", rating: "4.8" },
];

const ENROLLED = [
  {
    image: "img/course/course-52.jpg",
    badge: "Completed",
    tone: "green" as const,
    instructor: "Christy Garner",
    instructorImg: "img/user/user-64.jpg",
    title: "Build Responsive Real World Websites with Crash Course",
    progress: 100,
    lessons: "7/7",
    duration: "26h",
  },
  {
    image: "img/course/course-57.jpg",
    badge: "In progress",
    tone: "blue" as const,
    instructor: "Carolyn Hines",
    instructorImg: "img/user/user-65.jpg",
    title: "Introduction to Python for Data Science",
    progress: 45,
    lessons: "3/7",
    duration: "18h",
  },
  {
    image: "img/course/course-01.jpg",
    badge: "Not started",
    tone: "amber" as const,
    instructor: "Brenda Slaton",
    instructorImg: "img/user/user-29.jpg",
    title: "Information About UI/UX Design Degree",
    progress: 0,
    lessons: "0/7",
    duration: "12h",
  },
];

function FilterPills({
  items,
}: {
  items: { label: string; count?: number; active?: boolean }[];
}) {
  return (
    <div className="mw-sdash__filters" role="tablist">
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          role="tab"
          className={`mw-sdash__filter${item.active ? " is-active" : ""}`}
          aria-selected={item.active}
        >
          {item.label}
          {item.count != null ? <span className="mw-sdash__filter-count">{item.count}</span> : null}
        </button>
      ))}
    </div>
  );
}

function CourseCard({
  image,
  badge,
  tone,
  instructor,
  instructorImg,
  title,
  progress,
  lessons,
  duration,
}: (typeof ENROLLED)[number]) {
  return (
    <article className="mw-sdash__course-card">
      <Link href="/course-details" className="mw-sdash__course-card-thumb">
        <img src={assetPath(image)} alt="" />
        <span className={`mw-sdash__course-badge mw-sdash__course-badge--${tone}`}>{badge}</span>
      </Link>
      <div className="mw-sdash__course-card-body">
        <div className="mw-sdash__course-card-top">
          <Link href="/instructor-details" className="mw-sdash__course-instructor">
            <img src={assetPath(instructorImg)} alt="" />
            <span>{instructor}</span>
          </Link>
        </div>
        <h3 className="mw-sdash__course-card-title">
          <Link href="/course-details">{title}</Link>
        </h3>
        <p className="mw-sdash__course-card-meta">
          {lessons} lessons · {duration}
        </p>
        <div className="mw-sdash__progress-row">
          <div className="mw-sdash__progress-track">
            <span style={{ width: `${progress}%` }} />
          </div>
          <span className="mw-sdash__progress-pct">{progress}%</span>
        </div>
        <Link href="/course-watch" className="mw-sdash__course-cta">
          {progress > 0 && progress < 100 ? "Continue learning" : progress === 100 ? "Review course" : "Start course"}
        </Link>
      </div>
    </article>
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

export function StudentProfileBodyModern() {
  const fields = [
    ["First name", "Ronald"],
    ["Last name", "Richard"],
    ["Username", "studentdemo"],
    ["Email", "studentdemo@example.com"],
    ["Phone", "90154-91036"],
    ["Gender", "Male"],
    ["Date of birth", "16 Jan 2000"],
    ["Member since", "16 Jan 2024"],
  ] as const;

  return (
    <>
      <div className="mw-sdash__toolbar">
        <Link href="/student-settings" className="mw-idash__link">
          Edit profile →
        </Link>
      </div>
      <div className="mw-sdash__profile-hero">
        <img src={assetPath("img/user/user-02.jpg")} alt="" className="mw-sdash__profile-hero-img" />
        <div>
          <h3 className="mw-sdash__profile-hero-name">Ronald Richard</h3>
          <p className="mw-sdash__profile-hero-meta">studentdemo@example.com · Student</p>
        </div>
      </div>
      <section className="mw-idash__card">
        <h3 className="mw-idash__card-title">Basic details</h3>
        <dl className="mw-sdash__detail-grid">
          {fields.map(([label, value]) => (
            <div key={label} className="mw-sdash__detail-item">
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section className="mw-idash__card">
        <h3 className="mw-idash__card-title">Bio</h3>
        <p className="mw-sdash__bio">
          Hello! I&apos;m Ronald Richard. I&apos;m passionate about software development and learning new technologies.
          In my free time I enjoy coding, reading, and hiking.
        </p>
      </section>
    </>
  );
}

export function StudentCoursesBodyModern() {
  return (
    <>
      <FilterPills
        items={[
          { label: "All courses", count: 16, active: true },
          { label: "In progress", count: 4 },
          { label: "Completed", count: 4 },
          { label: "Not started", count: 8 },
        ]}
      />
      <div className="mw-sdash__course-grid">
        {ENROLLED.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </div>
    </>
  );
}

export function StudentCertificatesBodyModern() {
  const certs = [
    { img: "img/course/course-01.jpg", title: "UI/UX Design Degree", date: "12 May 2026", id: "MW-UX-2026" },
    { img: "img/course/course-02.jpg", title: "Wordpress Masterclass", date: "02 Apr 2026", id: "MW-WP-2026" },
    { img: "img/course/course-03.jpg", title: "Sketch App Design", date: "18 Mar 2026", id: "MW-SK-2026" },
  ];

  return (
    <div className="mw-sdash__cert-grid">
      {certs.map((c) => (
        <article key={c.id} className="mw-sdash__cert-card">
          <div className="mw-sdash__cert-card-visual">
            <img src={assetPath(c.img)} alt="" />
            <span className="mw-sdash__cert-badge">Certificate</span>
          </div>
          <div className="mw-sdash__cert-card-body">
            <h3 className="mw-sdash__cert-title">{c.title}</h3>
            <p className="mw-sdash__cert-meta">Issued {c.date} · ID {c.id}</p>
            <div className="mw-sdash__cert-actions">
              <Link href="#" className="mw-idash__btn mw-idash__btn--primary">
                Download PDF
              </Link>
              <Link href="#" className="mw-idash__link">
                Share
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function StudentWishlistBodyModern() {
  return (
    <div className="mw-sdash__course-grid">
      {WISHLIST.map((c) => (
        <article key={c.title} className="mw-sdash__wish-card">
          <Link href="/course-details" className="mw-sdash__course-card-thumb">
            <img src={assetPath(c.img)} alt="" />
          </Link>
          <div className="mw-sdash__wish-card-body">
            <h3 className="mw-sdash__course-card-title">
              <Link href="/course-details">{c.title}</Link>
            </h3>
            <p className="mw-sdash__wish-rating">
              <span className="mw-sdash__stars">★</span> {c.rating}
            </p>
            <p className="mw-sdash__wish-price">{c.price}</p>
            <div className="mw-sdash__wish-actions">
              <Link href="/cart" className="mw-idash__btn mw-idash__btn--primary">
                Add to cart
              </Link>
              <button type="button" className="mw-sdash__icon-btn" aria-label="Remove from wishlist">
                ×
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export function StudentReviewsBodyModern() {
  const reviews = [
    { course: "Sketch from A to Z", rating: 5, text: "Excellent structure and pacing.", date: "02 May 2026" },
    { course: "Wordpress for Beginners", rating: 4.5, text: "Very helpful for getting started.", date: "18 Apr 2026" },
  ];

  return (
    <ul className="mw-sdash__review-list">
      {reviews.map((r) => (
        <li key={r.course} className="mw-idash__card mw-sdash__review-item">
          <div className="mw-sdash__review-head">
            <h3 className="mw-sdash__review-course">{r.course}</h3>
            <span className="mw-sdash__review-rating">{r.rating.toFixed(1)} ★</span>
          </div>
          <p className="mw-sdash__review-text">{r.text}</p>
          <p className="mw-sdash__review-date">{r.date}</p>
        </li>
      ))}
    </ul>
  );
}

export function StudentQuizBodyModern() {
  return (
    <DataTable
      columns={["Quiz", "Course", "Score", "Status", ""]}
      rows={[
        {
          key: "html",
          cells: [
            "HTML Basics",
            "Web Developer",
            "18/20",
            <span key="s1" className="mw-idash__status mw-idash__status--published">
              Passed
            </span>,
            <Link key="a1" href="/student-quiz" className="mw-idash__table-action">
              View
            </Link>,
          ],
        },
        {
          key: "css",
          cells: [
            "CSS Layout",
            "Responsive Web",
            "15/22",
            <span key="s2" className="mw-idash__status mw-idash__status--draft">
              In progress
            </span>,
            <Link key="a2" href="/course-resume" className="mw-idash__table-action">
              Continue
            </Link>,
          ],
        },
      ]}
    />
  );
}

export function StudentOrderHistoryBodyModern() {
  return (
    <DataTable
      columns={["Order ID", "Course", "Date", "Amount", "Status"]}
      rows={[
        {
          key: "o1",
          cells: [
            "#ORD-1024",
            "UI/UX Design",
            "12 May 2026",
            "$120",
            <span key="st" className="mw-idash__status mw-idash__status--published">
              Completed
            </span>,
          ],
        },
        {
          key: "o2",
          cells: [
            "#ORD-1023",
            "Python Bootcamp",
            "03 May 2026",
            "$210",
            <span key="st" className="mw-idash__status mw-idash__status--published">
              Completed
            </span>,
          ],
        },
      ]}
    />
  );
}

export function StudentReferralBodyModern() {
  return (
    <>
      <section className="mw-sdash__referral-banner">
        <div>
          <h3 className="mw-sdash__referral-title">Invite friends, earn rewards</h3>
          <p className="mw-sdash__referral-desc">Share your link and get $10 credit when a friend enrolls.</p>
        </div>
        <span className="mw-sdash__referral-stat">$20 earned</span>
      </section>
      <section className="mw-idash__card">
        <h3 className="mw-idash__card-title">Your referral link</h3>
        <div className="mw-sdash__copy-row">
          <input readOnly value="https://metawaves.com/ref/STU-88291" className="mw-sdash__copy-input" />
          <button type="button" className="mw-idash__btn mw-idash__btn--primary">
            Copy link
          </button>
        </div>
      </section>
      <DataTable
        columns={["Friend", "Joined", "Reward"]}
        rows={[
          { key: "r1", cells: ["alex.j@example.com", "20 Apr 2026", "$10 credit"] },
        ]}
      />
    </>
  );
}

export function StudentMessagesBodyModern() {
  const messages = [
    { from: "Nicole Brown", preview: "Thanks for joining the live session...", time: "2h ago", unread: true },
    { from: "Course Support", preview: "Your certificate is ready to download.", time: "1d ago", unread: false },
    { from: "MetaWaves Team", preview: "New courses added in Web Development.", time: "3d ago", unread: false },
  ];

  return (
    <ul className="mw-sdash__message-list">
      {messages.map((m) => (
        <li key={m.from}>
          <button type="button" className={`mw-sdash__message${m.unread ? " is-unread" : ""}`}>
            <span className="mw-sdash__message-avatar">{m.from.charAt(0)}</span>
            <span className="mw-sdash__message-body">
              <span className="mw-sdash__message-top">
                <strong>{m.from}</strong>
                <time>{m.time}</time>
              </span>
              <span className="mw-sdash__message-preview">{m.preview}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export function StudentTicketsBodyModern() {
  return (
    <>
      <div className="mw-sdash__toolbar">
        <Link href="#" className="mw-idash__btn mw-idash__btn--primary">
          New ticket
        </Link>
      </div>
      <DataTable
        columns={["Ticket", "Subject", "Status", "Updated"]}
        rows={[
          {
            key: "t1",
            cells: [
              "#TK-9001",
              "Payment not reflecting",
              <span key="st" className="mw-idash__status mw-idash__status--draft">
                Open
              </span>,
              "10 May 2026",
            ],
          },
          {
            key: "t2",
            cells: [
              "#TK-8998",
              "Certificate download issue",
              <span key="st" className="mw-idash__status mw-idash__status--published">
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

export function StudentSettingsBodyModern() {
  const tabs = ["Edit profile", "Security", "Notifications", "Billing"];

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
            <img src={assetPath("img/user/user-02.jpg")} alt="" className="mw-sdash__profile-hero-img" />
            <div>
              <h3 className="mw-idash__card-title">Profile photo</h3>
              <p className="mw-idash__card-sub">PNG or JPG, max 800×800px</p>
              <div className="mw-sdash__settings-upload-actions">
                <button type="button" className="mw-sdash__btn-secondary">
                  Upload
                </button>
                <button type="button" className="mw-sdash__btn-text-danger">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <h3 className="mw-idash__card-title">Personal details</h3>
          <div className="mw-sdash__form-grid">
            <label className="mw-sdash__field">
              <span>First name *</span>
              <input type="text" defaultValue="Ronald" />
            </label>
            <label className="mw-sdash__field">
              <span>Last name *</span>
              <input type="text" defaultValue="Richard" />
            </label>
            <label className="mw-sdash__field">
              <span>Email *</span>
              <input type="email" defaultValue="studentdemo@example.com" />
            </label>
            <label className="mw-sdash__field">
              <span>Phone</span>
              <input type="text" defaultValue="90154-91036" />
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
