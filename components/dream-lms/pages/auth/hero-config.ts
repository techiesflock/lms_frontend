export type AuthHeroConfig = {
  badge: string;
  titleLine: string;
  titleAccent: string;
  description: string;
  points: readonly string[];
};

export const DEFAULT_AUTH_STATS = [
  { value: "50K+", label: "Active learners" },
  { value: "1,200+", label: "Expert-led courses" },
  { value: "4.8", label: "Average rating" },
] as const;

export const AUTH_HERO: Record<string, AuthHeroConfig> = {
  login: {
    badge: "Welcome back",
    titleLine: "Continue your",
    titleAccent: "learning journey",
    description:
      "Join thousands of learners on MetaWaves — built for teams, educators, and ambitious professionals.",
    points: [
      "Resume learning where you left off",
      "Track progress across all your courses",
      "Earn certificates recognized by employers",
    ],
  },
  register: {
    badge: "Get started",
    titleLine: "Start your",
    titleAccent: "learning today",
    description:
      "Create a free account and access expert-led courses, hands-on projects, and certificates employers trust.",
    points: [
      "Free to join — explore courses instantly",
      "Learn at your own pace, on any device",
      "Join a community of 50,000+ learners",
    ],
  },
  forgotPassword: {
    badge: "Account recovery",
    titleLine: "Reset your",
    titleAccent: "password",
    description:
      "We will send a secure link to your email so you can regain access to your courses and progress.",
    points: [
      "Secure, encrypted password reset",
      "Link expires for your protection",
      "Back to learning in minutes",
    ],
  },
  resetPassword: {
    badge: "Security",
    titleLine: "Create a new",
    titleAccent: "password",
    description:
      "Choose a strong password you have not used before to keep your account and learning data safe.",
    points: [
      "Use 8+ characters with mixed case",
      "Avoid passwords from other sites",
      "Update regularly for best security",
    ],
  },
  setPassword: {
    badge: "Almost there",
    titleLine: "Set your",
    titleAccent: "password",
    description:
      "Complete your account setup with a secure password so you can start enrolling in courses.",
    points: [
      "One step away from full access",
      "Your progress stays synced everywhere",
      "Certificates unlock after completion",
    ],
  },
  otp: {
    badge: "Verification",
    titleLine: "Confirm your",
    titleAccent: "identity",
    description:
      "Enter the one-time code we sent to your email to verify your account and continue securely.",
    points: [
      "Codes expire in 10 minutes",
      "Never share your OTP with anyone",
      "Check spam if you do not see the email",
    ],
  },
};
