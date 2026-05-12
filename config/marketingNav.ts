/**
 * Nested nav mirrors `dream-lms/index.html` — edit here instead of duplicating markup.
 */
export type NavLeaf = { kind: "link"; label: string; href: string };
export type NavGroup = { kind: "group"; label: string; children: NavNode[] };
export type NavNode = NavLeaf | NavGroup;

export const coursesNav: NavNode[] = [
  {
    kind: "group",
    label: "Courses",
    children: [
      { kind: "link", label: "Course Grid", href: "/course-grid" },
      { kind: "link", label: "Course List", href: "/course-list" },
    ],
  },
  {
    kind: "group",
    label: "Course Category",
    children: [
      { kind: "link", label: "Course Category", href: "/course-category" },
      { kind: "link", label: "Course Category 2", href: "/course-category-2" },
      { kind: "link", label: "Course Category 3", href: "/course-category-3" },
    ],
  },
  {
    kind: "group",
    label: "Course Details",
    children: [
      { kind: "link", label: "Course Details", href: "/course-details" },
      { kind: "link", label: "Course Details 2", href: "/course-details-2" },
    ],
  },
  { kind: "link", label: "Course Resume", href: "/course-resume" },
  { kind: "link", label: "Course Watch", href: "/course-watch" },
  { kind: "link", label: "Course Cart", href: "/cart" },
  { kind: "link", label: "Course Checkout", href: "/checkout" },
  { kind: "link", label: "Add New Course", href: "/add-course" },
];

export const instructorDashboardNav: NavNode[] = [
  { kind: "link", label: "Dashboard", href: "/instructor-dashboard" },
  { kind: "link", label: "My Profile", href: "/instructor-profile" },
  { kind: "link", label: "Course", href: "/instructor-course" },
  { kind: "link", label: "Announcements", href: "/instructor-announcements" },
  { kind: "link", label: "Assignments", href: "/instructor-assignment" },
  {
    kind: "group",
    label: "Student",
    children: [
      { kind: "link", label: "Student Grid", href: "/students" },
      { kind: "link", label: "Student List", href: "/student-list" },
      { kind: "link", label: "Student Details", href: "/student-details" },
    ],
  },
  { kind: "link", label: "Quiz", href: "/instructor-quiz" },
  { kind: "link", label: "Quiz Results", href: "/instructor-quiz-results" },
  { kind: "link", label: "Certificates", href: "/instructor-certificate" },
  { kind: "link", label: "Earning", href: "/instructor-earnings" },
  { kind: "link", label: "Payout", href: "/instructor-payout" },
  { kind: "link", label: "Statement", href: "/instructor-statements" },
  { kind: "link", label: "Support Tickets", href: "/instructor-tickets" },
  { kind: "link", label: "Settings", href: "/instructor-settings" },
];

export const studentDashboardNav: NavNode[] = [
  { kind: "link", label: "Student Dashboard", href: "/student-dashboard" },
  { kind: "link", label: "My Profile", href: "/student-profile" },
  { kind: "link", label: "Enrolled Courses", href: "/student-courses" },
  { kind: "link", label: "My Certificates", href: "/student-certificates" },
  { kind: "link", label: "Wishlist", href: "/student-wishlist" },
  { kind: "link", label: "Reviews", href: "/student-reviews" },
  { kind: "link", label: "My Quiz Attempts", href: "/student-quiz" },
  { kind: "link", label: "Order History", href: "/student-order-history" },
  { kind: "link", label: "Referrals", href: "/student-referral" },
  { kind: "link", label: "Messages", href: "/student-messages" },
  { kind: "link", label: "Support Ticket", href: "/student-tickets" },
  { kind: "link", label: "Settings", href: "/student-settings" },
];

export const dashboardNav: NavNode[] = [
  {
    kind: "group",
    label: "Instructor Dashboard",
    children: instructorDashboardNav,
  },
  {
    kind: "group",
    label: "Student Dashboard",
    children: studentDashboardNav,
  },
];

export const pagesNav: NavNode[] = [
  {
    kind: "group",
    label: "Instructors",
    children: [
      { kind: "link", label: "Instructor Grid", href: "/instructor-grid" },
      { kind: "link", label: "Instructor List", href: "/instructor-list" },
      { kind: "link", label: "Instructor Details", href: "/instructor-details" },
    ],
  },
  { kind: "link", label: "About Us", href: "/about-us" },
  { kind: "link", label: "Contact us", href: "/contact-us" },
  { kind: "link", label: "Notifications", href: "/notifications" },
  { kind: "link", label: "Become an Instructor", href: "/become-an-instructor" },
  { kind: "link", label: "Testimonials", href: "/testimonials" },
  {
    kind: "group",
    label: "Authentication",
    children: [
      { kind: "link", label: "Login", href: "/login" },
      { kind: "link", label: "Register", href: "/register" },
      { kind: "link", label: "Forgot Password", href: "/forgot-password" },
      { kind: "link", label: "Reset Password", href: "/reset-password" },
      { kind: "link", label: "Set Password", href: "/set-password" },
      { kind: "link", label: "OTP", href: "/otp" },
      { kind: "link", label: "Lock Screen", href: "/lock-screen" },
    ],
  },
  {
    kind: "group",
    label: "Error",
    children: [
      { kind: "link", label: "404 Error", href: "/error-404" },
      { kind: "link", label: "500 Error", href: "/error-500" },
    ],
  },
  { kind: "link", label: "Pricing Plan", href: "/pricing-plan" },
  { kind: "link", label: "FAQ", href: "/faq" },
  { kind: "link", label: "Coming Soon", href: "/coming-soon" },
  { kind: "link", label: "Under Construction", href: "/under-construction" },
  { kind: "link", label: "Terms & Conditions", href: "/terms-and-conditions" },
  { kind: "link", label: "Privacy Policy", href: "/privacy-policy" },
  { kind: "link", label: "RTL", href: "/index-rtl" },
];

export const blogNav: NavNode[] = [
  {
    kind: "group",
    label: "Blog Layouts",
    children: [
      { kind: "link", label: "Blog 1 Grid", href: "/blog-grid" },
      { kind: "link", label: "Blog 2 Grid", href: "/blog-2-grid" },
      { kind: "link", label: "Blog 3 Grid", href: "/blog-3-grid" },
      { kind: "link", label: "Blog Carousal", href: "/blog-carousal" },
      { kind: "link", label: "Blog Masonry", href: "/blog-masonry" },
      { kind: "link", label: "Blog Left Sidebar", href: "/blog-left-sidebar" },
      { kind: "link", label: "Blog Right Sidebar", href: "/blog-right-sidebar" },
    ],
  },
  {
    kind: "group",
    label: "Blog Details",
    children: [
      { kind: "link", label: "Blog Details", href: "/blog-details" },
      {
        kind: "link",
        label: "Blog Details Left Sidebar",
        href: "/blog-details-left-sidebar",
      },
      {
        kind: "link",
        label: "Blog Details Right Sidebar",
        href: "/blog-details-right-sidebar",
      },
    ],
  },
];
