import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogDetailsRightSidebarModern } from "@/components/dream-lms/blog/blogMarketingModern";

export const metadata: Metadata = {
  title: "Blog Details Right Sidebar | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="Blog" hideBreadcrumb embedMain>
      <BlogDetailsRightSidebarModern />
    </MarketingSubPage>
  );
}
