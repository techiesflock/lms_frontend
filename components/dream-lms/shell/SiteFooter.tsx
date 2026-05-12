import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export function SiteFooter() {
  return (
    <footer className="footer footer-one">
      <div className="footer-top">
        <div className="container">
          <div className="row row-gap-4">
            <div className="col-lg-4">
              <div className="footer-about">
                <div className="footer-logo">
                  <img src={assetPath("img/logo-white.svg")} alt="Dreams LMS" />
                </div>
                <p>
                  Platform designed to help organizations, educators, and learners
                  manage, deliver, and track learning and training activities.
                </p>
                <div className="d-flex align-items-center">
                  <a href="#" className="me-2" aria-label="App Store">
                    <img src={assetPath("img/icon/appstore.svg")} alt="" />
                  </a>
                  <a href="#" aria-label="Google Play">
                    <img src={assetPath("img/icon/googleplay.svg")} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="row row-gap-4">
                <div className="col-lg-4 col-md-4">
                  <div className="footer-widget footer-menu">
                    <h3 className="footer-title">Support</h3>
                    <ul>
                      <li>
                        <Link href="/course-grid">Education</Link>
                      </li>
                      <li>
                        <Link href="/add-course">Enroll Course</Link>
                      </li>
                      <li>
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <Link href="/pricing-plan">Payments</Link>
                      </li>
                      <li>
                        <Link href="/blog-grid">Blogs</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="footer-widget footer-menu">
                    <h3 className="footer-title">About</h3>
                    <ul>
                      <li>
                        <Link href="/course-category">Categories</Link>
                      </li>
                      <li>
                        <Link href="/course-list">Courses</Link>
                      </li>
                      <li>
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link href="/faq">Faq</Link>
                      </li>
                      <li>
                        <Link href="/contact-us">Contacts</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="footer-widget footer-menu">
                    <h3 className="footer-title">Useful Links</h3>
                    <ul>
                      <li>
                        <a href="#">Our values</a>
                      </li>
                      <li>
                        <a href="#">Our advisory board</a>
                      </li>
                      <li>
                        <a href="#">Our partners</a>
                      </li>
                      <li>
                        <a href="#">Become a partner</a>
                      </li>
                      <li>
                        <a href="#">Work at Future Learn</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="footer-widget footer-contact">
                <h3 className="footer-title">Subscribe Newsletter</h3>
                <div className="footer-newsletter">
                  <p>Sign up to get updates & news.</p>
                  <form action="#">
                    <div className="subscribe-form">
                      <span>
                        <i className="isax isax-message-text" />
                      </span>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                    <button type="submit" className="btn btn-secondary btn-xl w-100">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row row-gap-2">
            <div className="col-lg-5">
              <div className="text-center text-lg-start">
                <p>
                  Copyright 2026 © <span className="text-secondary">DreamsLMS</span>.
                  All right reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <ul className="d-flex align-items-center justify-content-center footer-link">
                <li>
                  <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <div className="social-icon">
                <a href="#" aria-label="Facebook">
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a href="#" aria-label="Instagram">
                  <i className="fa-brands fa-instagram" />
                </a>
                <a href="#" aria-label="Twitter">
                  <i className="fa-brands fa-x-twitter" />
                </a>
                <a href="#" aria-label="YouTube">
                  <i className="fa-brands fa-youtube" />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
