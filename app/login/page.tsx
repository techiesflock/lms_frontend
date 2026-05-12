import type { Metadata } from "next";
import { AuthPageShell } from "@/components/dream-lms/pages/AuthPageShell";
import { LoginFormBody } from "@/components/dream-lms/pages/authBodies";

export const metadata: Metadata = {
  title: "Login | Dreams LMS",
};

export default function Page() {
  return (
    <AuthPageShell>
      <LoginFormBody />
    </AuthPageShell>
  );
}
