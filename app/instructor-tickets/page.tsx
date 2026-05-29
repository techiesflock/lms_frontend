import type { Metadata } from "next";
import { MarketingChrome } from "@/components/dream-lms/shell/MarketingChrome";
import { InstructorDashboardModernLayout } from "@/components/dream-lms/dashboard/instructor/InstructorDashboardModernLayout";
import { InstructorTicketsBodyModern } from "@/components/dream-lms/dashboard/instructor/instructorBodiesModern";
import { INSTRUCTOR_PAGES } from "@/components/dream-lms/dashboard/instructor/instructorPagesConfig";

const PAGE = INSTRUCTOR_PAGES.tickets;

export const metadata: Metadata = {
  title: `${PAGE.title} | MetaWaves`,
  description: PAGE.description,
};

export default function Page() {
  return (
    <MarketingChrome innerPage>
      <InstructorDashboardModernLayout
        activeHref={PAGE.href}
        pageTitle={PAGE.title}
        pageMeta={PAGE.meta}
        pageDescription={PAGE.description}
      >
        <InstructorTicketsBodyModern />
      </InstructorDashboardModernLayout>
    </MarketingChrome>
  );
}
