import { faqAnswer, faqItems } from "@/config/homeLanding";
import { assetPath } from "@/lib/assetPath";

export function FaqHomeSection() {
  return (
    <div className="faq-section faq-banner-bg">
      <img src={assetPath("img/bg/bg-21.svg")} alt="" className="d-lg-flex d-none faq-bg2" />
      <img src={assetPath("img/bg/bg-22.svg")} alt="" className="d-lg-flex d-none faq-bg3" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="faq-img" data-aos="fade-up">
              <img className="img-fluid rounded-5" src={assetPath("img/feature/feature-4.jpg")} alt="" />
              <span>
                <i className="isax isax-message-question5" />
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="faq-content">
              <div className="section-header" data-aos="fade-up">
                <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                  Your Questions are Answered
                </span>
                <h2 className="mb-1">Frequently Asked Questions</h2>
                <p>Explore detailed answers to the most common questions about our platform.</p>
              </div>
              <div
                className="accordion accordion-customicon1 accordions-items-seperate"
                id="accordioncustomicon1Example"
              >
                {faqItems.map((item) => (
                  <div
                    key={item.id}
                    className="accordion-item"
                    data-aos="fade-up"
                    {...("delay" in item ? { "data-aos-delay": item.delay } : {})}
                  >
                    <h2 className="accordion-header" id={`headingcustomicon1${item.id}`}>
                      <a
                        href="#"
                        className={`accordion-button${item.show ? "" : " collapsed"}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapsecustomicon1${item.id}`}
                        aria-expanded={item.show ? "true" : "false"}
                        aria-controls={`collapsecustomicon1${item.id}`}
                      >
                        {item.question} <i className="isax isax-add fs-20 fw-semibold ms-1" />
                      </a>
                    </h2>
                    <div
                      id={`collapsecustomicon1${item.id}`}
                      className={`accordion-collapse collapse${item.show ? " show" : ""}`}
                    >
                      <div className="accordion-body pt-0">
                        <p>{faqAnswer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
