import type { InstructorNavItem } from "./instructor-nav-config";

const paths: Record<InstructorNavItem["icon"], string> = {
  grid: "M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z",
  user: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm-8 8a8 8 0 0 1 16 0",
  course: "M4 5h16v12H4V5Zm4-2h8M8 9h8M8 13h5",
  announce: "M5 8h14M5 12h10M6 18l-2 2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8l-2 2Z",
  assignment: "M7 4h10v16H7V4Zm3 4h4M10 12h4",
  students: "M8 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM2 20a6 6 0 0 1 12 0M14 20a6 6 0 0 1 10 0",
  quiz: "M8 6h8M8 10h8M8 14h5M6 4h12v16H6V4Z",
  results: "M6 4h12v4H6V4Zm0 6h12v4H6v-4Zm0 6h8v4H6v-4Z",
  cert: "M7 4h10l2 4v12H5V4l2-4Zm5 8v4",
  earnings: "M4 8h16M6 12h12M8 16h8M4 4v16",
  payout: "M4 7h16v10H4V7Zm4-3h8",
  statements: "M6 4h12v16H6V4Zm3 4h6M9 12h6",
  messages: "M5 6h14v8H9l-4 4V6Z",
  tickets: "M6 4h12l2 4v12H4V8l2-4Zm6 6h4",
  settings: "M12 8a4 4 0 1 0 4 4M4 20l2-6 6-2 6 2 2 6",
  logout: "M10 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4M14 10l4-4-4-4M18 6v12",
};

export function InstructorNavIcon({ name }: { name: InstructorNavItem["icon"] }) {
  const d = paths[name];
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
