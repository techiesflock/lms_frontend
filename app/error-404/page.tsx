import type { Metadata } from "next";
import { Error404BodyModern } from "@/components/dream-lms/pages/specialPagesModern";

export const metadata: Metadata = {
  title: "404 Error | MetaWaves",
  description: "The page you are looking for could not be found.",
};

export default function Page() {
  return <Error404BodyModern />;
}
