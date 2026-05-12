import { benefitCards } from "@/config/homeLanding";
import { assetPath } from "@/lib/assetPath";

export function BenefitSection() {
  return (
    <section className="benefit-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Our Benefits
          </span>
          <h2>Master the Skills to Drive your Career</h2>
          <p>
            The right course, guided by an expert mentor, can provide invaluable insights,
            practical skills.
          </p>
        </div>
        <div className="row">
          {benefitCards.map((card) => (
            <div key={card.title} className="col-lg-4 col-md-6">
              <div className="card shadow-sm">
                <div className="card-body p-4">
                  <div className="position-absolute top-0 end-0 mt-n3 me-n4">
                    <img src={assetPath(card.shape)} alt="" />
                  </div>
                  <div className={`p-4 rounded-pill ${card.pillClass} d-inline-flex`}>
                    <i className={card.iconClass} />
                  </div>
                  <h3 className="custom-title mt-3 mb-1">{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
