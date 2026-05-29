import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogThreeGridModern } from "@/components/dream-lms/blog/blogMarketingModern";

export const metadata: Metadata = {
  title: "Blog 3 Grid | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="Blog" hideBreadcrumb embedMain>
      <BlogThreeGridModern />
    </MarketingSubPage>
  );
}
