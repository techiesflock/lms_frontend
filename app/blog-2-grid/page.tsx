import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogTwoGridBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog 2 Grid | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog 2 Grid"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog 2 Grid" },
      ]}
    >
      <BlogTwoGridBody />
    </MarketingSubPage>
  );
}
