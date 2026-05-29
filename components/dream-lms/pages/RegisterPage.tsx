"use client";

import Link from "next/link";
import { useId } from "react";
import { BRAND_NAME } from "@/lib/brand";
import { AuthLayout } from "./auth/AuthLayout";
import {
  AuthField,
  AuthFooterText,
  AuthIntro,
  AuthLegal,
  AuthPageHeader,
  AuthPasswordField,
  AuthSocial,
  AuthSubmit,
} from "./auth/AuthFormParts";
import { AUTH_HERO } from "./auth/hero-config";

export function RegisterPage() {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const confirmId = useId();
  const termsId = useId();

  return (
    <AuthLayout hero={AUTH_HERO.register}>
      <AuthPageHeader />
      <AuthIntro
        label="Create account"
        title="Sign up"
        subtitle={
          <>
            Already on {BRAND_NAME}? <Link href="/login">Log in</Link>
          </>
        }
      />

      <form
        className="mw-login__form mw-login__reveal mw-login__reveal--right"
        style={{ animationDelay: "140ms" }}
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <AuthField
          id={nameId}
          label="Full name"
          name="name"
          type="text"
          placeholder="Your full name"
          autoComplete="name"
        />
        <AuthField
          id={emailId}
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
        />
        <AuthPasswordField
          id={passwordId}
          label="Password"
          name="password"
          placeholder="Create a password"
          autoComplete="new-password"
          hint="Use 8+ characters with letters, numbers, and symbols."
        />
        <AuthPasswordField
          id={confirmId}
          label="Confirm password"
          name="confirmPassword"
          placeholder="Confirm your password"
          autoComplete="new-password"
        />

        <div className="mw-login__remember mw-login__remember--terms">
          <input id={termsId} name="terms" type="checkbox" required />
          <label htmlFor={termsId}>
            I agree to the <Link href="/terms-and-conditions">Terms</Link> and{" "}
            <Link href="/privacy-policy">Privacy Policy</Link>
          </label>
        </div>

        <AuthSubmit label="Create account" />
      </form>

      <AuthSocial />
      <AuthLegal />
      <AuthFooterText>
        Training your team? <Link href="/contact-us">MetaWaves for Business</Link>
      </AuthFooterText>
    </AuthLayout>
  );
}
