import type { Metadata } from "next";
import { Error404Body } from "@/components/dream-lms/pages/specialMarketingBodies";

export const metadata: Metadata = {
  title: "404 Error | Dreams LMS",
};

export default function Page() {
  return <Error404Body />;
}
