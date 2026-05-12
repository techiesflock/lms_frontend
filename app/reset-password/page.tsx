import type { Metadata } from "next";
import { AuthPageShell } from "@/components/dream-lms/pages/AuthPageShell";
import { ResetPasswordFormBody } from "@/components/dream-lms/pages/authBodies";

export const metadata: Metadata = {
  title: "Reset Password | Dreams LMS",
};

export default function Page() {
  return (
    <AuthPageShell>
      <ResetPasswordFormBody />
    </AuthPageShell>
  );
}
