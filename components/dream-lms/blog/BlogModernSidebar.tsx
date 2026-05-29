import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const CATEGORIES = [
  { label: "Business", count: 4 },
  { label: "Education", count: 3 },
  { label: "Design", count: 14 },
  { label: "Programming", count: 12 },
  { label: "Web Design", count: 15 },
];

const RECENT = [
  { img: "img/blog/recent-blog-1.jpg", title: "Learn web application development from experts", date: "20 Apr 2024" },
  { img: "img/blog/recent-blog-2.jpg", title: "Expand your career opportunities with Python", date: "16 Apr 2024" },
  { img: "img/blog/recent-blog-3.jpg", title: "Revolutionize learning with a modern LMS", date: "12 Apr 2024" },
];

const TAGS = ["HTML", "JavaScript", "Web Design", "Programming", "Career", "LMS", "Guides"];

export function BlogModernSidebar() {
  return (
    <aside className="mw-blog-sidebar">
      <div className="mw-blog-sidebar__widget">
        <h2 className="mw-blog-sidebar__title">Search</h2>
        <form action="/blog-grid" className="mw-blog-sidebar__search" role="search">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true" />
          <input type="search" name="q" placeholder="Search articles…" aria-label="Search blog" />
        </form>
      </div>

      <div className="mw-blog-sidebar__widget">
        <h2 className="mw-blog-sidebar__title">Categories</h2>
        <ul className="mw-blog-sidebar__categories">
          {CATEGORIES.map((c) => (
            <li key={c.label}>
              <Link href="/blog-grid">
                {c.label}
                <span>{c.count}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="mw-blog-sidebar__widget">
        <h2 className="mw-blog-sidebar__title">Recent posts</h2>
        <ul className="mw-blog-sidebar__recent">
          {RECENT.map((r) => (
            <li key={r.img}>
              <Link href="/blog-details" className="mw-blog-sidebar__recent-thumb">
                <img src={assetPath(r.img)} alt="" />
              </Link>
              <div>
                <Link href="/blog-details" className="mw-blog-sidebar__recent-title">
                  {r.title}
                </Link>
                <time>{r.date}</time>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mw-blog-sidebar__widget">
        <h2 className="mw-blog-sidebar__title">Tags</h2>
        <div className="mw-blog-sidebar__tags">
          {TAGS.map((t) => (
            <Link key={t} href="/blog-grid">
              {t}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
