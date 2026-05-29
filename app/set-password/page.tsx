import type { Metadata } from "next";
import { SetPasswordPage } from "@/components/dream-lms/pages/SetPasswordPage";

export const metadata: Metadata = {
  title: "Set password | MetaWaves",
  description: "Set your MetaWaves account password.",
};

export default function Page() {
  return <SetPasswordPage />;
}
