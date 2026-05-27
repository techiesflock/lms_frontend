import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";

export function AboutUsBody() {
  const stats = [
    { value: "250K+", label: "Active learners" },
    { value: "1,200+", label: "Expert instructors" },
    { value: "4.8/5", label: "Average learner rating" },
    { value: "190+", label: "Countries reached" },
  ];

  const valueProps = [
    {
      icon: "isax-teacher",
      title: "Mentor-led learning paths",
      body: "Structured, outcome-first programs designed by working professionals from top companies.",
    },
    {
      icon: "isax-video-play",
      title: "Project-based curriculum",
      body: "Build portfolio-ready work in every track so learners can convert skills into real opportunities.",
    },
    {
      icon: "isax-medal-star",
      title: "Job-relevant certifications",
      body: "Industry-aligned assessments and shareable certificates to validate practical competencies.",
    },
  ];

  const leadership = [
    { name: "Nicole Brown", role: "Head of Curriculum", img: "img/user/user-41.jpg" },
    { name: "Adrian Dennis", role: "Director, Instructor Network", img: "img/user/user-42.jpg" },
    { name: "Brenda Slaton", role: "VP, Learner Success", img: "img/user/user-43.jpg" },
  ];

  return (
    <section className="mw-about-page">
      <section className="mw-about-hero">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <span className="mw-about-eyebrow">About MetaWaves</span>
              <h1 className="mw-about-title">Building a future-ready learning ecosystem for ambitious professionals.</h1>
              <p className="mw-about-subtitle">
                We help learners and teams build in-demand skills through expert instruction, applied projects, and
                measurable outcomes.
              </p>
              <div className="mw-about-hero-actions">
                <Link href="/course-grid" className="btn btn-secondary">
                  Explore programs
                </Link>
                <Link href="/become-an-instructor" className="btn btn-outline-primary">
                  Become an instructor
                </Link>
              </div>
              <div className="mw-about-stat-grid">
                {stats.map((item) => (
                  <div key={item.label} className="mw-about-stat-card">
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <div className="mw-about-hero-media">
                <img src={assetPath("img/about/about-2.svg")} alt="Team collaborating on learning experiences" />
                <div className="mw-about-floating-card">
                  <strong>92%</strong>
                  <span>Learners report career growth within 6 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mw-about-values">
        <div className="container">
          <div className="mw-about-section-head">
            <span>Why teams choose MetaWaves</span>
            <h2>Modern learning infrastructure, not just video courses.</h2>
          </div>
          <div className="row g-4">
            {valueProps.map((item) => (
              <div key={item.title} className="col-lg-4 col-md-6">
                <article className="mw-about-value-card">
                  <span className="mw-about-value-icon">
                    <i className={`isax ${item.icon}`} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-about-leadership">
        <div className="container">
          <div className="mw-about-section-head text-center">
            <span>Leadership</span>
            <h2>Guided by operators, educators, and builders.</h2>
          </div>
          <div className="row g-4">
            {leadership.map((item) => (
              <div key={item.name} className="col-lg-4 col-md-6">
                <article className="mw-about-leader-card">
                  <img src={assetPath(item.img)} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mw-about-cta">
        <div className="container">
          <div className="mw-about-cta-box">
            <div>
              <h2>Join MetaWaves and build skills that move careers forward.</h2>
              <p>From first-time learners to enterprise teams, we make high-impact learning simple and measurable.</p>
            </div>
            <div className="mw-about-cta-actions">
              <Link href="/course-grid" className="btn btn-secondary">
                Start learning
              </Link>
              <Link href="/contact-us" className="btn btn-light">
                Talk to our team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export function ContactUsBody() {
  return (
    <section className="mw-contact-page">
      <div className="container">
        <header className="mw-contact-header">
          <span className="mw-contact-eyebrow">Contact MetaWaves</span>
          <h1>Let&apos;s build a better learning experience together.</h1>
          <p>
            Have questions about courses, partnerships, or enterprise training? Our team is here to help with quick,
            practical guidance.
          </p>
        </header>

        <div className="row g-4">
          <div className="col-lg-4">
            <div className="mw-contact-info-stack">
              <article className="mw-contact-info-card">
                <span className="mw-contact-icon">
                  <i className="isax isax-location5" />
                </span>
                <h2>Visit us</h2>
                <p>1364 Still Water Dr, AK 99801, United States</p>
              </article>

              <article className="mw-contact-info-card">
                <span className="mw-contact-icon">
                  <i className="isax isax-headphone5" />
                </span>
                <h2>Call us</h2>
                <p>
                  <a href="tel:+19077897623">+1 (907) 789-7623</a>
                </p>
              </article>

              <article className="mw-contact-info-card">
                <span className="mw-contact-icon">
                  <i className="isax isax-message5" />
                </span>
                <h2>Email</h2>
                <p>
                  <a href="mailto:hello@metawaves.com">hello@metawaves.com</a>
                </p>
              </article>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="mw-contact-form-card">
              <div className="mw-contact-form-head">
                <h2>Send us a message</h2>
                <p>Tell us what you need and we&apos;ll get back within one business day.</p>
              </div>

              <form className="mw-contact-form">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="contact-name">
                      Name
                    </label>
                    <input id="contact-name" type="text" className="form-control form-control-lg" placeholder="Your full name" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="contact-email">
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="form-control form-control-lg"
                      placeholder="name@company.com"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="contact-phone">
                      Phone number
                    </label>
                    <input id="contact-phone" type="text" className="form-control form-control-lg" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label" htmlFor="contact-subject">
                      Subject
                    </label>
                    <input id="contact-subject" type="text" className="form-control form-control-lg" placeholder="How can we help?" />
                  </div>
                  <div className="col-12">
                    <label className="form-label" htmlFor="contact-message">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-control form-control-lg"
                      rows={5}
                      placeholder="Share your goals, team size, or any details that help us support you better."
                    />
                  </div>
                  <div className="col-12 d-grid d-sm-flex justify-content-sm-end">
                    <button type="submit" className="btn btn-secondary btn-lg">
                      Send enquiry
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mw-contact-map">
          <iframe
            title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40686.62603646482!2d-74.03208057194338!3d40.71688115980892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1738829223631!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-100 border-0"
            style={{ minHeight: 340 }}
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
  const perks = [
    {
      icon: "isax-teacher",
      title: "Teach on your schedule",
      body: "Create and publish courses at your own pace, from anywhere in the world.",
    },
    {
      icon: "isax-dollar-circle",
      title: "Earn recurring income",
      body: "Monetize your expertise with transparent payouts and actionable performance insights.",
    },
    {
      icon: "isax-people",
      title: "Reach global learners",
      body: "Build your audience across industries and help professionals level up their careers.",
    },
  ];

  const steps = [
    {
      title: "Apply & get approved",
      body: "Submit your profile, expertise areas, and sample lesson to join the instructor network.",
    },
    {
      title: "Build your course",
      body: "Use our instructor studio to upload videos, resources, quizzes, and assignments.",
    },
    {
      title: "Launch & scale",
      body: "Publish, engage learners, and optimize your course with detailed analytics.",
    },
  ];

  const metrics = [
    { value: "1,200+", label: "Active instructors" },
    { value: "250K+", label: "Learners enrolled" },
    { value: "190+", label: "Countries reached" },
    { value: "4.8/5", label: "Average instructor rating" },
  ];

  return (
    <section className="mw-instructor-page">
      <div className="container">
        <section className="mw-instructor-hero">
          <div className="row g-4 align-items-center">
            <div className="col-lg-7">
              <span className="mw-instructor-eyebrow">Teach with MetaWaves</span>
              <h1>Turn your expertise into income, impact, and a global learning brand.</h1>
              <p>
                Join a high-quality instructor network and teach professionals through structured, outcomes-first
                programs.
              </p>
              <div className="mw-instructor-actions">
                <Link href="/register" className="btn btn-secondary">
                  Apply as instructor
                </Link>
                <Link href="/contact-us" className="btn btn-outline-primary">
                  Talk to instructor team
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="mw-instructor-hero-media">
                <img src={assetPath("img/feature/feature-5.jpg")} alt="Instructor teaching online" />
              </div>
            </div>
          </div>
        </section>

        <section className="mw-instructor-perks">
          <div className="row g-4">
            {perks.map((item) => (
              <div key={item.title} className="col-lg-4 col-md-6">
                <article className="mw-instructor-perk-card">
                  <span className="mw-instructor-perk-icon">
                    <i className={`isax ${item.icon}`} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="mw-instructor-steps">
          <div className="mw-instructor-section-head">
            <span>How it works</span>
            <h2>Start teaching in three clear steps.</h2>
          </div>
          <div className="row g-4">
            {steps.map((step, index) => (
              <div key={step.title} className="col-lg-4">
                <article className="mw-instructor-step-card">
                  <strong>{`0${index + 1}`}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </article>
              </div>
            ))}
          </div>
        </section>

        <section className="mw-instructor-metrics">
          <div className="row g-3">
            {metrics.map((item) => (
              <div key={item.label} className="col-xl-3 col-md-6">
                <div className="mw-instructor-metric-card">
                  <h3>{item.value}</h3>
                  <p>{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mw-instructor-register">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <img className="img-fluid rounded-4" src={assetPath("img/feature/feature-4.jpg")} alt="Create your instructor account" />
            </div>
            <div className="col-lg-6">
              <div className="mw-instructor-register-card">
                <h2>Apply to become an instructor</h2>
                <p>Tell us about your domain expertise and we will guide you through onboarding.</p>
                <form>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label mb-1">Name</label>
                      <input type="text" className="form-control" placeholder="Your full name" />
                    </div>
                    <div className="col-12">
                      <label className="form-label mb-1">Email</label>
                      <input type="email" className="form-control" placeholder="name@company.com" />
                    </div>
                    <div className="col-12">
                      <label className="form-label mb-1">Phone Number</label>
                      <input type="tel" className="form-control" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div className="col-12">
                      <label className="form-label mb-1">Primary expertise</label>
                      <input type="text" className="form-control" placeholder="e.g. Product Design, AI, Data Science" />
                    </div>
                    <div className="col-12 d-grid">
                      <button type="submit" className="btn btn-secondary btn-lg w-100 justify-content-center">
                        Submit application
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="mw-instructor-cta">
          <div className="mw-instructor-cta-box">
            <div>
              <h3>Ready to share your expertise at scale?</h3>
              <p>Build high-impact courses, grow your audience, and teach the next generation of professionals.</p>
            </div>
            <Link href="/register" className="btn btn-light btn-lg">
              Start teaching today
            </Link>
          </div>
        </section>
      </div>
    </section>
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

function PricingCompareCell({ ok }: { ok: boolean }) {
  return (
    <td className="text-center">
      {ok ? (
        <i className="fa-solid fa-check mw-pricing-check" aria-label="Included" />
      ) : (
        <i className="fa-solid fa-minus mw-pricing-minus" aria-label="Not included" />
      )}
    </td>
  );
}

export function PricingPlanBody() {
  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: 19,
      annualPrice: 15,
      desc: "For individuals exploring new skills with curated learning paths.",
      features: ["Access to 50+ courses", "Mobile & desktop learning", "Community support", "Basic certificates"],
      cta: "Get started",
      highlighted: false,
    },
    {
      id: "pro",
      name: "Pro",
      price: 49,
      annualPrice: 39,
      desc: "For professionals who want full catalog access and career-focused tracks.",
      features: [
        "Unlimited course access",
        "Downloadable resources",
        "Priority instructor Q&A",
        "Verified certificates",
        "Learning analytics",
      ],
      cta: "Start Pro plan",
      highlighted: true,
    },
    {
      id: "teams",
      name: "Teams",
      price: 99,
      annualPrice: 79,
      desc: "For companies upskilling teams with admin controls and reporting.",
      features: [
        "Everything in Pro",
        "Team admin dashboard",
        "Custom learning paths",
        "SSO & advanced security",
        "Dedicated success manager",
      ],
      cta: "Contact sales",
      highlighted: false,
    },
  ];

  const compareRows: { label: string; starter: boolean; pro: boolean; teams: boolean }[] = [
    { label: "Course library access", starter: true, pro: true, teams: true },
    { label: "Certificates of completion", starter: true, pro: true, teams: true },
    { label: "Downloadable resources", starter: false, pro: true, teams: true },
    { label: "Instructor Q&A", starter: false, pro: true, teams: true },
    { label: "Learning analytics", starter: false, pro: true, teams: true },
    { label: "Team admin dashboard", starter: false, pro: false, teams: true },
    { label: "Custom branding", starter: false, pro: false, teams: true },
    { label: "Dedicated account manager", starter: false, pro: false, teams: true },
  ];

  return (
    <section className="mw-pricing-page">
      <div className="container">
        <header className="mw-pricing-header text-center">
          <span className="mw-pricing-eyebrow">Simple, transparent pricing</span>
          <h1>Choose the plan that fits your learning goals</h1>
          <p>Start free, upgrade anytime. All plans include a 14-day money-back guarantee.</p>

          <div className="mw-pricing-toggle">
            <span className="mw-pricing-toggle__label">Monthly</span>
            <div className="form-check form-switch m-0">
              <input className="form-check-input" type="checkbox" id="pricingPlanAnnual" aria-label="Toggle annual billing" />
            </div>
            <span className="mw-pricing-toggle__label">
              Annual <span className="mw-pricing-save">Save 20%</span>
            </span>
          </div>
        </header>

        <div className="row g-4 justify-content-center mw-pricing-cards">
          {plans.map((plan) => (
            <div key={plan.id} className="col-lg-4 col-md-6">
              <article className={`mw-pricing-card${plan.highlighted ? " mw-pricing-card--featured" : ""}`}>
                {plan.highlighted ? <span className="mw-pricing-badge">Most popular</span> : null}
                <h2 className="mw-pricing-card__name">{plan.name}</h2>
                <div className="mw-pricing-card__price">
                  <span className="mw-pricing-card__currency">$</span>
                  <span className="mw-pricing-card__amount">{plan.price}</span>
                  <span className="mw-pricing-card__period">/mo</span>
                </div>
                <p className="mw-pricing-card__desc">{plan.desc}</p>
                <ul className="mw-pricing-card__features">
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <i className="fa-solid fa-check" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.id === "teams" ? "/contact-us" : "/checkout"}
                  className={`btn w-100 ${plan.highlighted ? "btn-secondary" : "btn-outline-primary"}`}
                >
                  {plan.cta}
                </Link>
              </article>
            </div>
          ))}
        </div>

        <section className="mw-pricing-compare" aria-labelledby="compare-heading">
          <h2 id="compare-heading" className="mw-pricing-compare__title">
            Compare plans
          </h2>
          <div className="mw-pricing-compare__wrap">
            <table className="mw-pricing-table">
              <thead>
                <tr>
                  <th scope="col">Features</th>
                  <th scope="col">Starter</th>
                  <th scope="col">Pro</th>
                  <th scope="col">Teams</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <PricingCompareCell ok={row.starter} />
                    <PricingCompareCell ok={row.pro} />
                    <PricingCompareCell ok={row.teams} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mw-pricing-cta">
          <div className="mw-pricing-cta-box">
            <div>
              <h3>Need a custom plan for your organization?</h3>
              <p>Talk to our team about enterprise pricing, SSO, and dedicated onboarding.</p>
            </div>
            <Link href="/contact-us" className="btn btn-light btn-lg">
              Contact sales
            </Link>
          </div>
        </section>
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
                Welcome to MetaWaves. By accessing or using our platform, you agree to comply with and be bound by the
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
                MetaWaves may update these Terms & Conditions periodically. Any changes will be communicated through the
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
              At MetaWaves, we are committed to protecting your privacy. This policy outlines how we handle your
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
                <a href="mailto:hello@metawaves.com">hello@metawaves.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
