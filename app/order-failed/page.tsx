import type { Metadata } from "next";
import Link from "next/link";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";

export const metadata: Metadata = {
  title: "Order Failed",
  description: "Static failed checkout UI.",
};

export default function OrderFailedPage() {
  return (
    <MarketingSubPage title="Order Failed">
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="card border-0 shadow-sm text-center">
            <div className="card-body p-5">
              <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-danger-subtle mb-4 p-4">
                <i className="isax isax-close-circle fs-1 text-danger" />
              </span>
              <h3 className="mb-2">Payment could not be completed</h3>
              <p className="text-muted mb-4">
                Static failed-payment state for declined cards, cancelled checkout, or payment timeout.
              </p>
              <div className="alert alert-danger text-start">
                <strong>Reason:</strong> Payment authorization failed. Please try another method.
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
                <Link href="/checkout" className="btn btn-secondary">
                  Retry checkout
                </Link>
                <Link href="/cart" className="btn btn-outline-secondary">
                  Back to cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingSubPage>
  );
}
