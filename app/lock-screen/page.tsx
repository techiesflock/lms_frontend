import type { Metadata } from "next";
import { LockScreenBody } from "@/components/dream-lms/pages/specialMarketingBodies";

export const metadata: Metadata = {
  title: "Lock Screen | Dreams LMS",
};

export default function Page() {
  return <LockScreenBody />;
}
