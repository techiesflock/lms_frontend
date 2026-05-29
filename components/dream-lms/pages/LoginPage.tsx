"use client";

import Link from "next/link";
import { useId, useState } from "react";
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

export function LoginPage() {
  const emailId = useId();
  const passwordId = useId();
  const rememberId = useId();

  return (
    <AuthLayout hero={AUTH_HERO.login}>
      <AuthPageHeader />
      <AuthIntro
        label="Account"
        title="Log in"
        subtitle={
          <>
            New to {BRAND_NAME}? <Link href="/register">Create a free account</Link>
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
          placeholder="Enter your password"
          autoComplete="current-password"
          labelExtra={
            <Link href="/forgot-password" className="mw-login__forgot">
              Forgot password?
            </Link>
          }
        />
        <div className="mw-login__remember">
          <input id={rememberId} name="remember" type="checkbox" />
          <label htmlFor={rememberId}>Keep me signed in</label>
        </div>
        <AuthSubmit label="Log in" />
      </form>

      <AuthSocial />
      <AuthLegal />
      <AuthFooterText>
        Training your team? <Link href="/contact-us">MetaWaves for Business</Link>
      </AuthFooterText>
    </AuthLayout>
  );
}
