import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { PUBLIC_INSTRUCTOR_DETAIL } from "./instructorBrowseData";

export function InstructorDetailsModern() {
  const d = PUBLIC_INSTRUCTOR_DETAIL;

  return (
    <section className="mw-instructor-public">
      <div className="container">
        <Link href="/instructor-grid" className="mw-instructor-public__back">
          ← Back to instructors
        </Link>

        <div className="mw-instructor-public__layout">
          <div className="mw-instructor-public__main">
            <article className="mw-instructor-public__hero-card">
              <img src={assetPath(d.img)} alt="" className="mw-instructor-public__avatar" />
              <div>
                <p className="mw-instructor-public__rating">
                  <i className="fa-solid fa-star" aria-hidden="true" />
                  {d.rating} ({d.reviews} reviews)
                </p>
                <h1 className="mw-instructor-public__name">{d.name}</h1>
                <p className="mw-instructor-public__role">{d.role}</p>
                <p className="mw-instructor-public__bio">{d.bio}</p>
                <div className="mw-instructor-public__stats">
                  <span>{d.lessons} lessons</span>
                  <span>{d.students} students</span>
                </div>
                <div className="mw-instructor-public__social" aria-label="Social links">
                  {["facebook-f", "instagram", "x-twitter", "youtube", "linkedin-in"].map((icon) => (
                    <a key={icon} href="#" className="mw-instructor-public__social-btn" aria-label={icon}>
                      <i className={`fa-brands fa-${icon}`} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </article>

            <section className="mw-instructor-public__card">
              <h2>About me</h2>
              <p>{d.about}</p>
            </section>

            <section className="mw-instructor-public__card">
              <h2>Education</h2>
              <ul className="mw-instructor-public__timeline">
                {d.education.map((edu) => (
                  <li key={edu.degree}>
                    <h3>{edu.degree}</h3>
                    <p>
                      {edu.school} · {edu.years}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mw-instructor-public__card">
              <h2>Courses by {d.name.split(" ")[0]}</h2>
              <div className="mw-instructor-public__courses">
                {d.courses.map((c) => (
                  <article key={c.title} className="mw-instructor-public__course">
                    <Link href="/course-details" className="mw-instructor-public__course-thumb">
                      <img src={assetPath(c.img)} alt="" />
                    </Link>
                    <div>
                      <span className="mw-instructor-public__course-tag">{c.tag}</span>
                      <h3>
                        <Link href="/course-details">{c.title}</Link>
                      </h3>
                      <p className="mw-instructor-public__course-price">{c.price}</p>
                      <Link href="/course-details" className="mw-instructor-public__course-cta">
                        View course
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="mw-instructor-public__aside">
            <section className="mw-instructor-public__card">
              <h2>Contact</h2>
              <ul className="mw-instructor-public__contact">
                <li>
                  <span>Email</span>
                  <a href={`mailto:${d.email}`}>{d.email}</a>
                </li>
                <li>
                  <span>Phone</span>
                  <a href={`tel:${d.phone.replace(/\s/g, "")}`}>{d.phone}</a>
                </li>
                <li>
                  <span>Address</span>
                  <span>{d.address}</span>
                </li>
              </ul>
              <Link href="/contact-us" className="mw-instructor-public__contact-btn">
                Send message
              </Link>
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
}
