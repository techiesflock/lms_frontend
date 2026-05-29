import type { Metadata } from "next";
import { ComingSoonBodyModern } from "@/components/dream-lms/pages/specialPagesModern";

export const metadata: Metadata = {
  title: "Coming Soon | MetaWaves",
  description: "MetaWaves is launching soon. Subscribe for updates.",
};

export default function Page() {
  return <ComingSoonBodyModern />;
}
