import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogCarousalBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog Carousal | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog Carousal"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog Carousal" },
      ]}
    >
      <BlogCarousalBody />
    </MarketingSubPage>
  );
}
