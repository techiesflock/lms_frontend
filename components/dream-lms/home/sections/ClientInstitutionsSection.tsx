import { institutionLogos } from "@/config/homeLanding";
import { assetPath } from "@/lib/assetPath";

export function ClientInstitutionsSection() {
  return (
    <section className="client-section">
      <div className="container">
        <h2 className="sub-title fw-medium text-center mb-4">
          Trusted by{" "}
          <span className="text-decoration-underline text-secondary">20+</span> Institutions Around
          the World
        </h2>
        <div className="institutions-slider lazy slider">
          {institutionLogos.map((src, i) => (
            <div key={`institution-${i}-${src}`} className="institutions-items p-1">
              <img className="img-fluid" src={assetPath(src)} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
