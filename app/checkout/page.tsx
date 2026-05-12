import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CheckoutPageBody } from "@/components/dream-lms/checkout/CheckoutPageBody";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Secure checkout for course purchases.",
};

export default function CheckoutPage() {
  return (
    <MarketingSubPage title="Course Checkout" embedMain>
      <CheckoutPageBody />
    </MarketingSubPage>
  );
}
