import type { Metadata } from "next";
import { ResetPasswordPage } from "@/components/dream-lms/pages/ResetPasswordPage";

export const metadata: Metadata = {
  title: "Reset password | MetaWaves",
  description: "Create a new password for your MetaWaves account.",
};

export default function Page() {
  return <ResetPasswordPage />;
}
