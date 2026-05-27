import type { Metadata } from "next";
import { AuthPageShell } from "@/components/dream-lms/pages/AuthPageShell";
import { OtpFormBody } from "@/components/dream-lms/pages/authBodies";

export const metadata: Metadata = {
  title: "OTP | MetaWaves",
};

export default function Page() {
  return (
    <AuthPageShell>
      <OtpFormBody />
    </AuthPageShell>
  );
}
