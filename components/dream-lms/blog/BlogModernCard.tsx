import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import type { BlogCardPost } from "./blogMarketingBodies";

export function BlogModernCard({ post, featured }: { post: BlogCardPost; featured?: boolean }) {
  return (
    <article className={`mw-blog-card${featured ? " mw-blog-card--featured" : ""}`}>
      <Link href="/blog-details" className="mw-blog-card__image">
        <img src={assetPath(post.image)} alt="" />
        {post.badge ? <span className="mw-blog-card__badge">{post.badge}</span> : null}
      </Link>
      <div className="mw-blog-card__body">
        <h2 className="mw-blog-card__title">
          <Link href="/blog-details">{post.title}</Link>
        </h2>
        <p className="mw-blog-card__excerpt">{post.excerpt}</p>
        <footer className="mw-blog-card__meta">
          <Link href="/instructor-details" className="mw-blog-card__author">
            <img src={assetPath(post.authorImg)} alt="" />
            <span>{post.authorName}</span>
          </Link>
          <span className="mw-blog-card__date">{post.date}</span>
          {post.tagsLine ? <span className="mw-blog-card__tags">{post.tagsLine}</span> : null}
        </footer>
      </div>
    </article>
  );
}
