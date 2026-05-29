import type { Metadata } from "next";
import { ForgotPasswordPage } from "@/components/dream-lms/pages/ForgotPasswordPage";

export const metadata: Metadata = {
  title: "Forgot password | MetaWaves",
  description: "Reset your MetaWaves account password.",
};

export default function Page() {
  return <ForgotPasswordPage />;
}
