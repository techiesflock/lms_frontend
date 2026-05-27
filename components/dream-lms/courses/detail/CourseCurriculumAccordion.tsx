import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const MODULE_TITLES = [
  "Getting Started",
  "The Brief",
  "Wireframing Low Fidelity",
  "Type, Color & Icon Introduction",
] as const;

const LECTURE_ROWS = [
  "Lecture1.1 Introduction to the User Experience Course",
  "Lecture1.2 Exercise: Your first design challenge",
  "Lecture1.3 How to solve the previous exercise",
  "Lecture1.4 Find out why smart objects are amazing",
  "Lecture1.5 How to use text layers effectively",
] as const;

type CourseCurriculumAccordionProps = {
  /** Unique prefix for Bootstrap accordion ids (avoid clashes across pages). */
  idPrefix: string;
  /** Last accordion item gets `mb-0` on the accordion-item (matches template). */
  lastItemClassName?: string;
  /** Udemy-style rows without scroll animations. */
  variant?: "default" | "udemy";
};

const MODULE_META = [
  { lectures: 5, duration: "32min" },
  { lectures: 8, duration: "1hr 12min" },
  { lectures: 12, duration: "2hr 05min" },
  { lectures: 10, duration: "1hr 48min" },
] as const;

export function CourseCurriculumAccordion({
  idPrefix,
  lastItemClassName = "",
  variant = "default",
}: CourseCurriculumAccordionProps) {
  const parentId = `${idPrefix}-curriculum`;

  return (
    <div
      className="accordion accordion-customicon1 accordions-items-seperate p-0"
      id={parentId}
    >
      {MODULE_TITLES.map((title, modIdx) => {
        const hId = `${idPrefix}-h-${modIdx}`;
        const cId = `${idPrefix}-c-${modIdx}`;
        const isLast = modIdx === MODULE_TITLES.length - 1;
        const meta = MODULE_META[modIdx];
        const isUdemy = variant === "udemy";

        return (
          <div
            key={title}
            className={`accordion-item${isLast && lastItemClassName ? ` ${lastItemClassName}` : ""}`}
            {...(!isUdemy
              ? {
                  "data-aos": "fade-up" as const,
                  ...(modIdx > 0 ? { "data-aos-delay": String(200 + modIdx * 50) } : {}),
                }
              : {})}
          >
            <h2 className="accordion-header" id={hId}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${cId}`}
                aria-expanded="false"
                aria-controls={cId}
              >
                <span className="ud-module-title">{title}</span>
                {isUdemy ? (
                  <span className="ud-module-meta">
                    {meta.lectures} lectures · {meta.duration}
                  </span>
                ) : null}
                <i className="fa-solid fa-chevron-down ud-accordion-chevron" />
              </button>
            </h2>
            <div
              id={cId}
              className="accordion-collapse collapse"
              aria-labelledby={hId}
              data-bs-parent={`#${parentId}`}
            >
              <div className="accordion-body p-0">
                <ul>
                  {LECTURE_ROWS.map((lecture, i) => (
                    <li
                      key={`${modIdx}-${i}`}
                      className={`ud-lecture-row${isLast && i === LECTURE_ROWS.length - 1 ? " ud-lecture-row--last" : ""}`}
                    >
                      <p className="mb-0 ud-lecture-title">
                        <i
                          className={`fa-solid ${i === 0 && modIdx === 0 ? "fa-circle-play" : "fa-play"} ud-lecture-icon`}
                          aria-hidden="true"
                        />
                        {lecture}
                      </p>
                      <div className="ud-lecture-actions">
                        {i === 0 ? (
                          <Link href="/course-watch" className="preview-link">
                            Preview
                          </Link>
                        ) : null}
                        <span className="ud-lecture-duration">02:53</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
