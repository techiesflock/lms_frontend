import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import type { ReactNode } from "react";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-mw-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-mw-body",
  display: "swap",
});

export default function CourseFlowFontsLayout({ children }: { children: ReactNode }) {
  return <div className={`${syne.variable} ${plusJakarta.variable} mw-course-flow-fonts`}>{children}</div>;
}
