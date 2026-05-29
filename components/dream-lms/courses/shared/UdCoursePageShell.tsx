import Link from "next/link";
import type { ReactNode } from "react";

export type UdBreadcrumbItem = { label: string; href?: string };

type UdCoursePageShellProps = {
  title: string;
  subtitle?: string;
  breadcrumbs: UdBreadcrumbItem[];
  children: ReactNode;
  /** Watch player — dark header, no marketing hero */
  variant?: "default" | "minimal";
  className?: string;
};

export function UdCoursePageShell({
  title,
  subtitle,
  breadcrumbs,
  children,
  variant = "default",
  className = "",
}: UdCoursePageShellProps) {
  return (
    <div className={`ud-course-page ud-flow-page ${className}`.trim()}>
      {variant === "default" ? (
        <section className="ud-flow-hero">
          <div className="container">
            <nav className="ud-breadcrumb" aria-label="Breadcrumb">
              {breadcrumbs.map((item, index) => (
                <span key={`${item.label}-${index}`} className="ud-flow-crumb-item">
                  {index > 0 ? (
                    <span className="ud-flow-crumb-sep" aria-hidden="true">
                      ›
                    </span>
                  ) : null}
                  {item.href ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <span className="ud-breadcrumb-current">{item.label}</span>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="ud-hero-title">{title}</h1>
            {subtitle ? <p className="ud-hero-subtitle">{subtitle}</p> : null}
          </div>
        </section>
      ) : null}
      <div className={variant === "minimal" ? "ud-flow-body ud-flow-body--flush" : "ud-flow-body"}>
        {children}
      </div>
    </div>
  );
}
