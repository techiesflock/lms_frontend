import Link from "next/link";
import { BrandLogo } from "@/components/dream-lms/shared/BrandLogo";
import { InstructorNavIcon } from "./InstructorNavIcon";
import {
  INSTRUCTOR_ACCOUNT_NAV,
  INSTRUCTOR_MAIN_NAV,
  isInstructorNavActive,
} from "./instructor-nav-config";

export function InstructorDashboardModernSidebar({ activeHref }: { activeHref: string }) {
  return (
    <aside className="mw-idash__sidebar">
      <div className="mw-idash__sidebar-brand">
        <BrandLogo href="/" height={32} />
        <span className="mw-idash__sidebar-badge">Instructor</span>
      </div>

      <nav className="mw-idash__nav" aria-label="Instructor main">
        <p className="mw-idash__nav-label">Main menu</p>
        <ul>
          {INSTRUCTOR_MAIN_NAV.map((item) => {
            const active = isInstructorNavActive(activeHref, item.href);
            const className = `mw-idash__nav-link${active ? " is-active" : ""}`;
            const content = (
              <>
                <InstructorNavIcon name={item.icon} />
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

      <nav className="mw-idash__nav mw-idash__nav--account" aria-label="Account">
        <p className="mw-idash__nav-label">Account</p>
        <ul>
          {INSTRUCTOR_ACCOUNT_NAV.map((item) => {
            const active = isInstructorNavActive(activeHref, item.href);
            const className = `mw-idash__nav-link${active ? " is-active" : ""}`;
            const content = (
              <>
                <InstructorNavIcon name={item.icon} />
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
    </aside>
  );
}
