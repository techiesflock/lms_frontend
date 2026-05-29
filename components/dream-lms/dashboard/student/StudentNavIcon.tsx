import type { StudentNavItem } from "./student-nav-config";

const paths: Record<StudentNavItem["icon"], string> = {
  grid: "M3 3h7v7H3V3Zm11 0h7v7h-7V3ZM3 14h7v7H3v-7Zm11 0h7v7h-7v-7Z",
  ai: "M12 3l2 4 4 1-3 3 1 4-8-5-4 1 4-3 3 1-4-8-5Z",
  courses: "M4 5h16v14H4V5Zm4-2h8M8 9h8M8 13h5",
  assignments: "M7 4h10v16H7V4Zm3 4h4M10 12h4",
  cert: "M7 4h10l2 4v12H5V4l2-4Zm5 8v4",
  quiz: "M8 6h8M8 10h8M8 14h5M6 4h12v16H6V4Z",
  progress: "M4 18V6M8 18V10M12 18V14M16 18V8M20 18V4",
  orders: "M6 4h12l2 4v12H4V8l2-4Zm6 8h4",
  wishlist: "M12 20s-7-4.5-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 5.5-7 10-7 10Z",
  reviews: "M12 3l2.4 6.8H21l-5.6 4.2 2.2 6.8L12 16.2l-5.6 4.6 2.2-6.8L3 9.8h6.6L12 3Z",
  referral: "M8 11a3 3 0 1 0-3-3M16 11a3 3 0 1 0-3-3M2 20a6 6 0 0 1 12 0M14 20a6 6 0 0 1 10 0",
  messages: "M5 6h14v8H9l-4 4V6Z",
  tickets: "M6 4h12l2 4v12H4V8l2-4Zm6 6h4",
  settings: "M12 8a4 4 0 1 0 4 4M4 20l2-6 6-2 6 2 2 6",
  user: "M12 12a4 4 0 1 0-4-4M4 20a8 8 0 0 1 16 0",
  logout: "M10 6H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4M14 10l4-4-4-4M18 6v12",
};

export function StudentNavIcon({ name }: { name: StudentNavItem["icon"] }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={paths[name]}
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
