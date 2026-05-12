import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

const CART_LINES = [
  {
    image: "img/course/course-01.jpg",
    instructorImg: "img/user/user-01.jpg",
    instructor: "David Benitez",
    title: "Information About UI/UX Design Degree",
    rating: "4.9 (200 Reviews)",
    level: "Intermediate",
    price: "$120",
  },
  {
    image: "img/course/course-03.jpg",
    instructorImg: "img/user/user-08.jpg",
    instructor: "Andrew Pirtle",
    title: "Sketch from A to Z (2024): Become an app designer",
    rating: "4.6 (170 Reviews)",
    level: "Basic",
    price: "$160",
  },
] as const;

export function CartPageBody() {
  return (
    <div className="content">
      <div className="container">
        <div className="cart-cover">
          <div className="cart-items">
            <div>
              <div className="cart-head border-bottom d-flex justify-content-between align-items-center pb-4">
                <h5 className="mb-0">2 Courses</h5>
                <button type="button" className="btn btn-sm btn-danger-ghost mb-0">
                  <i className="isax isax-close-circle me-1" />
                  Clear cart
                </button>
              </div>
              <div className="row row-gap-3 pb-3 mb-3 border-bottom">
                {CART_LINES.map((line) => (
                  <div key={line.title} className="col-md-12">
                    <div className="cart-item mb-0">
                      <div className="row align-items-center row-gap-3">
                        <div className="col-md-3">
                          <div className="cart-img">
                            <Link href="/course-details">
                              <img src={assetPath(line.image)} alt="" className="img-fluid w-100" />
                            </Link>
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="row align-items-center justify-content-between">
                            <div className="col-md-9">
                              <div className="d-flex align-items-center mb-2">
                                <Link href="/instructor-details" className="avatar avatar-sm rounded-circle me-2">
                                  <img src={assetPath(line.instructorImg)} alt="" className="img-fluid rounded-circle" />
                                </Link>
                                <p className="mb-0">
                                  <Link href="/instructor-details">{line.instructor}</Link>
                                </p>
                              </div>
                              <div className="mb-2">
                                <h6 className="fs-18 mb-0">
                                  <Link href="/course-details">{line.title}</Link>
                                </h6>
                              </div>
                              <div className="d-flex align-items-center">
                                <span className="star me-2">
                                  <i className="fa-solid fa-star" />
                                </span>
                                <p className="mb-0">{line.rating}</p>
                                <span className="mx-2 bg-secondary rounded-circle dot" />
                                <p className="mb-0">{line.level}</p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="d-flex align-items-center justify-content-end gap-4 cart-trash">
                                <h5 className="text-secondary">{line.price}</h5>
                                <Link href="#" className="trash-btn" aria-label="Remove from cart">
                                  <i className="isax isax-trash4" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-light border rounded-2 p-3 mb-4">
                <div className="row align-items-center justify-content-between row-gap-3">
                  <div className="col-md-6">
                    <h6 className="mb-1">Subtotal</h6>
                    <p className="mb-0">
                      All Courses have a <span className="text-gray-9 fw-medium mx-1">30-day</span>money-back guarantee
                    </p>
                  </div>
                  <div className="col-md-6 text-end">
                    <h5>$280</h5>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-end flex-wrap">
                <Link href="/course-grid" className="btn continue-shopping-btn rounded-pill me-2">
                  Continue Shopping
                </Link>
                <Link href="/checkout" className="btn checkout-btn rounded-pill">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
