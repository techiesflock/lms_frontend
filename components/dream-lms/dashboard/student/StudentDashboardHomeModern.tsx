import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const STATS = [
  { label: "Enrolled courses", value: "12", trend: "3 in progress", tone: "blue" },
  { label: "Active courses", value: "03", trend: "Continue learning", tone: "navy" },
  { label: "Completed", value: "10", trend: "2 certificates earned", tone: "green" },
] as const;

const INSIGHTS = [
  {
    title: "Full Stack Developer Path",
    desc: "You are 70% closer to your goal",
    badge: "On track",
    progress: 70,
    variant: "navy",
  },
  {
    title: "React Masterclass",
    desc: "Continue your React journey",
    badge: "Next up",
    href: "/course-details",
    variant: "blue",
  },
  {
    title: "Node.js API Development",
    desc: "Recommended based on your web progress",
    badge: "For you",
    href: "/course-details",
    variant: "purple",
  },
] as const;

const INVOICES = [
  { title: "Build Responsive Real World Websites", id: "#INV001", amt: "$200" },
  { title: "Wordpress for Beginners", id: "#INV002", amt: "$310" },
  { title: "Information About UI/UX Design Degree", id: "#INV003", amt: "$270" },
];

const QUIZZES = [
  { score: "15/22", date: "15 Jan 2026", pct: "95%" },
  { score: "18/22", date: "04 Jan 2026", pct: "100%" },
  { score: "25/30", date: "26 Dec 2025", pct: "80%" },
];

export function StudentDashboardHomeModern() {
  return (
    <>
      <section className="mw-sdash__quiz-banner">
        <div className="mw-sdash__quiz-banner-content">
          <p className="mw-sdash__quiz-label">Quiz in progress</p>
          <h3 className="mw-sdash__quiz-title">Build Responsive Real World Websites</h3>
          <p className="mw-sdash__quiz-meta">Answered 15 of 22 questions</p>
        </div>
        <Link href="/student-quiz" className="mw-idash__btn mw-idash__btn--primary">
          Continue quiz
        </Link>
      </section>

      <div className="mw-idash__stats mw-idash__stats--3">
        {STATS.map((stat) => (
          <article key={stat.label} className={`mw-idash__stat mw-idash__stat--${stat.tone}`}>
            <p className="mw-idash__stat-label">{stat.label}</p>
            <p className="mw-idash__stat-value">{stat.value}</p>
            <p className="mw-idash__stat-trend">{stat.trend}</p>
          </article>
        ))}
      </div>

      <div className="mw-sdash__split">
        <section className="mw-idash__card mw-sdash__continue-card">
          <div className="mw-idash__card-head">
            <div>
              <h3 className="mw-idash__card-title">Continue learning</h3>
              <p className="mw-idash__card-sub">Pick up where you left off</p>
            </div>
            <Link href="/student-courses" className="mw-idash__link">
              My courses
            </Link>
          </div>
          <div className="mw-sdash__course-continue">
            <img src={assetPath("img/course/course-04.jpg")} alt="" className="mw-sdash__course-continue-img" />
            <div>
              <Link href="/course-details" className="mw-sdash__course-continue-title">
                Build Responsive Real World Websites
              </Link>
              <p className="mw-sdash__course-continue-meta">Lesson 8 of 24 · Web Development</p>
              <div className="mw-sdash__progress-row">
                <div className="mw-sdash__progress-track">
                  <span style={{ width: "42%" }} />
                </div>
                <span className="mw-sdash__progress-pct">42%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mw-idash__card mw-sdash__streak-card">
          <h3 className="mw-idash__card-title">Learning streak</h3>
          <p className="mw-sdash__streak-value">7 days</p>
          <p className="mw-idash__card-sub">Keep it up — you are on a roll this week.</p>
          <ul className="mw-sdash__streak-days" aria-label="Weekly activity">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
              <li key={`${day}-${i}`} className={i < 5 ? "is-done" : ""}>
                <span>{day}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mw-sdash__insights">
        <div className="mw-idash__page-head" style={{ marginBottom: "1rem" }}>
          <h3 className="mw-idash__page-title" style={{ fontSize: "1.25rem" }}>
            AI learning insights
          </h3>
          <p className="mw-idash__page-meta">Personalized recommendations based on your progress</p>
        </div>
        <div className="mw-sdash__insights-grid">
          {INSIGHTS.map((item) => (
            <article key={item.title} className={`mw-sdash__insight mw-sdash__insight--${item.variant}`}>
              <span className="mw-sdash__insight-badge">{item.badge}</span>
              <h4 className="mw-sdash__insight-title">{item.title}</h4>
              <p className="mw-sdash__insight-desc">{item.desc}</p>
              {"progress" in item && item.progress ? (
                <div className="mw-sdash__progress-row">
                  <div className="mw-sdash__progress-track mw-sdash__progress-track--light">
                    <span style={{ width: `${item.progress}%` }} />
                  </div>
                  <span className="mw-sdash__progress-pct mw-sdash__progress-pct--light">{item.progress}%</span>
                </div>
              ) : null}
              {"href" in item && item.href ? (
                <Link href={item.href} className="mw-sdash__insight-link">
                  View course →
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      <div className="mw-sdash__split">
        <section className="mw-idash__card">
          <div className="mw-idash__card-head">
            <h3 className="mw-idash__card-title">Recent invoices</h3>
          </div>
          <ul className="mw-sdash__list">
            {INVOICES.map((inv) => (
              <li key={inv.id} className="mw-sdash__list-item">
                <div>
                  <p className="mw-sdash__list-title">{inv.title}</p>
                  <p className="mw-sdash__list-meta">
                    {inv.id} · <span>{inv.amt}</span>
                  </p>
                </div>
                <span className="mw-idash__status mw-idash__status--published">Paid</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mw-idash__card">
          <div className="mw-idash__card-head">
            <h3 className="mw-idash__card-title">Latest quizzes</h3>
            <Link href="/student-quiz" className="mw-idash__link">
              View all
            </Link>
          </div>
          <ul className="mw-sdash__list">
            {QUIZZES.map((q) => (
              <li key={q.date} className="mw-sdash__list-item">
                <div>
                  <p className="mw-sdash__list-title">Sketch from A to Z (2024)</p>
                  <p className="mw-sdash__list-meta">
                    Correct: {q.score} · {q.date}
                  </p>
                </div>
                <span className="mw-sdash__score-pill">{q.pct}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
