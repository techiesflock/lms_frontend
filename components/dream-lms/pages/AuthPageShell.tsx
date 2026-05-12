import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";

/** Split auth layout from `login.html` / `register.html` (banner + form column). */
export function AuthPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="main-wrapper">
      <div className="login-content">
        <div className="row">
          <div className="col-lg-6 login-bg d-none d-lg-flex">
            <div className="login-carousel">
              {[0, 1, 2].map((i) => (
                <div key={i}>
                  <div className="login-carousel-section mb-3">
                    <div className="login-banner">
                      <img src={assetPath("img/auth/auth-1.svg")} className="img-fluid" alt="" />
                    </div>
                    <div className="mentor-course text-center">
                      <h3 className="mb-2">
                        Welcome to <br />
                        Dreams<span className="text-secondary">LMS</span> Courses.
                      </h3>
                      <p>
                        Platform designed to help organizations, educators, and learners manage, deliver, and track
                        learning and training activities.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 login-wrap-bg">
            <div className="login-wrapper">
              <div className="loginbox">
                <div className="w-100">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AuthLoginHeader() {
  return (
    <div className="d-flex align-items-center justify-content-between login-header">
      <Link href="/">
        <img src={assetPath("img/logo.svg")} className="img-fluid" alt="Dreams LMS" />
      </Link>
      <Link href="/" className="link-1">
        Back to Home
      </Link>
    </div>
  );
}
