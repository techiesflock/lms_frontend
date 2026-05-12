import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { BlogDetailsRightSidebarBody } from "@/components/dream-lms/blog/blogMarketingBodies";

export const metadata: Metadata = {
  title: "Blog Details Right Sidebar | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Blog Details Right Sidebar"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Blog Details Right Sidebar" },
      ]}
    >
      <BlogDetailsRightSidebarBody />
    </MarketingSubPage>
  );
}
