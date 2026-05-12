import Link from "next/link";
import { instructorCards } from "@/config/homeLanding";
import { assetPath } from "@/lib/assetPath";

export function FeaturedInstructorsHomeSection() {
  return (
    <div className="featured-instructor-sec">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="fw-medium text-light text-decoration-underline mb-2 d-inline-block">
            Featured Instructors
          </span>
          <h2 className="text-white">Top Class & Professional Instructors </h2>
          <p className="text-light">Empowering Change: Stories from Those Who Took the Leap</p>
        </div>
        <div className="featured-instructor-slider lazy">
          {instructorCards.map((ins, idx) => (
            <div
              key={`${ins.name}-${idx}`}
              className="instructor-item instructor-item-three mb-0"
              data-aos="flip-left"
            >
              <div className="instructors-img ">
                <Link href="/instructor-list" tabIndex={0}>
                  <img className="img-fluid" alt="" src={assetPath(ins.img)} />
                </Link>
                <div className="position-absolute start-0 top-0 d-flex align-items-start w-100 z-index-2 p-2">
                  <span className="verify">
                    <img src={assetPath("img/icons/verify-icon.svg")} alt="" className="img-fluid" />
                  </span>
                  <button type="button" className="favourite ms-auto" aria-label="Add to favorites">
                    <i className="isax isax-heart" />
                  </button>
                </div>
              </div>
              <div className="instructor-content">
                <div>
                  <h3 className="title">
                    <Link href="/instructor-details">{ins.name}</Link>
                  </h3>
                  <span className="designation">{ins.role}</span>
                </div>
                <p className="rating">
                  <i className="fas fa-star me-1" />
                  {ins.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
