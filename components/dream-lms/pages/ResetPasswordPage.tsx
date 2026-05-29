"use client";

import Link from "next/link";
import { useId } from "react";
import { AuthLayout } from "./auth/AuthLayout";
import {
  AuthFooterText,
  AuthIntro,
  AuthPageHeader,
  AuthPasswordField,
  AuthSubmit,
} from "./auth/AuthFormParts";
import { AUTH_HERO } from "./auth/hero-config";

export function ResetPasswordPage() {
  const passwordId = useId();
  const confirmId = useId();

  return (
    <AuthLayout hero={AUTH_HERO.resetPassword}>
      <AuthPageHeader />
      <AuthIntro
        label="Security"
        title="Reset password"
        subtitle="Your new password must be different from your previous password."
      />

      <form
        className="mw-login__form mw-login__reveal mw-login__reveal--right"
        style={{ animationDelay: "140ms" }}
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <AuthPasswordField
          id={passwordId}
          label="New password"
          name="password"
          placeholder="Enter new password"
          autoComplete="new-password"
          hint="Use 8+ characters with letters, numbers, and symbols."
        />
        <AuthPasswordField
          id={confirmId}
          label="Confirm password"
          name="confirmPassword"
          placeholder="Confirm new password"
          autoComplete="new-password"
        />
        <AuthSubmit label="Reset password" />
      </form>

      <AuthFooterText delay="200ms">
        <Link href="/login">Back to log in</Link>
      </AuthFooterText>
    </AuthLayout>
  );
}
