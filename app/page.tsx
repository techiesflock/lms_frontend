import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { HomeBanner } from "@/components/dream-lms/home/HomeBanner";
import { HomeCarouselInit } from "@/components/dream-lms/home/HomeCarouselInit";
import { HomeMain } from "@/components/dream-lms/home/HomeMain";

export const metadata: Metadata = {
  title: "Dreams LMS | Advanced Learning Management System Template",
  description:
    "Find the best courses from expert mentors — Dreams LMS marketing experience built with React components.",
};

export default function HomePage() {
  return (
    <MarketingChrome>
      <HomeCarouselInit />
      <HomeBanner />
      <HomeMain />
    </MarketingChrome>
  );
}
