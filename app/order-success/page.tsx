import type { Metadata } from "next";
import Link from "next/link";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";

export const metadata: Metadata = {
  title: "Order Success",
  description: "Static order confirmation UI.",
};

export default function OrderSuccessPage() {
  return (
    <MarketingSubPage title="Order Success">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card border-0 shadow-sm text-center">
            <div className="card-body p-5">
              <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-success-subtle mb-4 p-4">
                <i className="isax isax-tick-circle fs-1 text-success" />
              </span>
              <h3 className="mb-2">Payment successful</h3>
              <p className="text-muted mb-4">
                Your static order confirmation is ready. Courses are shown as enrolled for this UI phase.
              </p>
              <div className="bg-light rounded-3 border p-4 text-start mb-4">
                <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                  <span>Order ID</span>
                  <strong>O-9821</strong>
                </div>
                <div className="d-flex justify-content-between border-bottom pb-3 mb-3">
                  <span>Total</span>
                  <strong>$225.20</strong>
                </div>
                <div className="d-flex justify-content-between">
                  <span>Status</span>
                  <strong className="text-success">Completed</strong>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
                <Link href="/course-watch" className="btn btn-secondary">
                  Start learning
                </Link>
                <Link href="/invoice" className="btn btn-outline-secondary">
                  View invoice
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingSubPage>
  );
}
