import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

/** Sidebar from `blog-left-sidebar.html` / `blog-right-sidebar.html`. */
export function BlogSidebar() {
  const categories = [
    { label: "Business", count: "04" },
    { label: "Education", count: "03" },
    { label: "Graphics Design", count: "14" },
    { label: "Programming", count: "12" },
    { label: "Web Design", count: "15" },
  ];
  const recent = [
    { img: "img/blog/recent-blog-1.jpg", title: "Learn Webs Applications Development from Experts", date: "20 Apr 2024" },
    { img: "img/blog/recent-blog-2.jpg", title: "Expand Your Career Opportunities With Python", date: "16 Apr 2024" },
    { img: "img/blog/recent-blog-3.jpg", title: "Learn Webs Applications Development from Experts", date: "12 Apr 2024" },
  ];
  const tags = ["HTML", "Javascript", "Benefits", "Web Design", "Programming", "Career Growth", "Guidelines"];
  return (
    <div className="col-lg-4 sidebar-left mt-4 mt-lg-0 theiaStickySidebar">
      <div className="search-widget blog-search blog-widget">
        <div>
          <h5 className="mb-3 fs-18">Search</h5>
          <form className="search-form">
            <div className="position-relative">
              <input type="text" placeholder="Search..." className="form-control" />
              <button type="submit" className="search-btn">
                <i className="isax isax-search-normal-1" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="blog-widget">
        <h5 className="fs-18 mb-3">Categories</h5>
        <div className="categories-list">
          {categories.map((c) => (
            <h6 key={c.label}>
              <a href="#">
                <i className="isax isax-arrow-right-3 fs-14 text-secondary fw-bold" />
                {c.label}
                <span className="float-end">{c.count}</span>
              </a>
            </h6>
          ))}
        </div>
      </div>

      <div className="blog-widget">
        <h5 className="fs-18 mb-3">Recent Blogs</h5>
        <ul className="recent-blog-list">
          {recent.map((r, i) => (
            <li key={r.img} className={i === recent.length - 1 ? "mb-0" : undefined}>
              <div className="post-thumb">
                <Link href="/blog-details">
                  <img className="img-fluid" src={assetPath(r.img)} alt="" />
                </Link>
              </div>
              <div className="post-info">
                <h6 className="text-truncate line-clamb-2">
                  <Link href="/blog-details">{r.title}</Link>
                </h6>
                <p className="d-flex align-items-center">
                  <img className="img-fluid me-1" src={assetPath("img/icons/calendar2.svg")} alt="" />
                  {r.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="blog-widget">
        <h5 className="fs-18 mb-3">Latest Tags</h5>
        <div className="card-body">
          <ul className="latest-tags">
            {tags.map((t) => (
              <li key={t}>
                <a href="#" className="tag rounded-1 p-2 fs-10 fw-medium d-flex">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
