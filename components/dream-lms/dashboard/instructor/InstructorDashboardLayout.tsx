import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import { InstructorDashboardSidebar } from "./InstructorDashboardSidebar";

type InstructorDashboardLayoutProps = {
  activeHref: string;
  /** When false, hides the instructor sidebar (e.g. student detail full-width layout). */
  showSidebar?: boolean;
  /** Extra class on the outer `content` wrapper (e.g. `instructor-detail-content`). */
  contentClassName?: string;
  children: ReactNode;
};

export function InstructorDashboardLayout({
  activeHref,
  showSidebar = true,
  contentClassName,
  children,
}: InstructorDashboardLayoutProps) {
  return (
    <div className={`content${contentClassName ? ` ${contentClassName}` : ""}`}>
      <div className="container">
        <div className="instructor-profile">
          <div className="instructor-profile-bg">
            <img src={assetPath("img/bg/card-bg-01.png")} className="instructor-profile-bg-1" alt="" />
          </div>
          <div className="row align-items-center row-gap-3">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <span className="avatar flex-shrink-0 avatar-xxl avatar-rounded me-3 border border-white border-3 position-relative">
                  <img src={assetPath("img/user/user-01.jpg")} alt="" />
                  <span className="verify-tick">
                    <i className="isax isax-verify5" />
                  </span>
                </span>
                <div>
                  <h5 className="mb-1 text-white d-inline-flex align-items-center">
                    Eugene Andre
                    <Link href="/instructor-profile" className="link-light fs-16 ms-2" aria-label="Edit profile">
                      <i className="isax isax-edit-2" />
                    </Link>
                  </h5>
                  <p className="text-light">Instructor</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center flex-wrap gap-3 justify-content-md-end">
                <Link href="/add-course" className="btn btn-white rounded-pill">
                  Add New Course
                </Link>
                <Link href="/student-dashboard" className="btn btn-secondary rounded-pill">
                  Student Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
        {showSidebar ? (
          <div className="row">
            <InstructorDashboardSidebar activeHref={activeHref} />
            <div className="col-lg-9">{children}</div>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}
