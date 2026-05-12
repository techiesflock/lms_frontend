import { brandStripLogos } from "@/config/homeLanding";
import { assetPath } from "@/lib/assetPath";

export function BrandStripSection() {
  return (
    <div className="cliets-section-one">
      <div className="brand-slide">
        {brandStripLogos.map((src, i) => (
          <div key={`brand-${i}-${src}`}>
            <img src={assetPath(src)} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
