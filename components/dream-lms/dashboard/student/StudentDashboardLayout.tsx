import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";
import { StudentDashboardSidebar } from "./StudentDashboardSidebar";

type StudentDashboardLayoutProps = {
  activeHref: string;
  children: ReactNode;
};

export function StudentDashboardLayout({ activeHref, children }: StudentDashboardLayoutProps) {
  return (
    <div className="content">
      <div className="container">
        <div className="profile-card overflow-hidden bg-blue-gradient2 mb-5 p-5">
          <div className="profile-card-bg">
            <img src={assetPath("img/bg/card-bg-01.png")} className="profile-card-bg-1" alt="" />
          </div>
          <div className="row align-items-center row-gap-3">
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-wrap gap-3">
                <span className="avatar avatar-xxl avatar-rounded border border-white border-2 position-relative">
                  <img src={assetPath("img/user/user-02.jpg")} alt="" />
                  <span className="verify-tick">
                    <i className="isax isax-verify5" />
                  </span>
                </span>
                <div>
                  <h5 className="mb-1 text-white d-inline-flex align-items-center">
                    <Link href="/student-profile" className="text-white">
                      Ronald Richard
                    </Link>
                    <Link href="/student-profile" className="link-light fs-16 ms-2" aria-label="Edit profile">
                      <i className="isax isax-edit-2" />
                    </Link>
                  </h5>
                  <p className="text-light">Student</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center justify-content-lg-end flex-wrap gap-2">
                <Link href="/become-an-instructor" className="btn btn-white rounded-pill me-3">
                  Become an Instructor
                </Link>
                <Link href="/instructor-dashboard" className="btn btn-secondary rounded-pill">
                  Instructor Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <StudentDashboardSidebar activeHref={activeHref} />
          <div className="col-lg-9">{children}</div>
        </div>
      </div>
    </div>
  );
}
