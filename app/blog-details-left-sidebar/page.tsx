import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogDetailsLeftSidebarBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog Details Left Sidebar | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog Details Left Sidebar"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog Details Left Sidebar" },
      ]}
    >
      <BlogDetailsLeftSidebarBody />
    </MarketingSubPage>
  );
}
