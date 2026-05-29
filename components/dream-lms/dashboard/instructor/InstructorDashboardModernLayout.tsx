import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import { InstructorDashboardModernSidebar } from "./InstructorDashboardModernSidebar";

type InstructorDashboardModernLayoutProps = {
  activeHref: string;
  pageTitle?: string;
  pageDescription?: string;
  children: ReactNode;
};

export function InstructorDashboardModernLayout({
  activeHref,
  pageTitle = "Dashboard",
  pageDescription,
  children,
}: InstructorDashboardModernLayoutProps) {
  return (
    <div className="mw-idash">
      <div className="mw-idash__shell">
        <InstructorDashboardModernSidebar activeHref={activeHref} />

        <div className="mw-idash__main">
          <header className="mw-idash__topbar">
            <div className="mw-idash__topbar-mesh" aria-hidden />
            <div className="mw-idash__topbar-inner">
              <div className="mw-idash__profile">
                <img
                  src={assetPath("img/user/user-01.jpg")}
                  alt=""
                  className="mw-idash__avatar"
                  width={56}
                  height={56}
                />
                <div>
                  <div className="mw-idash__profile-name">
                    <h1>Eugene Andre</h1>
                    <Link href="/instructor-profile" className="mw-idash__profile-edit" aria-label="Edit profile">
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
                  <p className="mw-idash__profile-role">Instructor · MetaWaves</p>
                  {pageDescription ? (
                    <p className="mw-idash__page-desc">{pageDescription}</p>
                  ) : null}
                </div>
              </div>
              <div className="mw-idash__topbar-actions">
                <Link href="/add-course" className="mw-idash__btn mw-idash__btn--primary">
                  Add new course
                </Link>
                <Link href="/student-dashboard" className="mw-idash__btn mw-idash__btn--ghost">
                  Student view
                </Link>
              </div>
            </div>
          </header>

          <div className="mw-idash__page-head">
            <h2 className="mw-idash__page-title">{pageTitle}</h2>
            <p className="mw-idash__page-meta">Overview of your teaching activity</p>
          </div>

          <div className="mw-idash__content">{children}</div>
        </div>
      </div>
    </div>
  );
}
