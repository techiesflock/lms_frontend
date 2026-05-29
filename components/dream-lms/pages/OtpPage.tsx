"use client";

import Link from "next/link";
import { useId, useRef } from "react";
import { AuthLayout } from "./auth/AuthLayout";
import {
  AuthFooterText,
  AuthIntro,
  AuthPageHeader,
  AuthSubmit,
} from "./auth/AuthFormParts";
import { AUTH_HERO } from "./auth/hero-config";

export function OtpPage() {
  const otpBaseId = useId();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, key: string) => {
    if (key === "Backspace" && !inputRefs.current[index]?.value && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <AuthLayout hero={AUTH_HERO.otp}>
      <AuthPageHeader />
      <AuthIntro
        label="Verification"
        title="Enter verification code"
        subtitle={
          <>
            We sent a 4-digit code to <strong>******doe@example.com</strong>
          </>
        }
      />

      <form
        className="mw-login__form mw-login__reveal mw-login__reveal--right"
        style={{ animationDelay: "140ms" }}
        onSubmit={(e) => e.preventDefault()}
        noValidate
      >
        <div className="mw-login__otp" role="group" aria-label="One-time passcode">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              ref={(el) => {
                inputRefs.current[i] = el;
              }}
              id={`${otpBaseId}-${i}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              className="mw-login__otp-input"
              aria-label={`Digit ${i + 1}`}
              onChange={(e) => {
                const digit = e.target.value.replace(/\D/g, "").slice(-1);
                e.target.value = digit;
                handleOtpChange(i, digit);
              }}
              onKeyDown={(e) => handleOtpKeyDown(i, e.key)}
            />
          ))}
        </div>

        <div className="mw-login__timer" aria-live="polite">
          <span className="mw-login__timer-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            09:59
          </span>
        </div>

        <AuthSubmit label="Verify and continue" />
      </form>

      <AuthFooterText delay="200ms">
        Didn&apos;t get the code?{" "}
        <a href="#" onClick={(e) => e.preventDefault()}>
          Resend code
        </a>
      </AuthFooterText>
    </AuthLayout>
  );
}
