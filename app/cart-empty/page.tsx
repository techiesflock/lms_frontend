import type { Metadata } from "next";
import Link from "next/link";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";

export const metadata: Metadata = {
  title: "Empty Cart",
  description: "Static empty cart UI.",
};

export default function CartEmptyPage() {
  return (
    <MarketingSubPage title="Empty Cart">
      <div className="row">
        <div className="col-lg-7 mx-auto">
          <div className="card border-0 shadow-sm text-center">
            <div className="card-body p-5">
              <span className="d-inline-flex align-items-center justify-content-center rounded-circle bg-light mb-4 p-4">
                <i className="isax isax-shopping-cart fs-1 text-secondary" />
              </span>
              <h3 className="mb-2">Your cart is empty</h3>
              <p className="text-muted mb-4">
                Static empty-cart page for learners who have not added any courses yet.
              </p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
                <Link href="/course-grid" className="btn btn-secondary">
                  Browse courses
                </Link>
                <Link href="/student-wishlist" className="btn btn-outline-secondary">
                  View wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingSubPage>
  );
}
