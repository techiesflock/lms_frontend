import type { Metadata } from "next";
import { AuthPageShell } from "@/components/dream-lms/pages/AuthPageShell";
import { ForgotPasswordFormBody } from "@/components/dream-lms/pages/authBodies";

export const metadata: Metadata = {
  title: "Forgot Password | MetaWaves",
};

export default function Page() {
  return (
    <AuthPageShell>
      <ForgotPasswordFormBody />
    </AuthPageShell>
  );
}
