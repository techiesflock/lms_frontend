import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogRightSidebarBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog Right Sidebar | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog Right Sidebar"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog Right Sidebar" },
      ]}
    >
      <BlogRightSidebarBody />
    </MarketingSubPage>
  );
}
