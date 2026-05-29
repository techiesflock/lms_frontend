export type StudentNavItem = {
  href: string;
  label: string;
  icon:
    | "grid"
    | "ai"
    | "courses"
    | "assignments"
    | "cert"
    | "quiz"
    | "progress"
    | "orders"
    | "wishlist"
    | "reviews"
    | "referral"
    | "messages"
    | "tickets"
    | "settings"
    | "user"
    | "logout";
};

export type StudentNavSection = {
  title: string;
  items: StudentNavItem[];
};

export const STUDENT_NAV_SECTIONS: StudentNavSection[] = [
  {
    title: "Main",
    items: [
      { href: "/student-dashboard", label: "Dashboard", icon: "grid" },
      { href: "#", label: "AI Learning Path", icon: "ai" },
    ],
  },
  {
    title: "Learning",
    items: [
      { href: "/student-courses", label: "My Courses", icon: "courses" },
      { href: "#", label: "Assignments", icon: "assignments" },
      { href: "/student-certificates", label: "Certificates", icon: "cert" },
      { href: "/student-quiz", label: "Quizzes", icon: "quiz" },
      { href: "#", label: "Course Progress", icon: "progress" },
      { href: "/student-order-history", label: "Order History", icon: "orders" },
    ],
  },
  {
    title: "Community",
    items: [
      { href: "/student-wishlist", label: "Wishlist", icon: "wishlist" },
      { href: "/student-reviews", label: "Reviews", icon: "reviews" },
      { href: "/student-referral", label: "Referrals", icon: "referral" },
      { href: "/student-messages", label: "Messages", icon: "messages" },
    ],
  },
  {
    title: "Support",
    items: [{ href: "/student-tickets", label: "Support Tickets", icon: "tickets" }],
  },
  {
    title: "Account",
    items: [
      { href: "/student-settings", label: "Settings", icon: "settings" },
      { href: "/student-profile", label: "My Profile", icon: "user" },
      { href: "#", label: "Logout", icon: "logout" },
    ],
  },
];

export function isStudentNavActive(activeHref: string, itemHref: string) {
  if (itemHref === "#") return false;
  return activeHref === itemHref;
}
