import Link from "next/link";
import type { ReactNode } from "react";
import { BlogModernSidebar } from "./BlogModernSidebar";

const LAYOUT_LINKS = [
  { href: "/blog-grid", label: "1 col" },
  { href: "/blog-2-grid", label: "2 col" },
  { href: "/blog-3-grid", label: "3 col" },
  { href: "/blog-carousal", label: "Carousel" },
  { href: "/blog-masonry", label: "Masonry" },
  { href: "/blog-left-sidebar", label: "Left sidebar" },
  { href: "/blog-right-sidebar", label: "Right sidebar" },
];

type BlogPageLayoutProps = {
  title?: string;
  description?: string;
  sidebar?: "none" | "left" | "right";
  showLayoutLinks?: boolean;
  compactHero?: boolean;
  children: ReactNode;
};

export function BlogPageLayout({
  title = "Insights & stories",
  description = "Expert perspectives on learning, technology, and career growth from the MetaWaves team.",
  sidebar = "none",
  showLayoutLinks = true,
  compactHero = false,
  children,
}: BlogPageLayoutProps) {
  return (
    <section
      className={`mw-blog-page mw-catalog-page mw-catalog-page--elevated${compactHero ? " mw-blog-page--compact" : ""}`}
    >
      <div className="container">
        {compactHero ? (
          <Link href="/blog-grid" className="mw-blog-back">
            ← Back to blog
          </Link>
        ) : null}

        {!compactHero ? (
          <div className="mw-catalog-hero" role="banner">
            <div className="mw-catalog-hero__mesh" aria-hidden />
            <div className="mw-catalog-hero__orb mw-catalog-hero__orb--1" aria-hidden />
            <div className="mw-catalog-hero__orb mw-catalog-hero__orb--2" aria-hidden />

            <div className="mw-catalog-hero__content">
              <nav className="mw-catalog-breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span aria-hidden="true">/</span>
                <span>Blog</span>
              </nav>
              <span className="mw-catalog-header__label">MetaWaves blog</span>
              <h1 className="mw-catalog-header__title">
                {title.split(" ").length > 1 ? (
                  <>
                    {title.split(" ")[0]}{" "}
                    <span className="mw-catalog-header__accent">{title.split(" ").slice(1).join(" ")}</span>
                  </>
                ) : (
                  <span className="mw-catalog-header__accent">{title}</span>
                )}
              </h1>
              <p className="mw-catalog-header__desc">{description}</p>

              {showLayoutLinks ? (
                <div className="mw-blog-layout-links" role="list" aria-label="Blog layout demos">
                  {LAYOUT_LINKS.map((link) => (
                    <Link key={link.href} href={link.href} className="mw-blog-layout-link" role="listitem">
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <div
          className={`mw-blog-layout${sidebar === "left" ? " mw-blog-layout--sidebar-left" : ""}${sidebar === "right" ? " mw-blog-layout--sidebar-right" : ""}`}
        >
          {sidebar === "left" ? <BlogModernSidebar /> : null}
          <div className="mw-blog-layout__main">{children}</div>
          {sidebar === "right" ? <BlogModernSidebar /> : null}
        </div>
      </div>
    </section>
  );
}
