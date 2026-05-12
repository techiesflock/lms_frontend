import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { StaticUiStatesPageBody } from "@/components/dream-lms/shared/StaticUiStatesPageBody";

export const metadata: Metadata = {
  title: "UI States",
  description: "Static reusable UI states for the LMS template.",
};

export default function UiStatesPage() {
  return (
    <MarketingSubPage
      title="UI States"
      breadcrumb={[{ label: "Home", href: "/" }, { label: "UI States" }]}
      embedMain
    >
      <StaticUiStatesPageBody />
    </MarketingSubPage>
  );
}
