/** Shared copy for student portal route pages */
export const STUDENT_PAGES = {
  profile: {
    href: "/student-profile",
    title: "My Profile",
    meta: "View and manage your account information.",
    description: "Your MetaWaves learner profile.",
  },
  courses: {
    href: "/student-courses",
    title: "Enrolled Courses",
    meta: "Continue learning and track progress across your courses.",
    description: "Courses you are enrolled in.",
  },
  certificates: {
    href: "/student-certificates",
    title: "My Certificates",
    meta: "Download and share certificates for completed courses.",
    description: "Your earned certificates.",
  },
  wishlist: {
    href: "/student-wishlist",
    title: "Wishlist",
    meta: "Courses you saved for later.",
    description: "Your saved courses.",
  },
  reviews: {
    href: "/student-reviews",
    title: "Reviews",
    meta: "Feedback you have shared on completed courses.",
    description: "Your course reviews.",
  },
  quiz: {
    href: "/student-quiz",
    title: "My Quiz Attempts",
    meta: "Scores and status for all your quiz attempts.",
    description: "Quiz history and results.",
  },
  orders: {
    href: "/student-order-history",
    title: "Order History",
    meta: "Past purchases and payment records.",
    description: "Your order history.",
  },
  referral: {
    href: "/student-referral",
    title: "Referrals",
    meta: "Invite friends and earn rewards.",
    description: "Referral program.",
  },
  messages: {
    href: "/student-messages",
    title: "Messages",
    meta: "Conversations with instructors and support.",
    description: "Your inbox.",
  },
  tickets: {
    href: "/student-tickets",
    title: "Support Tickets",
    meta: "Get help from the MetaWaves support team.",
    description: "Support requests.",
  },
  settings: {
    href: "/student-settings",
    title: "Settings",
    meta: "Update your profile, security, and preferences.",
    description: "Account settings.",
  },
} as const;
