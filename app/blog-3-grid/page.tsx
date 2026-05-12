import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogThreeGridBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog 3 Grid | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog 3 Grid"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog 3 Grid" },
      ]}
    >
      <BlogThreeGridBody />
    </MarketingSubPage>
  );
}
