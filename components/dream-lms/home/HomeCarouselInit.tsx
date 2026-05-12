"use client";

import { useEffect } from "react";

type JQueryLike = {
  length: number;
  hasClass: (c: string) => boolean;
  slick: (methodOrOpts: string | Record<string, unknown>, ...rest: unknown[]) => void;
};

type JQueryStatic = ((sel: string) => JQueryLike) & { fn?: { slick?: unknown } };

type SwiperLike = { destroy: (del?: boolean, clean?: boolean) => void };

type SwiperConstructor = new (
  el: Element,
  opts: Record<string, unknown>,
) => SwiperLike;

declare global {
  interface Window {
    jQuery?: JQueryStatic;
    Swiper?: SwiperConstructor;
    AOS?: { init: (opts?: Record<string, unknown>) => void; refresh: () => void };
  }
}

function getJQuery(): JQueryStatic | null {
  const w = typeof window !== "undefined" ? window : undefined;
  const $ = w?.jQuery;
  if (!$ || typeof $ !== "function" || !$?.fn?.slick) return null;
  return $;
}

function initSlickInstitutions($: (s: string) => JQueryLike) {
  const $el = $(".institutions-slider.lazy");
  if (!$el.length || $el.hasClass("slick-initialized")) return;
  $el.slick({
    lazyLoad: "ondemand",
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      {
        breakpoint: 1400,
        settings: { slidesToShow: 6, infinite: true, dots: false },
      },
      { breakpoint: 1200, settings: { slidesToShow: 5 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
    ],
  });
}

function initSlickTopCourses($: (s: string) => JQueryLike) {
  const $el = $(".top-courses-slider.lazy");
  if (!$el.length || $el.hasClass("slick-initialized")) return;
  $el.slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, infinite: true, dots: false },
      },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  });
}

function initSlickFeaturedCourses($: (s: string) => JQueryLike) {
  const $el = $(".feature-course-slider-2");
  if (!$el.length || $el.hasClass("slick-initialized")) return;
  $el.slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
}

function initSlickFeaturedInstructors($: (s: string) => JQueryLike) {
  const $el = $(".featured-instructor-slider.lazy");
  if (!$el.length || $el.hasClass("slick-initialized")) return;
  $el.slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
}

function initSlickTestimonials($: (s: string) => JQueryLike) {
  const $el = $(".testimonials-slider.lazy");
  if (!$el.length || $el.hasClass("slick-initialized")) return;
  $el.slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, infinite: true, dots: false },
      },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  });
}

function initBannerSwiper() {
  const Ctor = typeof window !== "undefined" ? window.Swiper : undefined;
  const el = document.querySelector<HTMLElement>(".swiper-slider-banner");
  if (!Ctor || !el) return;
  const inst = (el as HTMLElement & { swiper?: SwiperLike }).swiper;
  if (inst) return;
  new Ctor(el, { effect: "cards", grabCursor: true });
}

function initAos() {
  if (typeof window === "undefined" || !window.AOS) return;
  window.AOS.init({ duration: 1200, once: true });
}

export function initHomeCarousels() {
  const $ = getJQuery();
  if (!$) return;
  initSlickInstitutions($);
  initSlickTopCourses($);
  initSlickFeaturedCourses($);
  initSlickFeaturedInstructors($);
  initSlickTestimonials($);
  initBannerSwiper();
  initAos();
}

const SLICK_SELECTORS = [
  ".institutions-slider.lazy",
  ".top-courses-slider.lazy",
  ".feature-course-slider-2",
  ".featured-instructor-slider.lazy",
  ".testimonials-slider.lazy",
] as const;

export function destroyHomeCarousels() {
  const $ = getJQuery();
  if (!$) return;
  for (const sel of SLICK_SELECTORS) {
    const $el = $(sel);
    if ($el.length && $el.hasClass("slick-initialized")) {
      try {
        $el.slick("unslick");
      } catch {
        /* slick already torn down */
      }
    }
  }
  const banner = document.querySelector<HTMLElement & { swiper?: SwiperLike }>(
    ".swiper-slider-banner",
  );
  banner?.swiper?.destroy(true, true);
}

function scriptsAlreadyReady(): boolean {
  return !!document.querySelector(
    'script[data-dream-lms-src="/assets/js/script.js"][data-loaded="1"]',
  );
}

/**
 * Re-binds Slick / Swiper / AOS after React mounts. The vendor `script.js` runs
 * only once on first load; Strict Mode remounts replace the DOM without re-running it,
 * which leaves carousels as unstyled stacked slides and stray controls.
 */
export function HomeCarouselInit() {
  useEffect(() => {
    const run = () => {
      initHomeCarousels();
    };

    window.addEventListener("dream-lms:scripts-ready", run);
    if (scriptsAlreadyReady()) {
      queueMicrotask(run);
    }

    return () => {
      window.removeEventListener("dream-lms:scripts-ready", run);
      destroyHomeCarousels();
    };
  }, []);

  return null;
}
