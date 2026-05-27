"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "curriculum", label: "Curriculum" },
  { id: "instructor", label: "Instructor" },
  { id: "reviews", label: "Reviews" },
] as const;

type SectionId = (typeof SECTIONS)[number]["id"];

export function CoursePageNav() {
  const [active, setActive] = useState<SectionId>("overview");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const listRef = useRef<HTMLDivElement>(null);

  const updateIndicator = useCallback((id: SectionId) => {
    const btn = tabRefs.current[id];
    const list = listRef.current;
    if (!btn || !list) return;
    setIndicator({
      left: btn.offsetLeft - list.scrollLeft,
      width: btn.offsetWidth,
    });
  }, []);

  useLayoutEffect(() => {
    updateIndicator(active);
  }, [active, updateIndicator]);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const onScroll = () => updateIndicator(active);
    list.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      list.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [active, updateIndicator]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(id);
            updateIndicator(id);
          }
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [updateIndicator]);

  const goToSection = (id: SectionId) => {
    setActive(id);
    updateIndicator(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    tabRefs.current[id]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <div className="ud-tabs-shell">
      <div className="container">
        <div className="ud-tabs-bar" role="tablist" aria-label="Course sections" ref={listRef}>
          {SECTIONS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              id={`tab-${id}`}
              aria-selected={active === id}
              aria-controls={id}
              ref={(el) => {
                tabRefs.current[id] = el;
              }}
              className={`ud-tab-btn${active === id ? " is-active" : ""}`}
              onClick={() => goToSection(id)}
            >
              {label}
            </button>
          ))}
          <span
            className="ud-tab-indicator"
            aria-hidden="true"
            style={{ transform: `translateX(${indicator.left}px)`, width: indicator.width }}
          />
        </div>
      </div>
    </div>
  );
}

export function ExpandAllCurriculumButton() {
  const [expanded, setExpanded] = useState(false);

  const toggle = useCallback(() => {
    const items = document.querySelectorAll<HTMLElement>(".ud-curriculum .accordion-collapse");
    const buttons = document.querySelectorAll<HTMLElement>(".ud-curriculum .accordion-button");

    const nextExpanded = !expanded;
    items.forEach((el) => {
      el.classList.toggle("show", nextExpanded);
    });
    buttons.forEach((btn) => {
      btn.classList.toggle("collapsed", !nextExpanded);
      btn.setAttribute("aria-expanded", String(nextExpanded));
    });
    setExpanded(nextExpanded);
  }, [expanded]);

  return (
    <button type="button" className="ud-text-btn" onClick={toggle}>
      {expanded ? "Collapse all sections" : "Expand all sections"}
    </button>
  );
}

export function ShowMoreDescription({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`ud-description-wrap${open ? " is-expanded" : ""}`}>
      <div className="ud-description-content">{children}</div>
      <button type="button" className="ud-show-more-btn" onClick={() => setOpen((v) => !v)}>
        {open ? "Show less" : "Show more"}
        <i className={`fa-solid fa-chevron-${open ? "up" : "down"} ms-1`} aria-hidden="true" />
      </button>
    </div>
  );
}
