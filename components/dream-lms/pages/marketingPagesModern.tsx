import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";

const TESTIMONIALS = [
  { title: "Flexible learning", user: "user-04.jpg", name: "Johnathan Smith", role: "Entrepreneur", quote: "The platform helped me switch careers with structured paths and mentor feedback at every step." },
  { title: "Design mastery", user: "user-53.jpg", name: "Emily Jackson", role: "Marketing specialist", quote: "Project-based lessons made it easy to apply concepts immediately in client work." },
  { title: "AI upskilling", user: "user-54.jpg", name: "Adriana Hrit", role: "Digital marketer", quote: "Clear modules, strong community, and certificates that actually matter on my résumé." },
  { title: "Certification value", user: "user-04.jpg", name: "Michael Chen", role: "Product manager", quote: "I completed three tracks in six months and landed a promotion with measurable skills." },
  { title: "Mentorship quality", user: "user-53.jpg", name: "Sarah Lee", role: "HR lead", quote: "Instructors respond quickly and the assignments mirror real workplace scenarios." },
  { title: "Community support", user: "user-54.jpg", name: "David Park", role: "Engineer", quote: "Peer discussions and instructor office hours kept me accountable through a busy schedule." },
];

const NOTIFICATIONS_TODAY = [
  { avatar: "img/user/user-11.jpg", time: "5 mins ago", text: "Thompson Hicks enrolled in Programming Fundamentals.", href: "/student-details" },
  { avatar: "img/user/user-12.jpg", time: "10 mins ago", text: "Jennifer Tovar submitted their UI/UX assignment.", href: "/student-details" },
];

const NOTIFICATIONS_YESTERDAY = [
  { avatar: "img/user/user-13.jpg", time: "Yesterday", text: "James Schulte requested feedback on their WordPress assignment.", href: "/student-details" },
  { avatar: "img/user/user-14.jpg", time: "Yesterday", text: "New message from William Aragon about the HTML course.", href: "/student-messages" },
];

export function TestimonialsBodyModern() {
  return (
    <section className="mw-testimonials-page">
      <header className="mw-testimonials-hero">
        <div className="container">
          <span className="mw-testimonials-eyebrow">Learner stories</span>
          <h1 className="mw-testimonials-title">What our community says</h1>
          <p className="mw-testimonials-subtitle">
            Real feedback from professionals who built skills, earned credentials, and advanced their careers with MetaWaves.
          </p>
        </div>
      </header>

      <div className="container">
        <div className="mw-testimonials-grid">
          {TESTIMONIALS.map((item) => (
            <article key={item.name} className="mw-testimonial-card">
              <div className="mw-testimonial-card__head">
                <h2>{item.title}</h2>
                <i className="fa-solid fa-quote-right mw-testimonial-card__quote" aria-hidden="true" />
              </div>
              <p className="mw-testimonial-card__body">{item.quote}</p>
              <footer className="mw-testimonial-card__footer">
                <div className="mw-testimonial-card__author">
                  <img src={assetPath(`img/user/${item.user}`)} alt="" />
                  <div>
                    <Link href="/student-details">{item.name}</Link>
                    <p>{item.role}</p>
                  </div>
                </div>
                <div className="mw-testimonial-card__stars" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i key={star} className="fa-solid fa-star" aria-hidden="true" />
                  ))}
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NotificationItem({
  avatar,
  time,
  text,
  href,
}: {
  avatar: string;
  time: string;
  text: string;
  href: string;
}) {
  return (
    <li className="mw-notification-item">
      <img src={assetPath(avatar)} alt="" className="mw-notification-item__avatar" />
      <div className="mw-notification-item__body">
        <p>
          <Link href={href}>{text}</Link>
        </p>
        <time dateTime={time}>{time}</time>
      </div>
      <button type="button" className="mw-notification-item__delete" aria-label="Delete notification">
        <i className="fa-solid fa-trash" aria-hidden="true" />
      </button>
    </li>
  );
}

export function NotificationsBodyModern() {
  return (
    <section className="mw-notifications-page">
      <div className="container">
        <header className="mw-notifications-head">
          <div>
            <h1 className="mw-notifications-title">Notifications</h1>
            <p className="mw-notifications-subtitle">
              Stay on top of enrollments, assignments, and messages from your learning community.
            </p>
          </div>
          <div className="mw-notifications-actions">
            <button type="button" className="mw-notifications-btn mw-notifications-btn--ghost">
              Mark all as read
            </button>
            <button type="button" className="mw-notifications-btn mw-notifications-btn--danger">
              Delete all
            </button>
          </div>
        </header>

        <section className="mw-notifications-group">
          <h2>Today</h2>
          <ul className="mw-notifications-list">
            {NOTIFICATIONS_TODAY.map((n) => (
              <NotificationItem key={n.text} {...n} />
            ))}
          </ul>
        </section>

        <section className="mw-notifications-group">
          <h2>Yesterday</h2>
          <ul className="mw-notifications-list">
            {NOTIFICATIONS_YESTERDAY.map((n) => (
              <NotificationItem key={n.text} {...n} />
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Is there a free trial?",
    a: "We offer free demo courses so you can explore the platform. Paid plans include a 14-day money-back guarantee on your first subscription.",
  },
  {
    q: "How long does it take to complete a course?",
    a: "Most courses are self-paced. Learners typically finish in 4–12 weeks depending on weekly study time and course depth.",
  },
  {
    q: "Can I pay month to month?",
    a: "Yes. Monthly and annual billing are available on all paid plans. Annual billing saves about 20% compared to monthly.",
  },
  {
    q: "What are Premium Membership benefits?",
    a: "Premium includes unlimited catalog access, downloadable resources, priority instructor Q&A, verified certificates, and learning analytics.",
  },
  {
    q: "Are free tutorials available?",
    a: "Yes. Many instructors publish free preview lessons and standalone tutorials you can access without a subscription.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Go to Settings → Billing and cancel anytime. You keep access until the end of your current billing period.",
  },
];

function FaqAccordionItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  return (
    <details className="mw-faq-item" open={defaultOpen}>
      <summary className="mw-faq-item__question">{question}</summary>
      <div className="mw-faq-item__answer">
        <p>{answer}</p>
      </div>
    </details>
  );
}

export function FaqBodyModern() {
  return (
    <section className="mw-faq-page">
      <header className="mw-faq-hero">
        <div className="container">
          <span className="mw-faq-eyebrow">Help center</span>
          <h1 className="mw-faq-title">Frequently asked questions</h1>
          <p className="mw-faq-subtitle">
            Quick answers about trials, billing, courses, and your MetaWaves account.
          </p>
        </div>
      </header>

      <div className="container">
        <div className="mw-faq-list">
          {FAQ_ITEMS.map((item, index) => (
            <FaqAccordionItem key={item.q} question={item.q} answer={item.a} defaultOpen={index === 0} />
          ))}
        </div>

        <aside className="mw-faq-cta">
          <h2>Still have questions?</h2>
          <p>Our support team is happy to help with billing, technical issues, or course recommendations.</p>
          <Link href="/contact-us" className="mw-faq-cta__btn">
            Contact support
          </Link>
        </aside>
      </div>
    </section>
  );
}

function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mw-legal-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function TermsAndConditionsBodyModern() {
  return (
    <section className="mw-legal-page">
      <header className="mw-legal-hero">
        <div className="container">
          <span className="mw-legal-eyebrow">Legal</span>
          <h1 className="mw-legal-title">Terms &amp; Conditions</h1>
          <p className="mw-legal-updated">Last updated: May 2026</p>
        </div>
      </header>

      <div className="container">
        <article className="mw-legal-content">
          <LegalSection title="Introduction">
            <p>
              Welcome to MetaWaves. By accessing or using our platform, you agree to comply with and be bound by these
              terms and conditions. Please read them carefully before using our services.
            </p>
          </LegalSection>

          <LegalSection title="Acceptance of terms">
            <p>
              By accessing or using our LMS, you confirm that you have read, understood, and agreed to these Terms. If
              you do not agree, you may not use the website or its services.
            </p>
          </LegalSection>

          <LegalSection title="Eligibility">
            <p>Users must be at least 18 years old or have parental or guardian consent to use the platform.</p>
            <p>Organizations must ensure that their members comply with these Terms.</p>
          </LegalSection>

          <LegalSection title="Account registration">
            <p>Users are required to register an account to access courses and other features.</p>
            <p>You agree to provide accurate and complete information during registration.</p>
            <p>You are responsible for maintaining the confidentiality of your login credentials.</p>
          </LegalSection>

          <LegalSection title="Payments and subscriptions">
            <p>Certain courses or features may require payment or a subscription.</p>
            <p>You are responsible for any taxes applicable to your purchase.</p>
          </LegalSection>

          <LegalSection title="Changes to terms">
            <p>
              MetaWaves may update these Terms periodically. Changes will be communicated through the website or via
              email.
            </p>
          </LegalSection>
        </article>
      </div>
    </section>
  );
}

export function PrivacyPolicyBodyModern() {
  return (
    <section className="mw-legal-page">
      <header className="mw-legal-hero">
        <div className="container">
          <span className="mw-legal-eyebrow">Legal</span>
          <h1 className="mw-legal-title">Privacy Policy</h1>
          <p className="mw-legal-updated">Last updated: May 2026</p>
        </div>
      </header>

      <div className="container">
        <article className="mw-legal-content">
          <p className="mw-legal-intro">
            At MetaWaves, we are committed to protecting your privacy. This policy outlines how we handle your
            information.
          </p>

          <LegalSection title="Information we collect">
            <p>Personal data such as your name, email address, and payment details collected during registration or purchases.</p>
            <p>
              Non-personal data, including device information, browser type, and usage patterns, to improve user
              experience.
            </p>
          </LegalSection>

          <LegalSection title="How we use your information">
            <p>To provide access to courses and services.</p>
            <p>To process payments securely.</p>
            <p>To deliver personalized content and updates.</p>
            <p>For research, analytics, and marketing (with your consent when required).</p>
          </LegalSection>

          <LegalSection title="Data protection">
            <p>We implement technical and organizational measures to safeguard your data.</p>
            <p>
              Your information is not sold or shared with third parties except for essential service providers or legal
              obligations.
            </p>
          </LegalSection>

          <LegalSection title="Third-party links">
            <p>Our platform may include links to external websites.</p>
            <p>We are not responsible for their privacy practices — please review their policies.</p>
          </LegalSection>

          <LegalSection title="Your rights">
            <p>
              Access, update, or delete your personal information by contacting us at{" "}
              <a href="mailto:hello@metawaves.com">hello@metawaves.com</a>.
            </p>
          </LegalSection>

          <LegalSection title="Policy updates">
            <p>We may update this policy and notify you of significant changes through our platform or email.</p>
          </LegalSection>
        </article>
      </div>
    </section>
  );
}
