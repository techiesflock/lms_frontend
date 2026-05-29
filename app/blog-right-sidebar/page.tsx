import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogRightSidebarModern } from "@/components/dream-lms/blog/blogMarketingModern";

export const metadata: Metadata = {
  title: "Blog Right Sidebar | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="Blog" hideBreadcrumb embedMain>
      <BlogRightSidebarModern />
    </MarketingSubPage>
  );
}
