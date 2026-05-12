import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogGridOneBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog 1 Grid | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog 1 Grid"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog 1 Grid" },
      ]}
    >
      <BlogGridOneBody />
    </MarketingSubPage>
  );
}
