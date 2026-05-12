import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type MarketingChromeProps = {
  children: ReactNode;
};

/**
 * Shared marketing shell: `SiteHeader`, page content, `SiteFooter`.
 */
export function MarketingChrome({ children }: MarketingChromeProps) {
  return (
    <div className="main-wrapper">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
