import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import {
  blogNav,
  coursesNav,
  dashboardNav,
  pagesNav,
} from "@/config/marketingNav";
import { NavSimpleDropdown } from "./NavMenus";

export function SiteHeader() {
  return (
    <header className="header-one">
      <div className="container">
        <div className="header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="#">
              <span className="bar-icon">
                <i className="isax isax-menu" />
              </span>
            </a>
            <div className="navbar-logo">
              <Link className="logo-white header-logo" href="/">
                <img
                  src={assetPath("img/logo-white.svg")}
                  className="logo"
                  alt="Dreams LMS"
                />
              </Link>
              <Link className="logo-dark header-logo" href="/">
                <img
                  src={assetPath("img/logo-white.svg")}
                  className="logo"
                  alt=""
                  aria-hidden
                />
              </Link>
            </div>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link href="/" className="menu-logo">
                <img
                  src={assetPath("img/logo.svg")}
                  className="img-fluid"
                  alt="Dreams LMS"
                />
              </Link>
              <button
                type="button"
                id="menu_close"
                className="menu-close"
                aria-label="Close menu"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            <ul className="main-nav">
              <li>
                <Link href="/">Home</Link>
              </li>
              <NavSimpleDropdown label="Courses" children={coursesNav} />
              <NavSimpleDropdown label="Dashboard" children={dashboardNav} />
              <NavSimpleDropdown label="Pages" children={pagesNav} />
              <NavSimpleDropdown label="Blog" children={blogNav} />
            </ul>

            <div className="menu-dropdown">
              <div className="cart-item">
                <h6>Cart & Wishlist</h6>
                <div className="icon-btn">
                  <Link href="/cart" className="position-relative">
                    <i className="isax isax-shopping-cart5" />
                    <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">
                      1
                    </span>
                  </Link>
                </div>
              </div>
              <div className="dropdown flag-dropdown mb-2">
                <a
                  href="#"
                  className="dropdown-toggle d-flex align-items-center"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src={assetPath("img/flags/us-flag.svg")}
                    className="me-2"
                    alt=""
                  />
                  ENG
                </a>
                <ul className="dropdown-menu p-2 mt-2">
                  <li>
                    <a className="dropdown-item rounded d-flex align-items-center" href="#">
                      <img
                        src={assetPath("img/flags/us-flag.svg")}
                        className="me-2"
                        alt=""
                      />
                      ENG
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded d-flex align-items-center" href="#">
                      <img
                        src={assetPath("img/flags/arab-flag.svg")}
                        className="me-2"
                        alt=""
                      />
                      ARA
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded d-flex align-items-center" href="#">
                      <img
                        src={assetPath("img/flags/france-flag.svg")}
                        className="me-2"
                        alt=""
                      />
                      FRE
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown mb-2">
                <a
                  href="#"
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  USD
                </a>
                <ul className="dropdown-menu p-2 mt-2">
                  <li>
                    <a className="dropdown-item rounded" href="#">
                      USD
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded" href="#">
                      YEN
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item rounded" href="#">
                      EURO
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown mb-2">
                <a
                  href="#"
                  className="dropdown-toggle theme-dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Light
                </a>
                <ul className="dropdown-menu p-2 mt-2">
                  <li>
                    <a
                      className="dropdown-item rounded light-mode-dropdown"
                      href="javascript:void(0);"
                    >
                      Light
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item rounded dark-mode-dropdown"
                      href="javascript:void(0);"
                    >
                      Dark
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu-login">
              <Link href="/login" className="btn btn-primary w-100 mb-2">
                <i className="isax isax-user me-2" />
                Sign In
              </Link>
              <Link href="/register" className="btn btn-secondary w-100">
                <i className="isax isax-user-edit me-2" />
                Register
              </Link>
            </div>
          </div>
          <div className="header-btn d-flex align-items-center">
            <div className="dropdown flag-dropdown icon-btn">
              <a
                href="#"
                className="d-inline-flex align-items-center"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Language"
              >
                <img src={assetPath("img/flags/us-flag.svg")} alt="" />
              </a>
              <ul className="dropdown-menu p-2 mt-2">
                <li>
                  <a className="dropdown-item rounded d-flex align-items-center" href="#">
                    <img
                      src={assetPath("img/flags/us-flag.svg")}
                      className="me-2"
                      alt=""
                    />
                    ENG
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded d-flex align-items-center" href="#">
                    <img
                      src={assetPath("img/flags/arab-flag.svg")}
                      className="me-2"
                      alt=""
                    />
                    ARA
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded d-flex align-items-center" href="#">
                    <img
                      src={assetPath("img/flags/france-flag.svg")}
                      className="me-2"
                      alt=""
                    />
                    FRE
                  </a>
                </li>
              </ul>
            </div>
            <div className="dropdown icon-btn">
              <a
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                aria-label="Currency"
              >
                <i className="isax isax-dollar-circle4" />
              </a>
              <ul className="dropdown-menu p-2 mt-2">
                <li>
                  <a className="dropdown-item rounded" href="#">
                    USD
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded" href="#">
                    YEN
                  </a>
                </li>
                <li>
                  <a className="dropdown-item rounded" href="#">
                    EURO
                  </a>
                </li>
              </ul>
            </div>
            <div className="icon-btn">
              <button
                type="button"
                id="dark-mode-toggle"
                className="theme-toggle activate"
                aria-label="Light mode"
              >
                <i className="isax isax-sun-15" />
              </button>
              <button
                type="button"
                id="light-mode-toggle"
                className="theme-toggle"
                aria-label="Dark mode"
              >
                <i className="isax isax-moon" />
              </button>
            </div>
            <div className="icon-btn">
              <Link href="/cart" className="position-relative">
                <i className="isax isax-shopping-cart5" />
                <span className="count-icon bg-success p-1 rounded-pill text-white fs-10 fw-bold">
                  1
                </span>
              </Link>
            </div>
            <Link href="/login" className="btn btn-primary d-inline-flex align-items-center me-2">
              Sign In
            </Link>
            <Link href="/register" className="btn btn-secondary me-0">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
