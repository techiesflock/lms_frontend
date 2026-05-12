import type { ReactNode } from "react";
import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export function LockScreenBody() {
  return (
    <div className="main-wrapper">
      <div className="lock-screen">
        <div className="lock-wrapper">
          <div className="d-flex align-items-center justify-content-center lock-header">
            <img src={assetPath("img/logo.svg")} className="img-fluid" alt="Dreams LMS" />
          </div>
          <div className="topic">
            <h1 className="fs-32 fw-bold mb-3 text-center">Welcome Back</h1>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-4">
            <div className="text-center">
              <div className="user-profile rounded-circle mb-3">
                <img src={assetPath("img/user/user-02.jpg")} alt="" className="img-fluid rounded-circle" />
              </div>
              <h6 className="mb-0">Ronald Richard</h6>
            </div>
          </div>
          <form className="mb-3 pb-3">
            <div className="mb-3 position-relative">
              <label className="form-label">
                Password <span className="text-danger"> *</span>
              </label>
              <div className="position-relative">
                <input type="password" className="pass-inputa form-control" />
                <span className="isax toggle-passworda isax-eye-slash text-gray-7 fs-14" />
              </div>
            </div>
            <div className="d-grid">
              <button className="btn btn-secondary btn-lg" type="submit">
                Sign In<i className="isax isax-arrow-right-3 ms-1" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

type ErrorBoxProps = {
  illustration: string;
  title: ReactNode;
  subtitle: string;
};

function ErrorDecoratedBox({ illustration, title, subtitle }: ErrorBoxProps) {
  return (
    <div className="error-page d-flex min-vh-100 w-100">
      <div className="main-wrapper">
        <div className="error-box">
          {["01", "02", "03", "04", "05", "06"].map((n) => (
            <img key={n} src={assetPath(`img/error/img-${n}.svg`)} alt="" className={`img-fluid bg-${n}`} />
          ))}
          <div className="error-logo">
            <Link href="/">
              <img src={assetPath("img/logo.svg")} className="img-fluid" alt="Dreams LMS" />
            </Link>
          </div>
          <div className="error-box-img">
            <img src={assetPath(illustration)} alt="" className="img-fluid" />
          </div>
          <h3 className="h2 mb-3">{title}</h3>
          <p className="h4 font-weight-normal">{subtitle}</p>
          <Link href="/" className="btn back-to-home-btn">
            <i className="isax isax-arrow-left-2 me-1" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Error404Body() {
  return (
    <ErrorDecoratedBox
      illustration="img/error/error-01.svg"
      title={
        <>
          Oh No! Error <span className="text-secondary ms-1">404</span>
        </>
      }
      subtitle="This page you requested counld not found. May the force be with you!"
    />
  );
}

export function Error500Body() {
  return (
    <ErrorDecoratedBox
      illustration="img/error/error-02.svg"
      title={
        <>
          Oh No! Error <span className="text-secondary ms-1">500</span>
        </>
      }
      subtitle="Something went wrong on our servers. We are working to fix the problem."
    />
  );
}

export function ComingSoonBody() {
  return (
    <div className="error-page comming-soon-pg d-flex min-vh-100 w-100">
      <div className="main-wrapper">
        <div className="error-box coming-soon-content">
          {["01", "02", "03", "04", "05", "06"].map((n) => (
            <img key={n} src={assetPath(`img/error/img-${n}.svg`)} alt="" className={`img-fluid bg-${n}`} />
          ))}
          <div className="error-logo">
            <Link href="/">
              <img src={assetPath("img/logo.svg")} className="img-fluid" alt="Dreams LMS" />
            </Link>
          </div>
          <div className="coming-soon-topic">
            <h3 className="h2 mb-3">
              We are Coming<span className="text-secondary ms-1"> Soon!!!</span>
            </h3>
            <p>Stay tuned for something amazing</p>
          </div>
          <ul className="coming-soon-timer">
            <li>
              <span className="days">54</span>days
            </li>
            <li className="seperate-dot" />
            <li>
              <span className="hours">10</span>Hrs
            </li>
            <li className="seperate-dot" />
            <li>
              <span className="minutes">47</span>Min
            </li>
            <li className="seperate-dot" />
            <li>
              <span className="seconds">00</span>Sec
            </li>
          </ul>
          <div className="error-box-img coming-soon-img">
            <img src={assetPath("img/error/coming-soon.svg")} alt="" className="img-fluid" />
          </div>
          <form className="mt-5">
            <b>Notify me when the website is launched</b>
            <div className="bg-white border rounded-2 p-2 mt-2 mb-3">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="Enter your email address" />
                <button type="submit" className="btn btn-secondary">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function UnderConstructionBody() {
  return (
    <div className="error-page d-flex min-vh-100 w-100">
      <div className="main-wrapper">
        <div className="error-box">
          {["01", "02", "03", "04", "05", "06"].map((n) => (
            <img key={n} src={assetPath(`img/error/img-${n}.svg`)} alt="" className={`img-fluid bg-${n}`} />
          ))}
          <div className="error-logo">
            <Link href="/">
              <img src={assetPath("img/logo.svg")} className="img-fluid" alt="Dreams LMS" />
            </Link>
          </div>
          <div className="error-box-img">
            <img src={assetPath("img/error/error-03.svg")} alt="" className="img-fluid" />
          </div>
          <h3 className="h2 mb-3">
            The Website is Under<span className="text-secondary ms-1"> Construction</span>
          </h3>
          <p className="h4 font-weight-normal">We are working on fixing the problem. We back soon</p>
          <Link href="/" className="btn back-to-home-btn d-inline-flex align-items-center">
            <i className="isax isax-arrow-left-2 me-1" /> Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export function RtlDemoBody() {
  return (
    <section className="course-content py-5" dir="rtl">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">RTL</span>
            <h2 className="mb-3">معاينة اتجاه RTL</h2>
            <p className="text-muted mb-4">
              هذا القسم يستخدم <code className="user-select-all">dir=&quot;rtl&quot;</code> لمطابقة سلوك القالب في{" "}
              <code className="user-select-all">index-rtl.html</code>. لتحميل stylesheet RTL الكامل (مثل{" "}
              <code className="user-select-all">bootstrap.rtl.min.css</code>) يمكن إضافة تخطيط فرعي لاحقًا.
            </p>
            <Link href="/" className="btn btn-secondary me-2">
              الصفحة الرئيسية LTR
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
