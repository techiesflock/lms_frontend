"use client";

import Link from "next/link";
import { useId } from "react";
import { AuthLayout } from "./auth/AuthLayout";
import {
  AuthField,
  AuthFooterText,
  AuthIntro,
  AuthPageHeader,
  AuthSubmit,
} from "./auth/AuthFormParts";
import { AUTH_HERO } from "./auth/hero-config";

export function ForgotPasswordPage() {
  const emailId = useId();

  return (
    <AuthLayout hero={AUTH_HERO.forgotPassword}>
      <AuthPageHeader />
      <AuthIntro
        label="Password recovery"
        title="Forgot password?"
        subtitle="Enter the email linked to your account and we will send reset instructions."
      />

      <form
        className="mw-login__form mw-login__reveal mw-login__reveal--right"
        style={{ animationDelay: "140ms" }}
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <AuthField
          id={emailId}
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
        />
        <AuthSubmit label="Send reset link" />
      </form>

      <AuthFooterText delay="200ms">
        Remember your password? <Link href="/login">Back to log in</Link>
      </AuthFooterText>
    </AuthLayout>
  );
}
