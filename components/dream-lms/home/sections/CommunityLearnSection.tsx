import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const ENROLLED_AVATARS = ["user-01.jpg", "user-03.jpg", "user-07.jpg", "user-08.jpg", "user-06.jpg"];

export function CommunityLearnSection() {
  return (
    <section className="community-to-learn">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="section-header">
              <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                Advanced Learning
              </span>
              <h2>Creating a community of learners.</h2>
              <p>
                We&apos;re dedicated to transforming education by providing a diverse range of
                high-quality courses that cater to learners of all levels.
              </p>
            </div>
            <div className="community-item d-flex align-items-center">
              <span className="community-icon-1">
                <i className="isax isax-book-saved5" />
              </span>
              <div>
                <h3 className="custom-subtitle mb-2">Learn from anywhere</h3>
                <p className="mb-0">
                  Learning from anywhere has become a transform aspect of modern education, allowing
                  individuals.
                </p>
              </div>
            </div>
            <div className="community-item d-flex align-items-center">
              <span className="community-icon-2">
                <i className="isax isax-bookmark5" />
              </span>
              <div>
                <h3 className="custom-subtitle mb-2">Expert Mentors</h3>
                <p className="mb-0">
                  Learning from anywhere has become a transform aspect of modern education, allowing
                  individuals.
                </p>
              </div>
            </div>
            <div className="community-item d-flex align-items-center">
              <span className="community-icon-3">
                <i className="isax isax-chart-26" />
              </span>
              <div>
                <h3 className="custom-subtitle mb-2">Learn in demand skills</h3>
                <p className="mb-0">
                  In today&apos;s rapidly evolving job market, learning in demand skills is crucial
                  for career advancement.
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Link href="/login" className="btn btn-secondary btn-md">
                Enroll as Student
              </Link>
              <Link href="/become-an-instructor" className="btn btn-dark btn-md">
                Apply as Tutor
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="community-img d-none d-lg-flex">
              <img
                src={assetPath("img/shapes/shape-5.png")}
                alt=""
                className="img-fluid community-img-01"
              />
              <img
                src={assetPath("img/shapes/shape-6.png")}
                alt=""
                className="img-fluid community-img-02"
              />
              <img
                src={assetPath("img/feature/feature-2.jpg")}
                alt=""
                className="img-fluid community-img-03"
              />
              <img
                src={assetPath("img/feature/feature-3.jpg")}
                alt=""
                className="img-fluid community-img-04"
              />
              <img
                src={assetPath("img/shapes/shape-7.svg")}
                alt=""
                className="img-fluid community-img-05"
              />
              <div className="community-count p-2">
                <div className="enrolled-list">
                  <div className="avatar-list-stacked mb-2">
                    {ENROLLED_AVATARS.map((u) => (
                      <span key={u} className="avatar avatar-rounded">
                        <img
                          className="border border-white"
                          src={assetPath(`img/user/${u}`)}
                          alt=""
                        />
                      </span>
                    ))}
                  </div>
                  <p className="mb-0">
                    <span className="text-secondary">35K+</span> Students Enrolled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
