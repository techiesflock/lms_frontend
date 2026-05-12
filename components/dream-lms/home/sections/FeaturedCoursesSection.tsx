import Link from "next/link";
import { featuredCourses } from "@/config/homeLanding";
import { assetPath } from "@/lib/assetPath";

export function FeaturedCoursesSection() {
  return (
    <section className="featured-courses-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Featured Courses
          </span>
          <h2>What&apos;s New in DreamsLMS</h2>
          <p>Discover our featured courses, specially curated to help you gain in-demand skills</p>
        </div>
        <div className="feature-course-slider-2">
          {featuredCourses.map((course, i) => {
            const detailHref = i === 4 ? "/course-details-2" : "/course-details";
            return (
              <div key={`${course.title}-${i}`}>
                <div className="course-item">
                  <div className="course-img">
                    <Link href={detailHref}>
                      <img src={assetPath(course.image)} alt="" className="img-fluid" />
                    </Link>
                    <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                      <span className="price-badge ms-auto">{course.price}</span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-between">
                    <span className={`badge badge-md ${course.badgeClass} rounded-pill shadow-none`}>
                      {course.badge}
                    </span>
                    <button type="button" className="fav-icon" aria-label="Add to favorites">
                      <i className={i === 3 ? "isax isax-heart5 text-danger" : "isax isax-heart"} />
                    </button>
                  </div>
                  <div className="pb-3 border-bottom mb-3">
                    <h3 className="custom-subtitle">
                      <Link href={detailHref}>{course.title}</Link>
                    </h3>
                  </div>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div className="course-rating">
                      <span className="course-user">
                        <a href="#">
                          <img src={assetPath(course.authorImg)} alt="" className="img-fluid" />
                        </a>
                      </span>
                      <a href="#">{course.author}</a>
                    </div>
                    <div className="d-flex">
                      <span className="d-flex align-items-center rating">
                        <i className="fa-solid fa-star text-warning me-2" />
                        5.0
                      </span>
                    </div>
                  </div>
                  <Link href="/course-details" className="btn buy-course-btn">
                    Buy Course Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <Link href="/course-list" className="btn btn-primary btn-md">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
