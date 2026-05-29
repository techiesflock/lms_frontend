import type { Metadata } from "next";
import { LoginPage } from "@/components/dream-lms/pages/LoginPage";

export const metadata: Metadata = {
  title: "Log in | MetaWaves",
  description: "Sign in to your MetaWaves account and continue learning.",
};

export default function Page() {
  return <LoginPage />;
}
