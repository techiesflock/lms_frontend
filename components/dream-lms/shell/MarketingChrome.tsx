import type { ReactNode } from "react";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

type MarketingChromeProps = {
  children: ReactNode;
  /** Light header + compact breadcrumb spacing for inner marketing pages. */
  innerPage?: boolean;
};

/**
 * Shared marketing shell: `SiteHeader`, page content, `SiteFooter`.
 */
export function MarketingChrome({ children, innerPage = false }: MarketingChromeProps) {
  return (
    <div className={`main-wrapper${innerPage ? " mw-inner-page" : ""}`}>
      <SiteHeader innerPage={innerPage} />
      {children}
      <SiteFooter />
    </div>
  );
}
