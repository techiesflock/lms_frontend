import type { Metadata } from "next";
import { AuthPageShell } from "@/components/dream-lms/pages/AuthPageShell";
import { RegisterFormBody } from "@/components/dream-lms/pages/authBodies";

export const metadata: Metadata = {
  title: "Register | Dreams LMS",
};

export default function Page() {
  return (
    <AuthPageShell>
      <RegisterFormBody />
    </AuthPageShell>
  );
}
