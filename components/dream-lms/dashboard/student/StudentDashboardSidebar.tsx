import Link from "next/link";
import type { ReactNode } from "react";

export type StudentSidebarItem = { href: string; label: string; icon: ReactNode };

export type StudentSidebarSection = { title: string; items: StudentSidebarItem[] };

export const STUDENT_DASHBOARD_SIDEBAR: StudentSidebarSection[] = [
  {
    title: "Main",
    items: [
      { href: "/student-dashboard", label: "Dashboard", icon: <i className="isax isax-grid-35 me-2" /> },
      { href: "#", label: "AI Learning Path", icon: <i className="isax isax-magicpen5 me-2" /> },
    ],
  },
  {
    title: "Learning",
    items: [
      { href: "/student-courses", label: "My Courses", icon: <i className="isax isax-teacher5 me-2" /> },
      { href: "#", label: "Assignments", icon: <i className="isax isax-document5 me-2" /> },
      { href: "/student-certificates", label: "Certificates", icon: <i className="isax isax-note-215 me-2" /> },
      { href: "/student-quiz", label: "Quizzes", icon: <i className="isax isax-award5 me-2" /> },
      { href: "#", label: "Course Progress", icon: <i className="isax isax-book-saved5 me-2" /> },
      { href: "/student-order-history", label: "Order History", icon: <i className="isax isax-shopping-cart5 me-2" /> },
    ],
  },
  {
    title: "Community",
    items: [
      { href: "/student-wishlist", label: "Wishlist", icon: <i className="isax isax-heart5 me-2" /> },
      { href: "/student-reviews", label: "Reviews", icon: <i className="isax isax-star5 me-2" /> },
      { href: "/student-referral", label: "Referrals", icon: <i className="isax isax-tag-user5 me-2" /> },
      { href: "/student-messages", label: "Messages", icon: <i className="isax isax-messages-35 me-2" /> },
    ],
  },
  {
    title: "Support",
    items: [{ href: "/student-tickets", label: "Support Tickets", icon: <i className="isax isax-ticket5 me-2" /> }],
  },
  {
    title: "Account",
    items: [
      { href: "/student-settings", label: "Settings", icon: <i className="isax isax-setting-25 me-2" /> },
      { href: "/student-profile", label: "My Profile", icon: <i className="fa-solid fa-user me-2" /> },
      { href: "#", label: "Logout", icon: <i className="isax isax-logout5 me-2" /> },
    ],
  },
];

function isActive(activeHref: string, itemHref: string) {
  if (itemHref === "#") return false;
  return activeHref === itemHref;
}

export function StudentDashboardSidebar({ activeHref }: { activeHref: string }) {
  return (
    <div className="col-lg-3 theiaStickySidebar">
      <div className="settings-sidebar">
        <div>
          {STUDENT_DASHBOARD_SIDEBAR.map((section, sIdx) => (
            <div key={section.title}>
              <h6 className="mb-3">{section.title}</h6>
              <ul className="mb-3 pb-1">
                {section.items.map((item) => {
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
              {sIdx < STUDENT_DASHBOARD_SIDEBAR.length - 1 ? <hr /> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
