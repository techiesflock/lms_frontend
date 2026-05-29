import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogDetailsModern } from "@/components/dream-lms/blog/blogMarketingModern";

export const metadata: Metadata = {
  title: "Blog Details | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage title="Blog" hideBreadcrumb embedMain>
      <BlogDetailsModern />
    </MarketingSubPage>
  );
}
