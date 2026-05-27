import Link from "next/link";
import { COURSE_CATALOG_ITEMS } from "@/config/courseCatalog";
import { assetPath } from "@/lib/assetPath";
import { CourseCurriculumAccordion } from "./CourseCurriculumAccordion";
import {
  CoursePageNav,
  ExpandAllCurriculumButton,
  ShowMoreDescription,
} from "./CourseDetailsInteractions";

const COURSE = {
  title: "The Complete Web Developer Course 2.0",
  subtitle:
    "Learn Web Development by building 25 websites and mobile apps using HTML, CSS, JavaScript, PHP, and Python.",
  category: "Web Development",
  rating: 4.6,
  ratingsCount: 12847,
  students: 89432,
  price: 49,
  originalPrice: 99,
  discountPercent: 50,
  instructor: "Nicole Brown",
  instructorTitle: "Senior Web Developer & Instructor",
  updated: "May 2026",
  language: "English",
  captions: "English [Auto]",
  level: "All Levels",
  lectures: 92,
  duration: "10h 56m",
  videoPreview: "img/course/video-bg.jpg",
  instructorAvatar: "img/avatar/avatar10.jpg",
};

const LEARNING_OUTCOMES = [
  "Build responsive websites with HTML5, CSS3, and modern JavaScript",
  "Create REST APIs with Node.js and connect them to front-end apps",
  "Deploy full-stack projects to production with best practices",
  "Understand Git, debugging, and professional developer workflows",
  "Design mobile-friendly layouts using Flexbox and CSS Grid",
  "Work with databases, authentication, and real-world project structure",
];

const TOPIC_TAGS = [
  "Web Development",
  "JavaScript",
  "HTML & CSS",
  "Node.js",
  "Full Stack",
  "React",
];

const REQUIREMENTS = [
  "No prior programming experience required — we start from the basics",
  "A computer with internet access (Windows, Mac, or Linux)",
  "Willingness to practice by building projects alongside each module",
];

const INCLUDES = [
  { icon: "fa-circle-play", text: "10.5 hours on-demand video" },
  { icon: "fa-file-arrow-down", text: "92 downloadable resources" },
  { icon: "fa-infinity", text: "Full lifetime access" },
  { icon: "fa-mobile-screen", text: "Access on mobile and TV" },
  { icon: "fa-pen-to-square", text: "Assignments & coding exercises" },
  { icon: "fa-award", text: "Certificate of completion" },
];

/** Udemy-style course detail — MetaWaves brand. */
export function CourseDetailsTwoPageBody() {
  return (
    <div className="ud-course-page">
      <div className="container ud-page-grid">
        {/* Dark hero — left column; purchase card sits in grid sidebar */}
        <section className="ud-hero ud-page-grid__hero">
          <nav className="ud-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Development</Link>
            <span aria-hidden="true">›</span>
            <Link href="/course-grid">{COURSE.category}</Link>
            <span aria-hidden="true">›</span>
            <span className="ud-breadcrumb-current">{COURSE.title}</span>
          </nav>

          <h1 className="ud-hero-title">{COURSE.title}</h1>
          <p className="ud-hero-subtitle">{COURSE.subtitle}</p>

          <div className="ud-hero-badges">
            <span className="ud-badge-bestseller">Bestseller</span>
            <span className="ud-hero-rating">
              <span className="ud-rating-num">{COURSE.rating}</span>
              <UdemyStars rating={COURSE.rating} />
              <Link href="#reviews" className="ud-rating-link">
                ({COURSE.ratingsCount.toLocaleString()} ratings)
              </Link>
            </span>
            <span className="ud-hero-dot" aria-hidden="true">
              ·
            </span>
            <span className="ud-hero-students">{COURSE.students.toLocaleString()} students</span>
          </div>

          <p className="ud-hero-author">
            Created by{" "}
            <Link href="/instructor-details" className="ud-author-link">
              {COURSE.instructor}
            </Link>
          </p>

          <ul className="ud-hero-meta">
            <li>
              <i className="fa-regular fa-calendar" aria-hidden="true" />
              Last updated {COURSE.updated}
            </li>
            <li>
              <i className="fa-solid fa-globe" aria-hidden="true" />
              {COURSE.language}
            </li>
            <li>
              <i className="fa-solid fa-closed-captioning" aria-hidden="true" />
              {COURSE.captions}
            </li>
          </ul>
        </section>

        <aside className="ud-page-grid__sidebar d-none d-lg-block" aria-label="Purchase options">
          <div className="ud-sidebar-sticky-track">
            <CoursePurchaseCard sticky />
          </div>
        </aside>

        <div className="ud-page-grid__main ud-layout-main">
          <div className="d-lg-none ud-mobile-card-wrap">
            <CoursePurchaseCard />
          </div>

          <div className="d-lg-none">
            <CoursePageNav />
          </div>

          <section className="ud-section ud-section-first" id="overview" aria-labelledby="learn-heading">
                <h2 id="learn-heading" className="ud-section-title">
                  What you&apos;ll learn
                </h2>
                <div className="ud-learn-panel">
                  <ul className="ud-learn-grid">
                    {LEARNING_OUTCOMES.map((item) => (
                      <li key={item}>
                        <i className="fa-solid fa-check ud-check-icon" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              <section className="ud-section ud-topics-section" aria-labelledby="topics-heading">
                <h2 id="topics-heading" className="ud-section-title-sm">
                  Explore related topics
                </h2>
                <div className="ud-topic-pills">
                  {TOPIC_TAGS.map((tag) => (
                    <Link key={tag} href="/course-grid" className="ud-topic-pill">
                      {tag}
                    </Link>
                  ))}
                </div>
              </section>

              <section className="ud-section" id="curriculum" aria-labelledby="content-heading">
                <div className="ud-section-head">
                  <h2 id="content-heading" className="ud-section-title mb-0">
                    Course content
                  </h2>
                  <ExpandAllCurriculumButton />
                </div>
                <p className="ud-content-meta">
                  4 sections · {COURSE.lectures} lectures · {COURSE.duration} total length
                </p>
                <div className="ud-curriculum">
                  <CourseCurriculumAccordion idPrefix="ud-cd" lastItemClassName="mb-0" variant="udemy" />
                </div>
              </section>

              <section className="ud-section" aria-labelledby="req-heading">
                <h2 id="req-heading" className="ud-section-title">
                  Requirements
                </h2>
                <ul className="ud-bullet-list">
                  {REQUIREMENTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>

              <section className="ud-section" aria-labelledby="desc-heading">
                <h2 id="desc-heading" className="ud-section-title">
                  Description
                </h2>
                <ShowMoreDescription>
                  <p>
                    Go from zero to job-ready with a structured path through modern web development. Each module
                    combines short lessons with hands-on exercises so you retain what you learn.
                  </p>
                  <p>
                    You will build real projects — a portfolio site, a REST API, and a full-stack app — while learning
                    how professional teams ship code with Git, code reviews, and deployment pipelines.
                  </p>
                  <p>
                    Whether you are switching careers or levelling up, this course gives you the foundations and the
                    confidence to keep learning on your own.
                  </p>
                  <p className="mb-0">
                    By the end, you will have deployed applications you can showcase to employers and understand how the
                    web works end-to-end.
                  </p>
                </ShowMoreDescription>
              </section>
        </div>

        <div className="ud-page-grid__below ud-layout-below">
          <section className="ud-section" id="recommendations" aria-labelledby="related-heading">
                <h2 id="related-heading" className="ud-section-title">
                  Students also bought
                </h2>
                <RelatedCoursesList />
              </section>

              <section className="ud-section" id="instructor" aria-labelledby="instructor-heading">
                <h2 id="instructor-heading" className="ud-section-title">
                  Instructor
                </h2>
                <InstructorBlock />
              </section>

              <section className="ud-section ud-section--last" id="reviews" aria-labelledby="reviews-heading">
                <h2 id="reviews-heading" className="ud-section-title">
                  Reviews
                </h2>
                <CourseReviewsSection />
              </section>
        </div>
      </div>

      <div className="ud-mobile-bar d-lg-none" role="region" aria-label="Purchase">
        <div className="ud-mobile-bar-prices">
          <span className="ud-mobile-price">${COURSE.price}</span>
          <span className="ud-mobile-was">${COURSE.originalPrice}</span>
        </div>
        <div className="ud-mobile-bar-actions">
          <Link href="/cart" className="btn ud-btn-cart ud-mobile-cart-btn">
            Add to cart
          </Link>
          <Link href="/checkout" className="btn ud-btn-primary ud-mobile-cta-btn">
            Buy now
          </Link>
        </div>
      </div>
    </div>
  );
}

function UdemyStars({ rating }: { rating: number }) {
  return (
    <span className="ud-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <i
          key={i}
          className={`fa-solid fa-star${i <= Math.round(rating) ? "" : " ud-star-empty"}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

function CoursePurchaseCard({ sticky = false }: { sticky?: boolean }) {
  return (
    <div className={`ud-purchase-card${sticky ? " ud-purchase-card--sticky" : ""}`}>
      <div className="ud-purchase-video">
        <Link href="https://www.youtube.com/embed/1trvO6dqQUI" target="_blank" rel="noopener noreferrer">
          <img src={assetPath(COURSE.videoPreview)} alt="Preview this course" />
          <span className="ud-play-btn" aria-hidden="true">
            <i className="fa-solid fa-play" />
          </span>
          <span className="ud-preview-label">Preview this course</span>
        </Link>
      </div>

      <div className="ud-purchase-body">
        <div className="ud-price-row">
          <span className="ud-price-current">${COURSE.price}</span>
          <span className="ud-price-was">${COURSE.originalPrice}</span>
          <span className="ud-price-off">{COURSE.discountPercent}% off</span>
        </div>
        <p className="ud-price-note">
          <i className="fa-solid fa-clock me-1" aria-hidden="true" />
          2 days left at this price!
        </p>

        <Link href="/cart" className="btn ud-btn-cart w-100">
          Add to cart
        </Link>
        <Link href="/checkout" className="btn ud-btn-primary w-100">
          Buy now
        </Link>

        <p className="ud-guarantee">30-Day Money-Back Guarantee</p>

        <div className="ud-purchase-divider" />

        <h3 className="ud-includes-title">This course includes:</h3>
        <ul className="ud-includes-list">
          {INCLUDES.map((item) => (
            <li key={item.text}>
              <i className={`fa-solid ${item.icon}`} aria-hidden="true" />
              {item.text}
            </li>
          ))}
        </ul>

        <div className="ud-purchase-actions">
          <button type="button" className="ud-text-btn">
            <i className="fa-regular fa-heart me-1" />
            Wishlist
          </button>
          <button type="button" className="ud-text-btn">
            <i className="fa-solid fa-share-nodes me-1" />
            Share
          </button>
          <button type="button" className="ud-text-btn">
            <i className="fa-solid fa-gift me-1" />
            Gift
          </button>
        </div>
      </div>
    </div>
  );
}

function InstructorBlock() {
  return (
    <div className="ud-instructor-block">
      <div className="d-flex flex-wrap align-items-start gap-3 mb-3">
        <img
          src={assetPath(COURSE.instructorAvatar)}
          alt=""
          className="ud-instructor-avatar rounded-circle"
          width={64}
          height={64}
        />
        <div>
          <Link href="/instructor-details" className="ud-instructor-name">
            {COURSE.instructor}
          </Link>
          <p className="ud-instructor-title mb-0">{COURSE.instructorTitle}</p>
        </div>
      </div>
      <div className="ud-instructor-stats-grid">
        <div>
          <span className="ud-stat-val">
            <i className="fa-solid fa-star text-warning me-1" />
            4.5
          </span>
          <span className="ud-stat-label">Instructor rating</span>
        </div>
        <div>
          <span className="ud-stat-val">270,866</span>
          <span className="ud-stat-label">Reviews</span>
        </div>
        <div>
          <span className="ud-stat-val">892,340</span>
          <span className="ud-stat-label">Students</span>
        </div>
        <div>
          <span className="ud-stat-val">5</span>
          <span className="ud-stat-label">Courses</span>
        </div>
      </div>
      <p className="ud-instructor-bio mb-0">
        {COURSE.instructor} has taught web development for 7+ years, helping students land roles at startups and
        enterprises. Courses focus on practical skills, clean code, and portfolio-ready projects.
      </p>
    </div>
  );
}

function CourseReviewsSection() {
  const distribution = [
    { stars: 5, pct: 72 },
    { stars: 4, pct: 18 },
    { stars: 3, pct: 6 },
    { stars: 2, pct: 3 },
    { stars: 1, pct: 1 },
  ];

  const reviews = [
    {
      name: "Sarah Johnson",
      initials: "SJ",
      date: "2 weeks ago",
      text: "Clear explanations and projects that actually helped me build a portfolio.",
      rating: 5,
    },
    {
      name: "Lucas Garcia",
      initials: "LG",
      date: "1 month ago",
      text: "Solid structure. Would love more advanced backend content.",
      rating: 4,
    },
    {
      name: "Priya Sharma",
      initials: "PS",
      date: "2 months ago",
      text: "Instructor explains complex topics simply. Git and deployment modules were valuable.",
      rating: 5,
    },
  ];

  return (
    <div className="ud-reviews">
      <div className="ud-reviews-summary">
        <div className="ud-reviews-score">
          <span className="ud-reviews-big">{COURSE.rating}</span>
          <UdemyStars rating={COURSE.rating} />
          <p className="mb-0 ud-reviews-label">Course Rating</p>
        </div>
        <div className="ud-reviews-bars">
          {distribution.map((row) => (
            <div className="ud-review-bar-row" key={row.stars}>
              <span className="ud-review-bar-stars">
                <UdemyStars rating={row.stars} />
              </span>
              <div className="ud-review-bar-track">
                <div className="ud-review-bar-fill" style={{ width: `${row.pct}%` }} />
              </div>
              <span className="ud-review-bar-pct">{row.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ud-reviews-list">
        {reviews.map((review) => (
          <article className="ud-review-item" key={review.name}>
            <div className="d-flex gap-3">
              <span className="ud-review-avatar" aria-hidden="true">
                {review.initials}
              </span>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between gap-2 flex-wrap align-items-center">
                  <strong>{review.name}</strong>
                  <span className="ud-review-date">{review.date}</span>
                </div>
                <div className="my-1">
                  <UdemyStars rating={review.rating} />
                </div>
                <p className="mb-0">{review.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button type="button" className="btn ud-btn-outline mt-2">
        Show all reviews
      </button>
    </div>
  );
}

function RelatedCoursesList() {
  return (
    <ul className="ud-related-list">
      {COURSE_CATALOG_ITEMS.slice(0, 4).map((course) => (
        <li key={course.id}>
          <Link href="/course-details" className="ud-related-list-item">
            <img src={assetPath(course.image)} alt="" className="ud-related-list-thumb" />
            <div className="ud-related-list-body">
              <h3 className="ud-related-list-title">{course.title}</h3>
              <p className="ud-related-list-meta">
                {course.rating}
                <i className="fa-solid fa-star ms-1" aria-hidden="true" />
                <span className="mx-1">·</span>
                {course.author}
              </p>
              <div className="d-flex align-items-center justify-content-between gap-2 mt-1">
                <span className="ud-related-list-price">{course.price}</span>
                {course.discountBadge ? (
                  <span className="ud-related-list-badge">{course.discountBadge}</span>
                ) : null}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
