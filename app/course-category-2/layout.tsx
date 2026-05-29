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

export default function CourseCategory2Layout({ children }: { children: ReactNode }) {
  return (
    <div className={`${syne.variable} ${plusJakarta.variable} mw-catalog-fonts`}>
      {children}
    </div>
  );
}
