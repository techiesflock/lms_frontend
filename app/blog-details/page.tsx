import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogDetailsBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog Details | MetaWaves",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog Details"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog Details" },
      ]}
    >
      <BlogDetailsBody />
    </MarketingSubPage>
  );
}
