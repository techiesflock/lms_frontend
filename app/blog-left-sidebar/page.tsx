import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogLeftSidebarBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog Left Sidebar | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog Left Sidebar"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog Left Sidebar" },
      ]}
    >
      <BlogLeftSidebarBody />
    </MarketingSubPage>
  );
}
