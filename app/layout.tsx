import type { Metadata } from "next";
import Script from "next/script";
import { TemplateScripts } from "@/components/TemplateScripts";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Dreams LMS", template: "%s | Dreams LMS" },
  description:
    "Learning management system template — migrated from Dream LMS HTML.",
  icons: {
    icon: "/assets/img/favicon.png",
    apple: "/assets/img/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link
          rel="stylesheet"
          href="/assets/plugins/swiper/css/swiper-bundle.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/plugins/fontawesome/css/fontawesome.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/plugins/fontawesome/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="/assets/plugins/select2/css/select2.min.css"
        />
        <link rel="stylesheet" href="/assets/plugins/slick/slick.css" />
        <link
          rel="stylesheet"
          href="/assets/plugins/slick/slick-theme.css"
        />
        <link rel="stylesheet" href="/assets/plugins/feather/feather.css" />
        <link rel="stylesheet" href="/assets/plugins/aos/aos.css" />
        <link
          rel="stylesheet"
          href="/assets/plugins/tabler-icons/tabler-icons.css"
        />
        <link rel="stylesheet" href="/assets/css/iconsax.css" />
        <link
          rel="stylesheet"
          href="/assets/plugins/fancybox/jquery.fancybox.min.css"
        />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body suppressHydrationWarning>
        <Script src="/assets/js/theme-script.js" strategy="beforeInteractive" />
        {children}
        <TemplateScripts />
      </body>
    </html>
  );
}
