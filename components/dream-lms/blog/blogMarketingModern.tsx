import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { BlogModernCard } from "./BlogModernCard";
import { BlogPageLayout } from "./BlogPageLayout";
import { SAMPLE_POSTS } from "./blogMarketingBodies";

export function BlogGridOneModern() {
  return (
    <BlogPageLayout title="Insights & stories" showLayoutLinks>
      <div className="mw-blog-grid mw-blog-grid--1">
        {SAMPLE_POSTS.slice(0, 3).map((post) => (
          <BlogModernCard key={post.id} post={post} featured />
        ))}
      </div>
    </BlogPageLayout>
  );
}

export function BlogTwoGridModern() {
  return (
    <BlogPageLayout title="Latest articles" description="Two-column grid of our most recent posts.">
      <div className="mw-blog-grid mw-blog-grid--2">
        {SAMPLE_POSTS.slice(3, 9).map((post) => (
          <BlogModernCard key={post.id} post={post} />
        ))}
      </div>
    </BlogPageLayout>
  );
}

export function BlogThreeGridModern() {
  return (
    <BlogPageLayout title="Explore topics" description="Browse articles across development, design, and learning.">
      <div className="mw-blog-grid mw-blog-grid--3">
        {SAMPLE_POSTS.slice(6, 15).map((post) => (
          <BlogModernCard key={post.id} post={post} />
        ))}
      </div>
    </BlogPageLayout>
  );
}

export function BlogCarousalModern() {
  const posts = SAMPLE_POSTS.slice(6, 12);
  return (
    <BlogPageLayout title="Featured reads" description="Swipe through highlighted stories from our editors.">
      <div className="mw-blog-carousel" role="region" aria-label="Featured blog posts">
        {posts.map((post) => (
          <div key={post.id} className="mw-blog-carousel__slide">
            <BlogModernCard post={post} />
          </div>
        ))}
      </div>
    </BlogPageLayout>
  );
}

export function BlogMasonryModern() {
  const columns = [
    SAMPLE_POSTS.slice(6, 9),
    SAMPLE_POSTS.slice(7, 10),
    SAMPLE_POSTS.slice(8, 11),
  ];
  return (
    <BlogPageLayout title="Editor picks" description="A masonry-style layout for varied article lengths.">
      <div className="mw-blog-masonry">
        {columns.map((col, ci) => (
          <div key={`col-${ci}`} className="mw-blog-masonry__col">
            {col.map((post, pi) => (
              <BlogModernCard key={`${post.id}-${ci}-${pi}`} post={post} />
            ))}
          </div>
        ))}
      </div>
    </BlogPageLayout>
  );
}

export function BlogLeftSidebarModern() {
  return (
    <BlogPageLayout sidebar="left" showLayoutLinks>
      <div className="mw-blog-grid mw-blog-grid--2">
        {SAMPLE_POSTS.slice(6, 12).map((post) => (
          <BlogModernCard key={post.id} post={post} />
        ))}
      </div>
    </BlogPageLayout>
  );
}

export function BlogRightSidebarModern() {
  return (
    <BlogPageLayout sidebar="right" showLayoutLinks>
      <div className="mw-blog-grid mw-blog-grid--2">
        {SAMPLE_POSTS.slice(6, 12).map((post) => (
          <BlogModernCard key={post.id} post={post} />
        ))}
      </div>
    </BlogPageLayout>
  );
}

function BlogDetailsArticleModern() {
  return (
    <article className="mw-blog-detail">
      <img
        src={assetPath("img/blog/blog-detail-image.jpg")}
        alt=""
        className="mw-blog-detail__hero-img"
      />

      <div className="mw-blog-detail__meta">
        <Link href="/instructor-details" className="mw-blog-detail__author">
          <img src={assetPath("img/user/user-52.jpg")} alt="" />
          <span>John Miller</span>
        </Link>
        <time dateTime="2024-04-20">20 Apr 2024</time>
        <span>Programming, Web Design</span>
      </div>

      <h1 className="mw-blog-detail__title">Learn web app development from experts in 2024</h1>

      <div className="mw-blog-detail__content">
        <p>
          Web app development continues to be one of the most sought-after skills in the tech industry, and 2024 is the
          perfect year to start your journey. With businesses across the globe increasingly relying on web applications
          for their operations, the demand for skilled developers is at an all-time high.
        </p>

        <blockquote className="mw-blog-detail__quote">
          To succeed in web app development, it is crucial to master a range of skills. On the frontend, knowledge of
          HTML5, CSS3, and JavaScript is foundational, along with frameworks like React or Vue.js.
        </blockquote>

        <div className="mw-blog-detail__gallery">
          <img src={assetPath("img/blog/blog-29.jpg")} alt="" />
          <img src={assetPath("img/blog/blog-30.jpg")} alt="" />
        </div>

        <p>
          One of the key advantages of starting in 2024 is the availability of advanced tools, frameworks, and learning
          resources. Frameworks like React, Angular, and Vue.js have matured, making development more efficient and
          user-friendly.
        </p>
        <p>
          If you are ready to embark on this exciting journey, now is the time to invest in your future. With expert
          mentorship, practical experience, and a commitment to continuous learning, you can unlock a world of
          opportunities in web app development in 2024 and beyond.
        </p>
      </div>

      <div className="mw-blog-detail__author-box">
        <img src={assetPath("img/user/user-52.jpg")} alt="" />
        <div>
          <span className="mw-blog-detail__author-label">Written by</span>
          <h2>
            <Link href="/instructor-details">Robert Hollenbeck</Link>
          </h2>
          <p>
            Experienced project manager and consultant with a rich background in digital project execution and freelance
            talent acquisition.
          </p>
        </div>
      </div>

      <nav className="mw-blog-detail__nav" aria-label="Post navigation">
        <Link href="/blog-details" className="mw-blog-detail__nav-prev">
          <span>Previous</span>
          <strong>Transform education with the power of an LMS</strong>
        </Link>
        <Link href="/blog-details" className="mw-blog-detail__nav-next">
          <span>Next</span>
          <strong>Revolutionize learning with a modern LMS</strong>
        </Link>
      </nav>

      <div className="mw-blog-detail__tags">
        <h2>Tags</h2>
        <div className="mw-blog-sidebar__tags">
          {["HTML", "Web Design", "Programming"].map((t) => (
            <Link key={t} href="/blog-grid">
              {t}
            </Link>
          ))}
        </div>
      </div>

      <section className="mw-blog-detail__comments">
        <h2>Leave a comment</h2>
        <form className="mw-blog-comment-form">
          <div className="mw-blog-comment-form__row">
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </div>
          <label>
            Comment
            <textarea name="comment" rows={4} required />
          </label>
          <button type="submit">Post comment</button>
        </form>
      </section>
    </article>
  );
}

export function BlogDetailsModern() {
  return (
    <BlogPageLayout compactHero showLayoutLinks={false}>
      <div className="mw-blog-detail-wrap">
        <BlogDetailsArticleModern />
      </div>
    </BlogPageLayout>
  );
}

export function BlogDetailsLeftSidebarModern() {
  return (
    <BlogPageLayout sidebar="left" compactHero showLayoutLinks={false}>
      <BlogDetailsArticleModern />
    </BlogPageLayout>
  );
}

export function BlogDetailsRightSidebarModern() {
  return (
    <BlogPageLayout sidebar="right" compactHero showLayoutLinks={false}>
      <BlogDetailsArticleModern />
    </BlogPageLayout>
  );
}
