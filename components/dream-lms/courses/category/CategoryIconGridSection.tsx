import Link from "next/link";
import type { CategoryIconTile } from "@/config/courseCategoryPages";
import { assetPath } from "@/lib/assetPath";

export function CategoryIconGridSection({ items }: { items: CategoryIconTile[] }) {
  return (
    <section className="course-category-two">
      <div className="container">
        <div className="row">
          {items.map((c) => (
            <div key={c.title} className="col-xl-3 col-lg-4 col-sm-6">
              <Link href={c.href}>
                <div className="category-item-2">
                  <div className="cat-icon border border-white mx-auto d-flex justify-content-center align-items-center">
                    <img src={assetPath(c.icon)} alt="" />
                  </div>
                  <h6 className="mb-1">{c.title}</h6>
                  <p>{c.count}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
