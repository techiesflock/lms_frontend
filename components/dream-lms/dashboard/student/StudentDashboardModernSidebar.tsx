import Link from "next/link";
import { BrandLogo } from "@/components/dream-lms/shared/BrandLogo";
import { StudentNavIcon } from "./StudentNavIcon";
import { STUDENT_NAV_SECTIONS, isStudentNavActive } from "./student-nav-config";

export function StudentDashboardModernSidebar({ activeHref }: { activeHref: string }) {
  return (
    <aside className="mw-idash__sidebar">
      <div className="mw-idash__sidebar-brand">
        <BrandLogo href="/" height={32} />
        <span className="mw-idash__sidebar-badge">Student</span>
      </div>

      {STUDENT_NAV_SECTIONS.map((section, idx) => (
        <nav
          key={section.title}
          className={`mw-idash__nav${idx === STUDENT_NAV_SECTIONS.length - 1 ? " mw-idash__nav--account" : ""}`}
          aria-label={section.title}
        >
          <p className="mw-idash__nav-label">{section.title}</p>
          <ul>
            {section.items.map((item) => {
              const active = isStudentNavActive(activeHref, item.href);
              const className = `mw-idash__nav-link${active ? " is-active" : ""}`;
              const content = (
                <>
                  <StudentNavIcon name={item.icon} />
                  <span>{item.label}</span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href === "#" ? (
                    <a href="#" className={className}>
                      {content}
                    </a>
                  ) : (
                    <Link href={item.href} className={className}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      ))}
    </aside>
  );
}
