import Link from "next/link";
import { UdCoursePageShell } from "@/components/dream-lms/courses/shared/UdCoursePageShell";

const WIZARD_STEPS = [
  "Course information",
  "Course media",
  "Curriculum",
  "Additional info",
  "Pricing",
] as const;

export function AddCourseWizardBody() {
  return (
    <UdCoursePageShell
      title="Add new course"
      subtitle="Create and publish a course on MetaWaves — start with the basics below."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Instructor", href: "/instructor-dashboard" },
        { label: "Add course" },
      ]}
    >
      <div className="container">
        <ol className="ud-flow-wizard" aria-label="Course creation steps">
          {WIZARD_STEPS.map((label, i) => (
            <li key={label} className={i === 0 ? "is-active is-current" : ""}>
              <span className="ud-flow-wizard__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="ud-flow-wizard__label">{label}</span>
            </li>
          ))}
        </ol>

        <section className="ud-flow-card">
          <h2 className="ud-flow-card__title">Basic information</h2>
          <form className="ud-flow-form" action="#">
            <div className="ud-flow-form__grid">
              <div className="ud-flow-field ud-flow-field--full">
                <label className="ud-flow-label" htmlFor="ac-title">
                  Course title <span className="ud-flow-required">*</span>
                </label>
                <input id="ac-title" className="ud-flow-input" type="text" placeholder="e.g. Complete Web Developer" />
              </div>
              <div className="ud-flow-field">
                <label className="ud-flow-label" htmlFor="ac-category">
                  Category <span className="ud-flow-required">*</span>
                </label>
                <select id="ac-category" className="ud-flow-input" defaultValue="">
                  <option value="">Select</option>
                  <option>Web Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div className="ud-flow-field">
                <label className="ud-flow-label" htmlFor="ac-level">
                  Level <span className="ud-flow-required">*</span>
                </label>
                <select id="ac-level" className="ud-flow-input" defaultValue="">
                  <option value="">Select</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div className="ud-flow-field ud-flow-field--full">
                <label className="ud-flow-label" htmlFor="ac-short">
                  Short description <span className="ud-flow-required">*</span>
                </label>
                <input id="ac-short" className="ud-flow-input" type="text" />
              </div>
              <div className="ud-flow-field ud-flow-field--full">
                <label className="ud-flow-label" htmlFor="ac-desc">
                  Course description <span className="ud-flow-required">*</span>
                </label>
                <textarea id="ac-desc" className="ud-flow-input ud-flow-textarea" rows={5} />
              </div>
            </div>

            <div className="ud-flow-form__grid ud-flow-form__grid--2">
              <div className="ud-flow-inset-card">
                <h3 className="ud-flow-inset-card__title">What students will learn</h3>
                <input className="ud-flow-input mb-2" type="text" defaultValue="Build responsive websites" />
                <button type="button" className="ud-text-btn">
                  + Add item
                </button>
              </div>
              <div className="ud-flow-inset-card">
                <h3 className="ud-flow-inset-card__title">Requirements</h3>
                <input className="ud-flow-input mb-2" type="text" placeholder="No prior experience needed" />
                <button type="button" className="ud-text-btn">
                  + Add item
                </button>
              </div>
            </div>

            <label className="ud-flow-check mt-3">
              <input type="checkbox" defaultChecked />
              <span>Feature this course on the homepage</span>
            </label>

            <div className="ud-flow-form-actions">
              <Link href="/instructor-course" className="btn ud-btn-outline">
                Save draft
              </Link>
              <Link href="#" className="btn ud-btn-primary">
                Next step →
              </Link>
            </div>
          </form>
        </section>

        <section className="ud-flow-card ud-flow-card--muted">
          <h2 className="ud-flow-card__title">Upcoming steps (preview)</h2>
          <div className="ud-flow-form__grid ud-flow-form__grid--2">
            <div className="ud-flow-upload-placeholder">
              <i className="isax isax-gallery-add" aria-hidden="true" />
              <p>Course thumbnail — 1280×720 recommended</p>
              <button type="button" className="btn ud-btn-outline btn-sm">
                Choose image
              </button>
            </div>
            <div className="ud-flow-upload-placeholder">
              <i className="isax isax-video-add" aria-hidden="true" />
              <p>Promo video for course landing page</p>
              <button type="button" className="btn ud-btn-outline btn-sm">
                Choose video
              </button>
            </div>
          </div>
        </section>
      </div>
    </UdCoursePageShell>
  );
}
