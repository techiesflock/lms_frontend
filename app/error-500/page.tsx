import type { Metadata } from "next";
import { Error500Body } from "@/components/dream-lms/pages/specialMarketingBodies";

export const metadata: Metadata = {
  title: "500 Error | Dreams LMS",
};

export default function Page() {
  return <Error500Body />;
}
