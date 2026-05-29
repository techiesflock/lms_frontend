import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogLeftSidebarModern } from "@/components/dream-lms/blog/blogMarketingModern";

export const metadata: Metadata = {
  title: "Blog Left Sidebar | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="Blog" hideBreadcrumb embedMain>
      <BlogLeftSidebarModern />
    </MarketingSubPage>
  );
}
