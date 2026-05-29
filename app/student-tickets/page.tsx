import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { StudentDashboardModernLayout } from "@/components/dream-lms/dashboard/student/StudentDashboardModernLayout";
import { StudentTicketsBodyModern } from "@/components/dream-lms/dashboard/student/studentBodiesModern";
import { STUDENT_PAGES } from "@/components/dream-lms/dashboard/student/studentPagesConfig";

const PAGE = STUDENT_PAGES.tickets;

export const metadata: Metadata = {
  title: `${PAGE.title} | MetaWaves`,
  description: PAGE.description,
};

export default function Page() {
  return (
    <MarketingChrome innerPage>
      <StudentDashboardModernLayout
        activeHref={PAGE.href}
        pageTitle={PAGE.title}
        pageMeta={PAGE.meta}
        pageDescription={PAGE.description}
      >
        <StudentTicketsBodyModern />
      </StudentDashboardModernLayout>
    </MarketingChrome>
  );
}
