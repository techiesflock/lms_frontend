import type { Metadata } from "next";
import { OtpPage } from "@/components/dream-lms/pages/OtpPage";

export const metadata: Metadata = {
  title: "Verify email | MetaWaves",
  description: "Enter the verification code sent to your email.",
};

export default function Page() {
  return <OtpPage />;
}
