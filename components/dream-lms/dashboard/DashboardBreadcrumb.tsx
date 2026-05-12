import Link from "next/link";

export type DashboardCrumb = { label: string; href?: string };

type DashboardBreadcrumbProps = {
  title: string;
  crumbs?: DashboardCrumb[];
};

export function DashboardBreadcrumb({ title, crumbs }: DashboardBreadcrumbProps) {
  const items = crumbs ?? [
    { label: "Home", href: "/" },
    { label: title },
  ];

  return (
    <div className="breadcrumb-bar text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <h2 className="breadcrumb-title mb-2">{title}</h2>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center mb-0">
                {items.map((c, i) => {
                  const isLast = i === items.length - 1;
                  return (
                    <li
                      key={`${c.label}-${i}`}
                      className={`breadcrumb-item${isLast ? " active" : ""}`}
                      {...(isLast ? { "aria-current": "page" as const } : {})}
                    >
                      {!isLast && c.href ? (
                        <Link href={c.href}>{c.label}</Link>
                      ) : (
                        c.label
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
