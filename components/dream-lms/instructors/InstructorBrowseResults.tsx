import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { BROWSE_INSTRUCTORS } from "./instructorBrowseData";

type Instructor = (typeof BROWSE_INSTRUCTORS)[number];

function InstructorGridCard({ instructor }: { instructor: Instructor }) {
  return (
    <article className="mw-instructor-card">
      <Link href="/instructor-details" className="mw-instructor-card__photo">
        <img src={assetPath(instructor.img)} alt="" />
        <span className="mw-instructor-card__verified" aria-label="Verified instructor">
          <img src={assetPath("img/icons/verify-icon.svg")} alt="" />
        </span>
      </Link>
      <div className="mw-instructor-card__body">
        <p className="mw-instructor-card__rating">
          <i className="fa-solid fa-star" aria-hidden="true" />
          {instructor.rating} ({instructor.reviews} reviews)
        </p>
        <h3 className="mw-instructor-card__name">
          <Link href="/instructor-details">{instructor.name}</Link>
        </h3>
        <p className="mw-instructor-card__role">{instructor.role}</p>
        <div className="mw-instructor-card__meta">
          <span>{instructor.lessons} lessons</span>
          <span>{instructor.time}</span>
        </div>
        <Link href="/instructor-details" className="mw-instructor-card__cta">
          View profile
        </Link>
      </div>
    </article>
  );
}

export function InstructorBrowseGridResults() {
  return (
    <div className="mw-instructor-grid">
      {BROWSE_INSTRUCTORS.map((instructor) => (
        <InstructorGridCard key={instructor.id} instructor={instructor} />
      ))}
    </div>
  );
}

export function InstructorBrowseListResults() {
  return (
    <ul className="mw-instructor-list">
      {BROWSE_INSTRUCTORS.slice(0, 3).map((instructor) => (
        <li key={instructor.id} className="mw-instructor-list-item">
          <Link href="/instructor-details" className="mw-instructor-list-item__photo">
            <img src={assetPath(instructor.img)} alt="" />
          </Link>
          <div className="mw-instructor-list-item__body">
            <div className="mw-instructor-list-item__head">
              <div>
                <h3 className="mw-instructor-list-item__name">
                  <Link href="/instructor-details">{instructor.name}</Link>
                </h3>
                <p className="mw-instructor-list-item__role">{instructor.role}</p>
              </div>
              <p className="mw-instructor-list-item__rating">
                <i className="fa-solid fa-star" aria-hidden="true" />
                {instructor.rating} ({instructor.reviews})
              </p>
            </div>
            <p className="mw-instructor-list-item__bio">
              Expert instructor helping learners build job-ready skills through structured, project-based courses.
            </p>
            <div className="mw-instructor-list-item__meta">
              <span>{instructor.lessons} lessons</span>
              <span>{instructor.time}</span>
              <span>50+ students</span>
            </div>
            <div className="mw-instructor-list-item__tags">
              <span>Web Development</span>
              <span>Design</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
