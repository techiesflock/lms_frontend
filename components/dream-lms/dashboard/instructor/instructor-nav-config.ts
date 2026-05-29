export type InstructorNavItem = {
  href: string;
  label: string;
  icon: "grid" | "user" | "course" | "announce" | "assignment" | "students" | "quiz" | "results" | "cert" | "earnings" | "payout" | "statements" | "messages" | "tickets" | "settings" | "logout";
};

export const INSTRUCTOR_MAIN_NAV: InstructorNavItem[] = [
  { href: "/instructor-dashboard", label: "Dashboard", icon: "grid" },
  { href: "/instructor-profile", label: "My Profile", icon: "user" },
  { href: "/instructor-course", label: "Courses", icon: "course" },
  { href: "/instructor-announcements", label: "Announcements", icon: "announce" },
  { href: "/instructor-assignment", label: "Assignments", icon: "assignment" },
  { href: "/students", label: "Students", icon: "students" },
  { href: "/instructor-quiz", label: "Quiz", icon: "quiz" },
  { href: "/instructor-quiz-results", label: "Quiz Results", icon: "results" },
  { href: "/instructor-certificate", label: "Certificates", icon: "cert" },
  { href: "/instructor-earnings", label: "Earnings", icon: "earnings" },
  { href: "/instructor-payout", label: "Payout", icon: "payout" },
  { href: "/instructor-statements", label: "Statements", icon: "statements" },
  { href: "#", label: "Messages", icon: "messages" },
  { href: "/instructor-tickets", label: "Support Tickets", icon: "tickets" },
];

export const INSTRUCTOR_ACCOUNT_NAV: InstructorNavItem[] = [
  { href: "/instructor-settings", label: "Settings", icon: "settings" },
  { href: "#", label: "Logout", icon: "logout" },
];

export function isInstructorNavActive(activeHref: string, itemHref: string) {
  if (itemHref === "#") return false;
  if (
    itemHref === "/students" &&
    (activeHref === "/students" || activeHref === "/student-list" || activeHref === "/student-details")
  ) {
    return true;
  }
  return activeHref === itemHref;
}
