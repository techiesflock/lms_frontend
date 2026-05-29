import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { UdCoursePageShell } from "@/components/dream-lms/courses/shared/UdCoursePageShell";

const CART_LINES = [
  {
    image: "img/course/course-01.jpg",
    instructor: "David Benitez",
    title: "Information About UI/UX Design Degree",
    rating: "4.9",
    reviews: 200,
    level: "Intermediate",
    price: 120,
    originalPrice: 199,
  },
  {
    image: "img/course/course-03.jpg",
    instructor: "Andrew Pirtle",
    title: "Sketch from A to Z (2024): Become an app designer",
    rating: "4.6",
    reviews: 170,
    level: "Basic",
    price: 160,
    originalPrice: 249,
  },
] as const;

export function CartPageBody() {
  const subtotal = CART_LINES.reduce((sum, line) => sum + line.price, 0);

  return (
    <UdCoursePageShell
      title="Shopping cart"
      subtitle={`${CART_LINES.length} courses in your cart`}
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Courses", href: "/course-grid" },
        { label: "Cart" },
      ]}
    >
      <div className="container">
        <div className="ud-flow-split">
          <div className="ud-flow-split__main">
            <div className="ud-flow-toolbar">
              <h2 className="ud-flow-toolbar__title">{CART_LINES.length} courses</h2>
              <div className="ud-flow-toolbar__actions">
                <Link href="/cart-empty" className="ud-text-btn">
                  Empty state
                </Link>
                <button type="button" className="ud-text-btn ud-text-btn--danger">
                  Clear cart
                </button>
              </div>
            </div>

            <ul className="ud-flow-cart-list">
              {CART_LINES.map((line) => (
                <li key={line.title} className="ud-flow-cart-item">
                  <Link href="/course-details" className="ud-flow-cart-item__thumb">
                    <img src={assetPath(line.image)} alt="" />
                  </Link>
                  <div className="ud-flow-cart-item__body">
                    <p className="ud-flow-cart-item__instructor">{line.instructor}</p>
                    <h3 className="ud-flow-cart-item__title">
                      <Link href="/course-details">{line.title}</Link>
                    </h3>
                    <p className="ud-flow-cart-item__meta">
                      <span className="ud-flow-rating">{line.rating}</span>
                      <span>({line.reviews} ratings)</span>
                      <span aria-hidden="true">·</span>
                      <span>{line.level}</span>
                    </p>
                  </div>
                  <div className="ud-flow-cart-item__price">
                    <strong>${line.price}</strong>
                    <span className="ud-flow-price-was">${line.originalPrice}</span>
                    <button type="button" className="ud-text-btn ud-text-btn--danger" aria-label="Remove">
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="ud-flow-coupon">
              <label className="ud-flow-label" htmlFor="cart-coupon">
                Coupon code
              </label>
              <div className="ud-flow-coupon__row">
                <input id="cart-coupon" className="ud-flow-input" defaultValue="LEARN25" />
                <button type="button" className="btn ud-btn-primary">
                  Apply
                </button>
              </div>
              <p className="ud-flow-hint">
                <span className="ud-flow-badge ud-flow-badge--success">LEARN25 applied</span>
              </p>
            </div>
          </div>

          <aside className="ud-flow-split__aside">
            <div className="ud-flow-summary ud-flow-summary--sticky">
              <h3 className="ud-flow-summary__title">Order summary</h3>
              <div className="ud-flow-summary__row">
                <span>Subtotal</span>
                <strong>${subtotal}</strong>
              </div>
              <p className="ud-flow-summary__note">30-day money-back guarantee on all courses.</p>
              <div className="ud-flow-summary__total">
                <span>Total</span>
                <strong>${subtotal}</strong>
              </div>
              <Link href="/checkout" className="btn ud-btn-primary w-100">
                Proceed to checkout
              </Link>
              <Link href="/course-grid" className="btn ud-btn-outline w-100 mt-2">
                Continue shopping
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </UdCoursePageShell>
  );
}
