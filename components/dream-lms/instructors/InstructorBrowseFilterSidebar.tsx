import type { ReactNode } from "react";

const CATEGORIES = ["Development", "Design", "Business", "Marketing", "Data Science"];
const TOPICS = ["Web Development", "UI/UX", "Cloud", "Finance"];
const RATINGS = [4.5, 4.0, 3.5];

type InstructorBrowseFilterSidebarProps = {
  idPrefix: string;
};

export function InstructorBrowseFilterSidebar({ idPrefix }: InstructorBrowseFilterSidebarProps) {
  return (
    <div className="mw-catalog-filters">
      <div className="mw-catalog-filters__head">
        <h2 className="mw-catalog-filters__title">Filters</h2>
        <button type="button" className="mw-catalog-filters__clear">
          Clear all
        </button>
      </div>

      <FilterGroup title="Category" defaultOpen>
        {CATEGORIES.map((label) => (
          <FilterCheck key={label} name={`${idPrefix}-cat`} label={label} />
        ))}
      </FilterGroup>

      <FilterGroup title="Topic" defaultOpen>
        {TOPICS.map((label) => (
          <FilterCheck key={label} name={`${idPrefix}-topic`} label={label} />
        ))}
      </FilterGroup>

      <FilterGroup title="Rating">
        {RATINGS.map((min) => (
          <label key={min} className="mw-filter-check mw-filter-check--rating">
            <input type="checkbox" name={`${idPrefix}-rating`} />
            <span className="mw-filter-check__box" aria-hidden="true" />
            <span className="mw-filter-check__label">
              <span className="mw-filter-rating-stars" aria-hidden="true">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i
                    key={star}
                    className={`fa-solid fa-star${star <= Math.floor(min) ? "" : " mw-star-muted"}`}
                  />
                ))}
              </span>
              {min} & up
            </span>
          </label>
        ))}
      </FilterGroup>
    </div>
  );
}

function FilterGroup({
  title,
  children,
  defaultOpen = false,
}: {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details className="mw-filter-group" open={defaultOpen}>
      <summary className="mw-filter-group__summary">{title}</summary>
      <div className="mw-filter-group__body">{children}</div>
    </details>
  );
}

function FilterCheck({ label, name }: { label: string; name: string }) {
  return (
    <label className="mw-filter-check">
      <input type="checkbox" name={name} />
      <span className="mw-filter-check__box" aria-hidden="true" />
      <span className="mw-filter-check__label">{label}</span>
    </label>
  );
}
