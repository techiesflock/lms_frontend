import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const STATS = [
  { label: "Enrolled courses", value: "12", trend: "+2 this month", tone: "blue" },
  { label: "Active courses", value: "08", trend: "3 in review", tone: "navy" },
  { label: "Completed courses", value: "06", trend: "On track", tone: "green" },
  { label: "Total students", value: "1,247", trend: "+18% vs last month", tone: "blue" },
  { label: "Total courses", value: "11", trend: "2 drafts", tone: "navy" },
  { label: "Total earnings", value: "$4,860", trend: "+$420 this week", tone: "green" },
] as const;

const RECENT_COURSES = [
  {
    img: "img/instructor/instructor-table-01.jpg",
    title: "Complete HTML, CSS and Javascript Course",
    enrolled: 0,
    status: "Published" as const,
  },
  {
    img: "img/instructor/instructor-table-02.jpg",
    title: "Complete Course on Fullstack Web Developer",
    enrolled: 214,
    status: "Published" as const,
  },
  {
    img: "img/instructor/instructor-table-03.jpg",
    title: "Data Science Fundamentals and Advanced Bootcamp",
    enrolled: 98,
    status: "Draft" as const,
  },
];

function statusClass(status: string) {
  if (status === "Published") return "mw-idash__status mw-idash__status--published";
  if (status === "Draft") return "mw-idash__status mw-idash__status--draft";
  return "mw-idash__status";
}

export function InstructorDashboardHomeModern() {
  return (
    <>
      <div className="mw-idash__stats">
        {STATS.map((stat) => (
          <article key={stat.label} className={`mw-idash__stat mw-idash__stat--${stat.tone}`}>
            <p className="mw-idash__stat-label">{stat.label}</p>
            <p className="mw-idash__stat-value">{stat.value}</p>
            <p className="mw-idash__stat-trend">{stat.trend}</p>
          </article>
        ))}
      </div>

      <section className="mw-idash__card mw-idash__card--chart">
        <div className="mw-idash__card-head">
          <div>
            <h3 className="mw-idash__card-title">Earnings overview</h3>
            <p className="mw-idash__card-sub">Track revenue across your published courses</p>
          </div>
          <label className="mw-idash__date-filter">
            <span className="visually-hidden">Date range</span>
            <input type="text" placeholder="Jan 2026 – May 2026" readOnly />
          </label>
        </div>
        <div className="mw-idash__chart-placeholder" aria-hidden>
          <div className="mw-idash__chart-bars">
            {[42, 68, 55, 82, 74, 91, 63].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </section>

      <section className="mw-idash__card">
        <div className="mw-idash__card-head">
          <div>
            <h3 className="mw-idash__card-title">Recently created courses</h3>
            <p className="mw-idash__card-sub">Your latest course activity</p>
          </div>
          <Link href="/instructor-course" className="mw-idash__link">
            View all courses
          </Link>
        </div>
        <div className="mw-idash__table-wrap">
          <table className="mw-idash__table">
            <thead>
              <tr>
                <th scope="col">Course</th>
                <th scope="col">Enrolled</th>
                <th scope="col">Status</th>
                <th scope="col" className="text-end">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {RECENT_COURSES.map((course) => (
                <tr key={course.title}>
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
                    <span className={statusClass(course.status)}>{course.status}</span>
                  </td>
                  <td className="text-end">
                    <Link href="/instructor-course-edit" className="mw-idash__table-action">
                      Manage
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
