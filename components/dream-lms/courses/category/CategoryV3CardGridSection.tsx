import Link from "next/link";
import type { CategoryV3Card } from "@/config/courseCategoryPages";
import { assetPath } from "@/lib/assetPath";

export function CategoryV3CardGridSection({ items }: { items: CategoryV3Card[] }) {
  return (
    <section className="course-category-three">
      <div className="container">
        <div className="row">
          {items.map((c) => (
            <div key={c.title} className="col-xl-3 col-lg-4 col-sm-6">
              <Link href="/course-details">
                <div className="category-item-3">
                  <div className="category-item-3-image">
                    <img src={assetPath(c.image)} className="img-fluid" alt="" />
                  </div>
                  <div className="course-category-3-card-body">
                    <h6 className="mb-2">{c.title}</h6>
                    <p>{c.lessons}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
