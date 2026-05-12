import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { NotificationsBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "Notifications | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Notifications"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Notifications" },
      ]}
    >
      <NotificationsBody />
    </MarketingSubPage>
  );
}
