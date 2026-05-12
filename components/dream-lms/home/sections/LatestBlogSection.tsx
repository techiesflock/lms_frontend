import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const BLOG_GRID_POSTS = [
  {
    img: "img/blog/blog-36.jpg",
    cat: "Productivity",
    title: "The Impact of LMS on Academic Journey Education",
    href: "/blog-details" as const,
  },
  {
    img: "img/blog/blog-38.jpg",
    cat: "Productivity",
    title: "Maximizing Academic Success with the Right LMS",
    href: "/blog-grid" as const,
  },
  {
    img: "img/blog/blog-37.jpg",
    cat: "UI /UX",
    title: "Promoting Health & Well being in Schools",
    href: "/blog-grid" as const,
  },
  {
    img: "img/blog/blog-39.jpg",
    cat: "Development",
    title: "How to Build and Run a Pilot Mentoring Program",
    href: "/blog-grid" as const,
  },
] as const;

export function LatestBlogSection() {
  return (
    <section className="latest-blog-three latest-blog-five">
      <div className="container">
        <div className="section-header text-center" data-aos="fade-up">
          <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
            Articles & Updates
          </span>
          <h2>Our Recent Blog & Articles</h2>
          <p>Explore curated content to enlighten, entertain and engage global readers.</p>
        </div>
        <div className="latest-blog-main">
          <div className="row">
            <div className="col-lg-4">
              <div className="event-blog-three blog-three-one" data-aos="fade-up">
                <div className="blog-img-three">
                  <Link href="/blog-grid">
                    <img className="img-fluid" alt="" src={assetPath("img/blog/blog-35.jpg")} />
                  </Link>
                </div>
                <div className="latest-blog-content">
                  <div className="event-three-title">
                    <div className="event-span-three d-flex align-items-center">
                      <span className="category">Lifestyle</span>
                      <div className="blog-date">
                        <i className="fa-solid fa-calendar" />
                        <span>09 Aug 2025</span>
                      </div>
                    </div>
                    <Link href="/blog-grid">
                      <h3>Why an LMS is Essential for Modern Education</h3>
                    </Link>
                  </div>
                </div>
                <div className="blog-user-top">
                  <a href="#">
                    <img src={assetPath("img/user/user-01.jpg")} alt="" />
                    David Benitez
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                {BLOG_GRID_POSTS.map((post) => (
                  <div key={post.title} className="col-md-6">
                    <div className="event-blog-three blog-three-one" data-aos="fade-up">
                      <div className="blog-img-three">
                        <Link href={post.href}>
                          <img className="img-fluid" alt="" src={assetPath(post.img)} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three d-flex align-items-center">
                            <span className="category">{post.cat}</span>
                            <div className="blog-date">
                              <i className="fa-solid fa-calendar" />
                              <span>09 Aug 2025</span>
                            </div>
                          </div>
                          <h3>
                            <Link href={post.href}>{post.title}</Link>
                          </h3>
                        </div>
                      </div>
                      <div className="blog-user-top">
                        <a href="#">
                          <img src={assetPath("img/user/user-01.jpg")} alt="" />
                          David Benitez
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link className="btn btn-view-all" data-aos="fade-up" href="/blog-grid">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
