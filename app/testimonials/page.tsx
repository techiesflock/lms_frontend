import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { TestimonialsBodyModern } from "@/components/dream-lms/pages/marketingPagesModern";

export const metadata: Metadata = {
  title: "Testimonials | MetaWaves",
  description: "Stories from learners and professionals who grew with MetaWaves.",
};

export default function Page() {
  return (
    <MarketingSubPage title="Testimonials" hideBreadcrumb embedMain>
      <TestimonialsBodyModern />
    </MarketingSubPage>
  );
}
