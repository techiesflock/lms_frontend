import Link from "next/link";
import type { ReactNode } from "react";

export type InstructorSidebarItem = { href: string; label: string; icon: ReactNode };

export type InstructorSidebarSection = { title: string; items: InstructorSidebarItem[] };

const MAIN_MENU: InstructorSidebarItem[] = [
  { href: "/instructor-dashboard", label: "Dashboard", icon: <i className="isax isax-grid-35 me-2" /> },
  { href: "/instructor-profile", label: "My Profile", icon: <i className="fa-solid fa-user me-2" /> },
  { href: "/instructor-course", label: "Courses", icon: <i className="isax isax-teacher5 me-2" /> },
  { href: "/instructor-announcements", label: "Announcements", icon: <i className="isax isax-volume-high5 me-2" /> },
  { href: "/instructor-assignment", label: "Assignments", icon: <i className="isax isax-clipboard-text5 me-2" /> },
  { href: "/students", label: "Students", icon: <i className="isax isax-profile-2user5 me-2" /> },
  { href: "/instructor-quiz", label: "Quiz", icon: <i className="isax isax-award5 me-2" /> },
  { href: "/instructor-quiz-results", label: "Quiz Results", icon: <i className="isax isax-medal-star5 me-2" /> },
  { href: "/instructor-certificate", label: "Certificates", icon: <i className="isax isax-note-215 me-2" /> },
  { href: "/instructor-earnings", label: "Earnings", icon: <i className="isax isax-wallet-add5 me-2" /> },
  { href: "/instructor-payout", label: "Payout", icon: <i className="isax isax-coin-15 me-2" /> },
  { href: "/instructor-statements", label: "Statements", icon: <i className="isax isax-shopping-cart5 me-2" /> },
  { href: "#", label: "Messages", icon: <i className="isax isax-messages-35 me-2" /> },
  { href: "/instructor-tickets", label: "Support Tickets", icon: <i className="isax isax-ticket5 me-2" /> },
];

const ACCOUNT: InstructorSidebarItem[] = [
  { href: "/instructor-settings", label: "Settings", icon: <i className="isax isax-setting-25 me-2" /> },
  { href: "#", label: "Logout", icon: <i className="isax isax-logout5 me-2" /> },
];

function isActive(activeHref: string, itemHref: string) {
  if (itemHref === "#") return false;
  if (
    itemHref === "/students" &&
    (activeHref === "/students" || activeHref === "/student-list" || activeHref === "/student-details")
  ) {
    return true;
  }
  return activeHref === itemHref;
}

export function InstructorDashboardSidebar({ activeHref }: { activeHref: string }) {
  return (
    <div className="col-lg-3 theiaStickySidebar">
      <div className="settings-sidebar mb-lg-0">
        <div>
          <h6 className="mb-3">Main Menu</h6>
          <ul className="mb-3 pb-1">
            {MAIN_MENU.map((item) => {
              const active = isActive(activeHref, item.href);
              const cls = `d-inline-flex align-items-center${active ? " active" : ""}`;
              return (
                <li key={item.label}>
                  {item.href === "#" ? (
                    <a href="#" className={cls}>
                      {item.icon}
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={cls}>
                      {item.icon}
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <hr />
          <h6 className="mb-3">Account Settings</h6>
          <ul>
            {ACCOUNT.map((item) => {
              const active = isActive(activeHref, item.href);
              const cls = `d-inline-flex align-items-center${active ? " active" : ""}`;
              return (
                <li key={item.label}>
                  {item.href === "#" ? (
                    <a href="#" className={cls}>
                      {item.icon}
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={cls}>
                      {item.icon}
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
