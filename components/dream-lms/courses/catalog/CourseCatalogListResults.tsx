import Link from "next/link";
import type { CatalogCourseItem } from "@/config/courseCatalog";
import { assetPath } from "@/lib/assetPath";

export function CourseCatalogListResults({ courses }: { courses: CatalogCourseItem[] }) {
  return (
    <div className="row course-list-wrap">
      {courses.map((c) => {
        const av = c.listAvatar ?? c.authorImg;
        return (
          <div key={c.id} className="col-12">
            <div className="courses-list-item">
              <div className="d-md-flex align-items-center">
                <div className="position-relative overflow-hidden rounded-3 card-image">
                  <Link href="/course-details">
                    <img className="img-fluid rounded-3" src={assetPath(c.image)} alt="" />
                  </Link>
                  <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                    <button type="button" className="like" aria-label="Add to favorites">
                      <i className="isax isax-heart" />
                    </button>
                  </div>
                </div>
                <div className="course-list-contents w-100 ps-0 ps-md-3 pt-4 pt-md-0">
                  <div className="d-flex flex-wrap align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-sm rounded-circle">
                        <Link href="/instructor-details">
                          <img className="img-fluid rounded-circle" src={assetPath(av)} alt="" />
                        </Link>
                      </div>
                      <p className="ms-2">
                        <Link href="/instructor-details">{c.author}</Link>
                      </p>
                    </div>
                    <span>
                      <a href="#" className="tag-btn">
                        {c.category}
                      </a>
                    </span>
                  </div>
                  <h4 className="mt-3 mb-2">
                    <Link href="/course-details">{c.title}</Link>
                  </h4>
                  <div className="d-flex align-items-center">
                    <p className="d-flex align-items-center mb-0">
                      <i className="fa-solid fa-star text-warning me-2" /> {c.rating}
                    </p>
                    <span className="dot" />
                    <p>{c.level}</p>
                  </div>
                  <div className="d-flex justify-content-between mt-3 align-items-center">
                    <h5 className="text-secondary">{c.price}</h5>
                    <Link href="/course-details" className="btn btn-dark btn-sm d-inline-flex align-items-center">
                      Get Course<i className="fs-8 fas fa-angle-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
