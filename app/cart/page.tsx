import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CartPageBody } from "@/components/dream-lms/checkout/CartPageBody";

export const metadata: Metadata = {
  title: "Cart",
  description: "Shopping cart for courses.",
};

export default function CartPage() {
  return (
    <MarketingSubPage title="Course Cart" embedMain>
      <CartPageBody />
    </MarketingSubPage>
  );
}
