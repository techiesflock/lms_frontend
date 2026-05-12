import Link from "next/link";
import { testimonialCards } from "@/config/homeLanding";
import { assetPath } from "@/lib/assetPath";

export function TestimonialsHomeSection() {
  return (
    <div className="testimonials-section testimonials-sec-one text-center">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Testimonials
          </span>
          <h2>What Our Students Say</h2>
          <p>Words from those who’ve experienced real growth.</p>
        </div>
        <div className="testimonials-slider lazy mt-4">
          {testimonialCards.map((t, i) => (
            <div key={`${t.name}-${i}`}>
              <div
                className="testimonials-item rounded-3 bg-white"
                {...(!("hideAos" in t) || !t.hideAos ? { "data-aos": "flip-right" as const } : {})}
              >
                <div className="position-relative d-inline-flex">
                  <div className="avatar rounded-circle avatar-xxl border border-white border-3">
                    <Link href="/student-details">
                      <img className="img-fluid rounded-circle" src={assetPath(t.avatar)} alt="" />
                    </Link>
                  </div>
                  <i className="isax isax-quote-up5 bg-secondary quote rounded-pill fs-16 p-1" />
                </div>
                <h3 className="sub-title fw-medium mb-1">
                  <Link href="/student-details">{t.name}</Link>
                </h3>
                <p className="designation">{t.role}</p>
                <p className="mb-3 text-truncate line-clamb-2">{t.quote}</p>
                <div>
                  {[0, 1, 2, 3, 4].map((s) => (
                    <i key={s} className="fa-solid fa-star text-warning" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
