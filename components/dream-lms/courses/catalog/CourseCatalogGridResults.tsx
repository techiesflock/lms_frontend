import Link from "next/link";
import type { CatalogCourseItem } from "@/config/courseCatalog";
import { assetPath } from "@/lib/assetPath";
import { formatReviewCount, parseCatalogRating } from "./catalogUtils";

type CourseCatalogGridResultsProps = {
  courses: CatalogCourseItem[];
  modern?: boolean;
};

function CatalogStars({ score }: { score: string }) {
  const value = Number.parseFloat(score);
  const rounded = Number.isNaN(value) ? 0 : Math.round(value);

  return (
    <span className="mw-course-card__stars" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((star) => (
        <i key={star} className={`fa-solid fa-star${star <= rounded ? "" : " mw-star-muted"}`} />
      ))}
    </span>
  );
}

export function CourseCatalogGridResults({ courses, modern = false }: CourseCatalogGridResultsProps) {
  if (!modern) {
    return (
      <div className="row">
        {courses.map((c) => (
          <div key={c.id} className="col-xl-4 col-md-6">
            <div className="course-item-two course-item mx-0">
              <div className="course-img">
                <Link href="/course-details">
                  <img src={assetPath(c.image)} alt="" className="img-fluid" />
                </Link>
                <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-3">
                  {c.discountBadge ? <div className="badge text-bg-danger">{c.discountBadge}</div> : null}
                  <button type="button" className="fav-icon ms-auto" aria-label="Add to favorites">
                    <i className="isax isax-heart" />
                  </button>
                </div>
              </div>
              <div className="course-content">
                <div className="d-flex justify-content-between mb-2">
                  <div className="d-flex align-items-center">
                    <Link href="/instructor-details" className="avatar avatar-sm">
                      <img
                        src={assetPath(c.authorImg)}
                        alt=""
                        className="img-fluid avatar avatar-sm rounded-circle"
                      />
                    </Link>
                    <div className="ms-2">
                      <Link href="/instructor-details" className="link-default fs-14">
                        {c.author}
                      </Link>
                    </div>
                  </div>
                  <span className="badge badge-light rounded-pill bg-light d-inline-flex align-items-center fs-13 fw-medium mb-0">
                    {c.category}
                  </span>
                </div>
                <h6 className="title mb-2">
                  <Link href="/course-details">{c.title}</Link>
                </h6>
                <p className="d-flex align-items-center mb-3">
                  <i className="fa-solid fa-star text-warning me-2" />
                  {c.rating}
                </p>
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="text-secondary mb-0">{c.price}</h5>
                  <Link href="/course-details" className="btn btn-dark btn-sm d-inline-flex align-items-center">
                    View Course<i className="isax isax-arrow-right-3 ms-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mw-course-grid">
      {courses.map((course) => {
        const { score, count } = parseCatalogRating(course.rating);
        const reviewLabel = count ? `(${formatReviewCount(count)})` : "";

        return (
          <article key={course.id} className="mw-course-card">
            <Link href="/course-details" className="mw-course-card__media-link">
              <div className="mw-course-card__media">
                <img src={assetPath(course.image)} alt="" className="mw-course-card__img" />
                {course.discountBadge ? (
                  <span className="mw-course-card__badge">{course.discountBadge}</span>
                ) : null}
              </div>
            </Link>

            <div className="mw-course-card__body">
              <div className="mw-course-card__top">
                <span className="mw-course-card__category">{course.category}</span>
                <button type="button" className="mw-course-card__wishlist" aria-label="Add to wishlist">
                  <i className="fa-regular fa-heart" aria-hidden="true" />
                </button>
              </div>

              <h3 className="mw-course-card__title">
                <Link href="/course-details">{course.title}</Link>
              </h3>

              <p className="mw-course-card__instructor">
                <Link href="/instructor-details">{course.author}</Link>
              </p>

              <div className="mw-course-card__meta">
                <span className="mw-course-card__rating">
                  <span className="mw-course-card__rating-num">{score}</span>
                  <CatalogStars score={score} />
                  {reviewLabel ? <span className="mw-course-card__rating-count">{reviewLabel}</span> : null}
                </span>
                <span className="mw-course-card__level">{course.level}</span>
              </div>

              <div className="mw-course-card__footer">
                <span className="mw-course-card__price">{course.price}</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
