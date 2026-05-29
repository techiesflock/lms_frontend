"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type NavContextValue = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
};

const StudentDashboardNavContext = createContext<NavContextValue | null>(null);

export function useStudentDashboardNav() {
  const ctx = useContext(StudentDashboardNavContext);
  if (!ctx) {
    throw new Error("useStudentDashboardNav must be used within StudentDashboardNavProvider");
  }
  return ctx;
}

export function StudentDashboardNavProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((open) => !open), []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.documentElement.classList.add("mw-idash-nav-open");
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.documentElement.classList.remove("mw-idash-nav-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) return;

    const onNavClick = (event: MouseEvent) => {
      if ((event.target as HTMLElement).closest(".mw-idash__nav-link")) {
        close();
      }
    };

    document.addEventListener("click", onNavClick);
    return () => document.removeEventListener("click", onNavClick);
  }, [isOpen, close]);

  return (
    <StudentDashboardNavContext.Provider value={{ isOpen, toggle, close }}>
      {isOpen ? (
        <button
          type="button"
          className="mw-idash__sidebar-overlay"
          aria-label="Close navigation"
          onClick={close}
        />
      ) : null}
      {children}
    </StudentDashboardNavContext.Provider>
  );
}

export function StudentDashboardShell({ children }: { children: ReactNode }) {
  const { isOpen } = useStudentDashboardNav();
  return <div className={`mw-idash__shell${isOpen ? " is-nav-open" : ""}`}>{children}</div>;
}

export function StudentDashboardNavToggle() {
  const { isOpen, toggle } = useStudentDashboardNav();

  return (
    <button
      type="button"
      className="mw-idash__nav-toggle"
      aria-expanded={isOpen}
      aria-controls="mw-idash-sidebar"
      onClick={toggle}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="visually-hidden">{isOpen ? "Close menu" : "Open menu"}</span>
    </button>
  );
}
