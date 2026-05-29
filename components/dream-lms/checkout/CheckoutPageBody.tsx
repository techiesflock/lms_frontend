import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { UdCoursePageShell } from "@/components/dream-lms/courses/shared/UdCoursePageShell";

const ORDER_LINES = [
  { image: "img/course/course-01.jpg", title: "Information About UI/UX Design Degree", price: 120 },
  { image: "img/course/course-03.jpg", title: "Sketch from A to Z (2024): Become an app designer", price: 160 },
] as const;

const STEPS = ["Billing", "Payment", "Confirmation"] as const;

export function CheckoutPageBody() {
  const subtotal = 280;
  const tax = 25;
  const total = 225.2;

  return (
    <UdCoursePageShell
      title="Checkout"
      subtitle="Secure payment — your courses are available immediately after purchase."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Cart", href: "/cart" },
        { label: "Checkout" },
      ]}
    >
      <div className="container">
        <ol className="ud-flow-steps" aria-label="Checkout progress">
          {STEPS.map((step, index) => (
            <li key={step} className={index === 0 ? "is-active" : ""}>
              <span className="ud-flow-steps__num">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <div className="ud-flow-split">
          <div className="ud-flow-split__main">
            <section className="ud-flow-card">
              <h2 className="ud-flow-card__title">Billing address</h2>
              <form className="ud-flow-form" action="#">
                <div className="ud-flow-form__grid">
                  <div className="ud-flow-field">
                    <label className="ud-flow-label" htmlFor="co-first">
                      First name <span className="ud-flow-required">*</span>
                    </label>
                    <input id="co-first" className="ud-flow-input" type="text" />
                  </div>
                  <div className="ud-flow-field">
                    <label className="ud-flow-label" htmlFor="co-last">
                      Last name <span className="ud-flow-required">*</span>
                    </label>
                    <input id="co-last" className="ud-flow-input" type="text" />
                  </div>
                  <div className="ud-flow-field ud-flow-field--full">
                    <label className="ud-flow-label" htmlFor="co-address">
                      Address <span className="ud-flow-required">*</span>
                    </label>
                    <input id="co-address" className="ud-flow-input" type="text" />
                  </div>
                  <div className="ud-flow-field">
                    <label className="ud-flow-label" htmlFor="co-country">
                      Country <span className="ud-flow-required">*</span>
                    </label>
                    <input id="co-country" className="ud-flow-input" type="text" />
                  </div>
                  <div className="ud-flow-field">
                    <label className="ud-flow-label" htmlFor="co-city">
                      City <span className="ud-flow-required">*</span>
                    </label>
                    <input id="co-city" className="ud-flow-input" type="text" />
                  </div>
                </div>
                <label className="ud-flow-check">
                  <input type="checkbox" defaultChecked />
                  <span>Save this information for next time</span>
                </label>
              </form>
            </section>

            <section className="ud-flow-card">
              <h2 className="ud-flow-card__title">Payment method</h2>
              <div className="ud-flow-pay-tabs" role="tablist">
                {["Card", "PayPal", "Stripe"].map((method, i) => (
                  <button
                    key={method}
                    type="button"
                    className={`ud-flow-pay-tab${i === 0 ? " is-active" : ""}`}
                  >
                    {method}
                  </button>
                ))}
              </div>
              <div className="ud-flow-form__grid">
                <div className="ud-flow-field ud-flow-field--full">
                  <label className="ud-flow-label" htmlFor="co-card">
                    Card number <span className="ud-flow-required">*</span>
                  </label>
                  <input id="co-card" className="ud-flow-input" type="text" placeholder="4242 4242 4242 4242" />
                </div>
                <div className="ud-flow-field">
                  <label className="ud-flow-label" htmlFor="co-exp">
                    Expiry <span className="ud-flow-required">*</span>
                  </label>
                  <input id="co-exp" className="ud-flow-input" type="text" placeholder="MM / YY" />
                </div>
                <div className="ud-flow-field">
                  <label className="ud-flow-label" htmlFor="co-cvc">
                    CVC <span className="ud-flow-required">*</span>
                  </label>
                  <input id="co-cvc" className="ud-flow-input" type="text" />
                </div>
              </div>
              <div className="ud-flow-form-actions">
                <Link href="/order-success" className="btn ud-btn-primary">
                  Pay ${total.toFixed(2)}
                </Link>
              </div>
            </section>
          </div>

          <aside className="ud-flow-split__aside">
            <div className="ud-flow-summary ud-flow-summary--sticky">
              <h3 className="ud-flow-summary__title">Order details</h3>
              <ul className="ud-flow-order-lines">
                {ORDER_LINES.map((line) => (
                  <li key={line.title} className="ud-flow-order-line">
                    <img src={assetPath(line.image)} alt="" />
                    <div>
                      <p className="ud-flow-order-line__title">{line.title}</p>
                      <strong>${line.price}</strong>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="ud-flow-summary__row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="ud-flow-summary__row">
                <span>Tax (VAT)</span>
                <span>${tax}</span>
              </div>
              <div className="ud-flow-summary__total">
                <span>Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
              <div className="ud-flow-summary__links">
                <Link href="/order-success" className="ud-text-btn">
                  Success state →
                </Link>
                <Link href="/order-failed" className="ud-text-btn">
                  Failed state →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </UdCoursePageShell>
  );
}
