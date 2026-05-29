import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { NotificationsBodyModern } from "@/components/dream-lms/pages/marketingPagesModern";

export const metadata: Metadata = {
  title: "Notifications | MetaWaves",
  description: "Your enrollments, assignments, and messages in one place.",
};

export default function Page() {
  return (
    <MarketingSubPage title="Notifications" hideBreadcrumb embedMain>
      <NotificationsBodyModern />
    </MarketingSubPage>
  );
}
