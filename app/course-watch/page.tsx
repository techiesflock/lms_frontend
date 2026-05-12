import type { Metadata } from "next";
import { MarketingSubPage } from "@/components/dream-lms/marketing/MarketingSubPage";
import { CourseWatchPageBody } from "@/components/dream-lms/courses/watch/CourseWatchPageBody";

export const metadata: Metadata = {
  title: "Course Watch",
  description: "Watch course lessons and materials.",
};

export default function CourseWatchPage() {
  return (
    <MarketingSubPage title="Course watch" embedMain>
      <CourseWatchPageBody />
    </MarketingSubPage>
  );
}
