import type { Metadata } from "next";
import { RegisterPage } from "@/components/dream-lms/pages/RegisterPage";

export const metadata: Metadata = {
  title: "Sign up | MetaWaves",
  description: "Create your free MetaWaves account and start learning today.",
};

export default function Page() {
  return <RegisterPage />;
}
