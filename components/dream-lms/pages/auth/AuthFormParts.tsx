"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { BrandLogo } from "@/components/dream-lms/shared/BrandLogo";
import { assetPath } from "@/lib/assetPath";
import { ArrowIcon, EyeIcon } from "./auth-icons";

export function AuthPageHeader({ delay = "0ms" }: { delay?: string }) {
  return (
    <header
      className="mw-login__header mw-login__reveal mw-login__reveal--right"
      style={{ animationDelay: delay }}
    >
      <BrandLogo href="/" wrapperClassName="mw-login__logo" height={40} />
      <Link href="/" className="mw-login__back">
        <span>Back to home</span>
        <ArrowIcon />
      </Link>
    </header>
  );
}

export function AuthIntro({
  label,
  title,
  subtitle,
  delay = "80ms",
}: {
  label: string;
  title: string;
  subtitle: ReactNode;
  delay?: string;
}) {
  return (
    <div
      className="mw-login__intro mw-login__reveal mw-login__reveal--right"
      style={{ animationDelay: delay }}
    >
      <p className="mw-login__intro-label">{label}</p>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

export function AuthField({
  id,
  label,
  type = "text",
  name,
  placeholder,
  autoComplete,
  required = true,
}: {
  id: string;
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <div className="mw-login__field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}

export function AuthPasswordField({
  id,
  label,
  name,
  placeholder,
  autoComplete,
  labelExtra,
  hint,
}: {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  autoComplete: string;
  labelExtra?: ReactNode;
  hint?: string;
}) {
  const [show, setShow] = useState(false);

  return (
    <div className="mw-login__field">
      {labelExtra ? (
        <div className="mw-login__field-label-row">
          <label htmlFor={id}>{label}</label>
          {labelExtra}
        </div>
      ) : (
        <label htmlFor={id}>{label}</label>
      )}
      <div className="mw-login__password-wrap">
        <input
          id={id}
          name={name}
          type={show ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder={placeholder}
          required
        />
        <button
          type="button"
          className="mw-login__password-toggle"
          onClick={() => setShow((v) => !v)}
          aria-label={show ? "Hide password" : "Show password"}
        >
          <EyeIcon open={show} />
        </button>
      </div>
      {hint ? <p className="mw-login__field-hint">{hint}</p> : null}
    </div>
  );
}

export function AuthSubmit({ label }: { label: string }) {
  return (
    <button type="submit" className="mw-login__submit">
      <span>{label}</span>
      <ArrowIcon />
    </button>
  );
}

export function AuthSocial({ delay = "240ms" }: { delay?: string }) {
  return (
    <>
      <div
        className="mw-login__divider mw-login__reveal mw-login__reveal--right"
        style={{ animationDelay: "200ms" }}
        role="separator"
      >
        <span>or continue with</span>
      </div>
      <div
        className="mw-login__social mw-login__reveal mw-login__reveal--right"
        style={{ animationDelay: delay }}
      >
        <a href="#" className="mw-login__social-btn">
          <img src={assetPath("img/icons/google.svg")} alt="" width={20} height={20} />
          Continue with Google
        </a>
        <a href="#" className="mw-login__social-btn">
          <img src={assetPath("img/icons/facebook.svg")} alt="" width={20} height={20} />
          Continue with Facebook
        </a>
      </div>
    </>
  );
}

export function AuthLegal({ delay = "300ms" }: { delay?: string }) {
  return (
    <p
      className="mw-login__legal mw-login__reveal mw-login__reveal--right"
      style={{ animationDelay: delay }}
    >
      By continuing, you agree to our{" "}
      <Link href="/terms-and-conditions">Terms</Link> and{" "}
      <Link href="/privacy-policy">Privacy Policy</Link>.
    </p>
  );
}

export function AuthFooterText({
  children,
  delay = "340ms",
}: {
  children: ReactNode;
  delay?: string;
}) {
  return (
    <p
      className="mw-login__org mw-login__reveal mw-login__reveal--right"
      style={{ animationDelay: delay }}
    >
      {children}
    </p>
  );
}
