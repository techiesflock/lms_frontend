import type { Metadata } from "next";
import { AuthPageShell } from "@/components/dream-lms/pages/AuthPageShell";
import { SetPasswordFormBody } from "@/components/dream-lms/pages/authBodies";

export const metadata: Metadata = {
  title: "Set Password | Dreams LMS",
};

export default function Page() {
  return (
    <AuthPageShell>
      <SetPasswordFormBody />
    </AuthPageShell>
  );
}
