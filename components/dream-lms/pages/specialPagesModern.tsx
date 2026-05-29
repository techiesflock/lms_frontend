import Link from "next/link";
import { BrandLogo } from "@/components/dream-lms/shared/BrandLogo";
import { assetPath } from "@/lib/assetPath";

type ErrorPageModernProps = {
  code: "404" | "500";
  title: string;
  description: string;
  illustration: string;
};

function ErrorPageModern({ code, title, description, illustration }: ErrorPageModernProps) {
  return (
    <div className="mw-error-page">
      <div className="mw-error-page__mesh" aria-hidden />
      <div className="mw-error-page__inner">
        <Link href="/" className="mw-error-page__logo">
          <BrandLogo />
        </Link>

        <div className="mw-error-page__card">
          <span className="mw-error-page__code">{code}</span>
          <img src={assetPath(illustration)} alt="" className="mw-error-page__illustration" />
          <h1 className="mw-error-page__title">{title}</h1>
          <p className="mw-error-page__desc">{description}</p>
          <div className="mw-error-page__actions">
            <Link href="/" className="mw-error-page__btn mw-error-page__btn--primary">
              Back to home
            </Link>
            <Link href="/contact-us" className="mw-error-page__btn mw-error-page__btn--ghost">
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Error404BodyModern() {
  return (
    <ErrorPageModern
      code="404"
      title="Page not found"
      description="The page you requested doesn't exist or may have been moved. Check the URL or head back to the homepage."
      illustration="img/error/error-01.svg"
    />
  );
}

export function Error500BodyModern() {
  return (
    <ErrorPageModern
      code="500"
      title="Something went wrong"
      description="We're having trouble on our servers. Our team has been notified — please try again in a few minutes."
      illustration="img/error/error-02.svg"
    />
  );
}

export function ComingSoonBodyModern() {
  return (
    <div className="mw-coming-soon-page">
      <div className="mw-error-page__mesh" aria-hidden />
      <div className="mw-coming-soon-page__inner">
        <Link href="/" className="mw-error-page__logo">
          <BrandLogo />
        </Link>

        <div className="mw-coming-soon-page__card">
          <span className="mw-coming-soon-page__eyebrow">Launching soon</span>
          <h1 className="mw-coming-soon-page__title">We&apos;re building something great</h1>
          <p className="mw-coming-soon-page__desc">Stay tuned — new courses, features, and a refreshed learning experience are on the way.</p>

          <ul className="mw-coming-soon-page__timer" aria-label="Countdown">
            <li>
              <strong>54</strong>
              <span>Days</span>
            </li>
            <li>
              <strong>10</strong>
              <span>Hours</span>
            </li>
            <li>
              <strong>47</strong>
              <span>Minutes</span>
            </li>
            <li>
              <strong>00</strong>
              <span>Seconds</span>
            </li>
          </ul>

          <img src={assetPath("img/error/coming-soon.svg")} alt="" className="mw-coming-soon-page__img" />

          <form className="mw-coming-soon-page__form">
            <label htmlFor="coming-soon-email">Notify me when we launch</label>
            <div className="mw-coming-soon-page__form-row">
              <input id="coming-soon-email" type="email" placeholder="Enter your email" required />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export function UnderConstructionBodyModern() {
  return (
    <div className="mw-error-page">
      <div className="mw-error-page__mesh" aria-hidden />
      <div className="mw-error-page__inner">
        <Link href="/" className="mw-error-page__logo">
          <BrandLogo />
        </Link>

        <div className="mw-error-page__card">
          <span className="mw-error-page__code">WIP</span>
          <img src={assetPath("img/error/error-03.svg")} alt="" className="mw-error-page__illustration" />
          <h1 className="mw-error-page__title">Under construction</h1>
          <p className="mw-error-page__desc">
            This section is being upgraded. We&apos;ll be back shortly with an improved experience.
          </p>
          <div className="mw-error-page__actions">
            <Link href="/" className="mw-error-page__btn mw-error-page__btn--primary">
              Back to home
            </Link>
            <Link href="/course-grid" className="mw-error-page__btn mw-error-page__btn--ghost">
              Browse courses
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RtlDemoBodyModern() {
  return (
    <section className="mw-rtl-page" dir="rtl">
      <header className="mw-rtl-hero">
        <div className="container">
          <span className="mw-rtl-eyebrow">اتجاه RTL</span>
          <h1 className="mw-rtl-title">معاينة واجهة MetaWaves من اليمين إلى اليسار</h1>
          <p className="mw-rtl-subtitle">
            هذا القسم يستخدم <code>dir=&quot;rtl&quot;</code> لمطابقة سلوك القالب. يمكن إضافة stylesheet RTL كامل لاحقًا عبر تخطيط فرعي.
          </p>
          <div className="mw-rtl-actions">
            <Link href="/" className="mw-rtl-btn mw-rtl-btn--primary">
              الصفحة الرئيسية (LTR)
            </Link>
            <Link href="/course-grid" className="mw-rtl-btn mw-rtl-btn--ghost">
              تصفح الدورات
            </Link>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="mw-rtl-demo-card">
          <h2>عينة تنقل</h2>
          <nav className="mw-rtl-nav" aria-label="تنقل تجريبي">
            <Link href="/course-grid">الدورات</Link>
            <Link href="/instructor-grid">المدربون</Link>
            <Link href="/about-us">من نحن</Link>
            <Link href="/contact-us">اتصل بنا</Link>
          </nav>
          <p className="mw-rtl-demo-note">
            النصوص والأزرار والتخطيط يتبعون اتجاه RTL. للتبديل إلى الإنجليزية، ارجع إلى الصفحة الرئيسية LTR.
          </p>
        </div>
      </div>
    </section>
  );
}
