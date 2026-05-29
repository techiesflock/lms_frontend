import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import { StudentDashboardModernSidebar } from "./StudentDashboardModernSidebar";

type StudentDashboardModernLayoutProps = {
  activeHref: string;
  pageTitle?: string;
  pageDescription?: string;
  children: ReactNode;
};

export function StudentDashboardModernLayout({
  activeHref,
  pageTitle = "Dashboard",
  pageDescription,
  children,
}: StudentDashboardModernLayoutProps) {
  return (
    <div className="mw-idash mw-idash--student">
      <div className="mw-idash__shell">
        <StudentDashboardModernSidebar activeHref={activeHref} />

        <div className="mw-idash__main">
          <header className="mw-idash__topbar">
            <div className="mw-idash__topbar-mesh" aria-hidden />
            <div className="mw-idash__topbar-inner">
              <div className="mw-idash__profile">
                <img
                  src={assetPath("img/user/user-02.jpg")}
                  alt=""
                  className="mw-idash__avatar"
                  width={56}
                  height={56}
                />
                <div>
                  <div className="mw-idash__profile-name">
                    <h1>Ronald Richard</h1>
                    <Link href="/student-profile" className="mw-idash__profile-edit" aria-label="Edit profile">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                        <path
                          d="M11.3 2.3a1.5 1.5 0 0 1 2.1 2.1L5.4 12.4 2 13l.6-3.4 8.7-7.3Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <p className="mw-idash__profile-role">Student · MetaWaves</p>
                  {pageDescription ? (
                    <p className="mw-idash__page-desc">{pageDescription}</p>
                  ) : null}
                </div>
              </div>
              <div className="mw-idash__topbar-actions">
                <Link href="/become-an-instructor" className="mw-idash__btn mw-idash__btn--ghost">
                  Become instructor
                </Link>
                <Link href="/course-grid" className="mw-idash__btn mw-idash__btn--primary">
                  Browse courses
                </Link>
              </div>
            </div>
          </header>

          <div className="mw-idash__page-head">
            <h2 className="mw-idash__page-title">{pageTitle}</h2>
            <p className="mw-idash__page-meta">Your learning progress at a glance</p>
          </div>

          <div className="mw-idash__content">{children}</div>
        </div>
      </div>
    </div>
  );
}
