import type { Metadata } from "next";
import { Error500BodyModern } from "@/components/dream-lms/pages/specialPagesModern";

export const metadata: Metadata = {
  title: "500 Error | MetaWaves",
  description: "Something went wrong on our servers.",
};

export default function Page() {
  return <Error500BodyModern />;
}
