import { MarketingFontsLayout } from "@/components/dream-lms/pages/MarketingFontsLayout";
import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <MarketingFontsLayout>{children}</MarketingFontsLayout>;
}
