import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { TestimonialsBody } from "@/components/dream-lms/pages/staticMarketingBodies";

export const metadata: Metadata = {
  title: "Testimonials | Dreams LMS",
};

export default function Page() {
  return (
    <MarketingSubPage
      title="Testimonials"
      embedMain
      description=""
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Testimonials" },
      ]}
    >
      <TestimonialsBody />
    </MarketingSubPage>
  );
}
