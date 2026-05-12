import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogMasonryBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog Masonry | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog Masonry"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog Masonry" },
      ]}
    >
      <BlogMasonryBody />
    </MarketingSubPage>
  );
}
