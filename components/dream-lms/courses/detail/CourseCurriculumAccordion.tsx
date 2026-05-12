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
};

export function CourseCurriculumAccordion({
  idPrefix,
  lastItemClassName = "",
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
        return (
          <div
            key={title}
            className={`accordion-item${isLast && lastItemClassName ? ` ${lastItemClassName}` : ""}`}
            data-aos="fade-up"
            {...(modIdx > 0 ? { "data-aos-delay": String(200 + modIdx * 50) } : {})}
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
                {title} <i className="fa-solid fa-chevron-down" />
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
                      className={`p-4 px-3 d-flex justify-content-between${isLast && i === LECTURE_ROWS.length - 1 ? " pb-0" : ""}`}
                    >
                      <p className="mb-0">
                        <img className="me-2" src={assetPath("img/icons/play.svg")} alt="" />
                        {lecture}
                      </p>
                      <div className="d-flex gap-xl-5 gap-3">
                        <Link href="#" className="preview-link">
                          Preview
                        </Link>
                        <p className="mb-0">02:53</p>
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
