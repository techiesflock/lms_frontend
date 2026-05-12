import Link from "next/link";
import type { CatalogCourseItem } from "@/config/courseCatalog";
import { assetPath } from "@/lib/assetPath";

export function CourseCatalogGridResults({ courses }: { courses: CatalogCourseItem[] }) {
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
