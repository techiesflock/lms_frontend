import type { Metadata } from "next";
import Link from "next/link";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";

export const metadata: Metadata = {
  title: "Invoice",
  description: "Static invoice and receipt UI.",
};

export default function InvoicePage() {
  return (
    <MarketingSubPage title="Invoice">
      <div className="row">
        <div className="col-lg-9 mx-auto">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4 p-lg-5">
              <div className="d-flex flex-column flex-md-row justify-content-between gap-3 border-bottom pb-4 mb-4">
                <div>
                  <h3 className="mb-1">Invoice #INV-9821</h3>
                  <p className="mb-0 text-muted">Issued Oct 20, 2025 · Static receipt UI</p>
                </div>
                <div className="text-md-end">
                  <h5 className="mb-1">Dream LMS</h5>
                  <p className="mb-0 text-muted">support@dreamlms.example</p>
                </div>
              </div>

              <div className="row mb-4">
                <div className="col-md-6">
                  <h6>Bill to</h6>
                  <p className="mb-0 text-muted">Sarah Johnson</p>
                  <p className="mb-0 text-muted">sarah.j@mail.com</p>
                  <p className="mb-0 text-muted">New York, USA</p>
                </div>
                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                  <span className="badge bg-success-subtle text-success">Paid</span>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Course</th>
                      <th>Instructor</th>
                      <th className="text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Information About UI/UX Design Degree</td>
                      <td>David Benitez</td>
                      <td className="text-end">$120.00</td>
                    </tr>
                    <tr>
                      <td>Sketch from A to Z (2024): Become an app designer</td>
                      <td>Andrew Pirtle</td>
                      <td className="text-end">$160.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="row justify-content-end">
                <div className="col-md-5">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <strong>$280.00</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Discount</span>
                    <strong>-$79.80</strong>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax</span>
                    <strong>$25.00</strong>
                  </div>
                  <div className="d-flex justify-content-between border-top pt-3">
                    <span className="fw-semibold">Total</span>
                    <strong>$225.20</strong>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-end gap-2 mt-4">
                <Link href="/student-order-history" className="btn btn-outline-secondary">
                  Order history
                </Link>
                <button type="button" className="btn btn-secondary">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MarketingSubPage>
  );
}
