import { assetPath } from "@/lib/assetPath";

export function CategoryHeroSearchSection({
  bgSvg,
  bgPng,
  svgImgClass = "course-bg",
}: {
  bgSvg: string;
  bgPng: string;
  svgImgClass?: string;
}) {
  return (
    <div className="container">
      <section className="categories-top bg-light border">
        <img src={assetPath(bgSvg)} alt="" className={`d-none d-lg-flex ${svgImgClass}`} />
        <img src={assetPath(bgPng)} alt="" className="d-none d-lg-flex course-bg2" />
        <div className="row align-items-center">
          <div className="col-lg-7 col-12">
            <div className="caetgory-form">
              <h2 className="mb-2">Browse by Categories</h2>
              <p>Take the first step towards achieving your goals with our comprehensive online courses.</p>
              <form className="position-relative" action="#" method="get">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search School, Online educational centres, etc"
                />
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
