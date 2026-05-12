import Link from "next/link";
import { categorySlides } from "@/config/homeLanding";
import { assetPath } from "@/lib/assetPath";

export function TopCategoriesSection() {
  return (
    <section className="top-courses-sec">
      <img className="top-courses-bg" src={assetPath("img/bg/bg-20.png")} alt="" />
      <div className="container">
        <div className="section-header text-center">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Our Categories
          </span>
          <h2>Top Courses & Categories</h2>
          <p>
            The right course, guided by an expert mentor, can provide invaluable practical skills
          </p>
        </div>
        <div className="top-courses-slider lazy">
          {categorySlides.map((c, i) => (
            <div key={`${c.title}-${c.icon}-${i}`}>
              <div className="categories-item categories-item-three mb-0">
                <img className="mx-auto" src={assetPath(c.icon)} alt="" />
                <h3 className="title sub-title">
                  <Link href="/course-category">{c.title}</Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
        <Link href="/course-category" className="btn btn-primary btn-md">
          View All Categories
        </Link>
      </div>
    </section>
  );
}
