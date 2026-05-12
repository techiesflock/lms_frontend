"use client";

import { useEffect } from "react";

/** Same order as the original HTML template footers (home variant). */
const SCRIPT_CHAIN = [
  "/assets/js/jquery-3.7.1.min.js",
  "/assets/js/jquery.waypoints.js",
  "/assets/js/jquery.counterup.min.js",
  "/assets/plugins/theia-sticky-sidebar/ResizeSensor.js",
  "/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.js",
  "/assets/js/bootstrap.bundle.min.js",
  "/assets/plugins/select2/js/select2.min.js",
  "/assets/plugins/slick/slick.js",
  "/assets/plugins/swiper/js/swiper-bundle.min.js",
  "/assets/js/counter.js",
  "/assets/plugins/aos/aos.js",
  "/assets/plugins/fancybox/jquery.fancybox.min.js",
  "/assets/js/script.js",
];

function loadScriptOnce(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-dream-lms-src="${src}"]`,
    );
    if (existing?.dataset.loaded === "1") {
      resolve();
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.dataset.dreamLmsSrc = src;
    s.onload = () => {
      s.dataset.loaded = "1";
      resolve();
    };
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

export function TemplateScripts() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const src of SCRIPT_CHAIN) {
        if (cancelled) break;
        try {
          await loadScriptOnce(src);
        } catch {
          break;
        }
      }
      if (!cancelled && typeof window !== "undefined") {
        window.dispatchEvent(new Event("dream-lms:scripts-ready"));
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
