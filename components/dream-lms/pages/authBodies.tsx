import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { AuthLoginHeader } from "./AuthPageShell";

export function LoginFormBody() {
  return (
    <>
      <AuthLoginHeader />
      <h1 className="fs-32 fw-bold topic">Sign into Your Account</h1>
      <form className="mb-3 pb-3">
        <div className="mb-3 position-relative">
          <label className="form-label">
            Email<span className="text-danger ms-1">*</span>
          </label>
          <div className="position-relative">
            <input type="email" className="form-control form-control-lg" />
            <span>
              <i className="isax isax-sms input-icon text-gray-7 fs-14" />
            </span>
          </div>
        </div>
        <div className="mb-3 position-relative">
          <label className="form-label">
            Password <span className="text-danger ms-1">*</span>
          </label>
          <div className="position-relative" id="passwordInputLogin">
            <input type="password" className="pass-inputs form-control form-control-lg" />
            <span className="isax toggle-passwords isax-eye-slash fs-14" />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="remember-me d-flex align-items-center">
            <input className="form-check-input" type="checkbox" value="" id="rememberLogin" />
            <label className="form-check-label ms-2" htmlFor="rememberLogin">
              Remember Me
            </label>
          </div>
          <Link href="/forgot-password" className="link-2">
            Forgot Password ?
          </Link>
        </div>
        <div className="d-grid">
          <button className="btn btn-secondary btn-lg" type="submit">
            Login <i className="isax isax-arrow-right-3 ms-1" />
          </button>
        </div>
      </form>
      <div className="d-flex align-items-center justify-content-center or fs-14 mb-3">Or</div>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <a href="#" className="btn btn-light me-2">
          <img src={assetPath("img/icons/google.svg")} alt="" className="me-2" />
          Google
        </a>
        <a href="#" className="btn btn-light">
          <img src={assetPath("img/icons/facebook.svg")} alt="" className="me-2" />
          Facebook
        </a>
      </div>
      <div className="fs-14 fw-normal d-flex align-items-center justify-content-center">
        Don&apos;t you have an account?
        <Link href="/register" className="link-2 ms-1">
          Sign up
        </Link>
      </div>
    </>
  );
}

export function RegisterFormBody() {
  return (
    <>
      <AuthLoginHeader />
      <h1 className="fs-32 fw-bold topic">Sign up</h1>
      <form className="mb-3 pb-3">
        <div className="mb-3 position-relative">
          <label className="form-label">
            Full Name<span className="text-danger ms-1">*</span>
          </label>
          <div className="position-relative">
            <input type="text" className="form-control form-control-lg" />
            <span>
              <i className="isax isax-user input-icon text-gray-7 fs-14" />
            </span>
          </div>
        </div>
        <div className="mb-3 position-relative">
          <label className="form-label">
            Email<span className="text-danger ms-1">*</span>
          </label>
          <div className="position-relative">
            <input type="email" className="form-control form-control-lg" />
            <span>
              <i className="isax isax-sms input-icon text-gray-7 fs-14" />
            </span>
          </div>
        </div>
        <div className="mb-3 position-relative">
          <label className="form-label">
            New Password <span className="text-danger"> *</span>
          </label>
          <div className="position-relative" id="passwordInputRegister">
            <input type="password" className="pass-inputs form-control form-control-lg" />
            <span className="isax toggle-passwords isax-eye-slash text-gray-7 fs-14" />
          </div>
          <div className="password-strength" id="passwordStrengthRegister">
            <span id="poorReg" />
            <span id="weakReg" />
            <span id="strongReg" />
            <span id="heavyReg" />
          </div>
          <div className="mt-2" id="passwordInfoRegister" />
        </div>
        <div className="mb-3 position-relative">
          <label className="form-label">
            Confirm Password <span className="text-danger"> *</span>
          </label>
          <div className="position-relative">
            <input type="password" className="pass-inputa form-control form-control-lg" />
            <span className="isax toggle-passworda isax-eye-slash text-gray-7 fs-14" />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="remember-me d-flex align-items-center">
            <input className="form-check-input" type="checkbox" value="" id="agreeTermsRegister" />
            <label className="form-check-label mb-0 d-inline-flex remember-me fs-14" htmlFor="agreeTermsRegister">
              I agree with{" "}
              <Link href="/terms-and-conditions" className="link-2 mx-2">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy-policy" className="link-2 mx-2">
                Privacy Policy
              </Link>
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-secondary btn-lg" type="submit">
            Sign Up <i className="isax isax-arrow-right-3 ms-1" />
          </button>
        </div>
      </form>
      <div className="d-flex align-items-center justify-content-center or fs-14 mb-3">Or</div>
      <div className="d-flex align-items-center justify-content-center mb-3">
        <a href="#" className="btn btn-light me-2">
          <img src={assetPath("img/icons/google.svg")} alt="" className="me-2" />
          Google
        </a>
        <a href="#" className="btn btn-light">
          <img src={assetPath("img/icons/facebook.svg")} alt="" className="me-2" />
          Facebook
        </a>
      </div>
      <div className="fs-14 fw-normal d-flex align-items-center justify-content-center">
        Already you have an account?
        <Link href="/login" className="link-2 ms-1">
          Login
        </Link>
      </div>
    </>
  );
}

export function ForgotPasswordFormBody() {
  return (
    <>
      <AuthLoginHeader />
      <div className="topic">
        <h1 className="fs-32 fw-bold mb-3">Forgot Password</h1>
        <p className="fs-14 fw-normal mb-0">Enter your email to reset your password.</p>
      </div>
      <form className="mb-3 pb-3">
        <div className="mb-3 position-relative">
          <label className="form-label">
            Email<span className="text-danger ms-1">*</span>
          </label>
          <div className="position-relative">
            <input type="email" className="form-control form-control-lg" />
            <span>
              <i className="isax isax-sms input-icon text-gray-7 fs-14" />
            </span>
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-secondary btn-lg" type="submit">
            Submit<i className="isax isax-arrow-right-3 ms-1" />
          </button>
        </div>
      </form>
      <p className="fs-14 fw-normal d-flex align-items-center justify-content-center">
        Remember Password?
        <Link href="/login" className="link-2 ms-1">
          Sign In
        </Link>
      </p>
    </>
  );
}

export function ResetPasswordFormBody() {
  return (
    <>
      <AuthLoginHeader />
      <div className="topic">
        <h1 className="fs-32 fw-bold">Reset Password</h1>
        <p className="fw-normal fs-14 mb-0">Your new password must be different from previous password</p>
      </div>
      <form className="mb-3 pb-3">
        <div className="mb-3 position-relative">
          <label className="form-label">
            New Password <span className="text-danger"> *</span>
          </label>
          <div className="position-relative" id="passwordInputReset">
            <input type="password" className="pass-inputs form-control form-control-lg" />
            <span className="isax toggle-passwords isax-eye-slash text-gray-7 fs-14" />
          </div>
          <div className="password-strength" id="passwordStrengthReset">
            <span id="poorReset" />
            <span id="weakReset" />
            <span id="strongReset" />
            <span id="heavyReset" />
          </div>
          <div className="mt-2" id="passwordInfoReset" />
        </div>
        <div className="mb-3 position-relative">
          <label className="form-label">
            Confirm Password <span className="text-danger"> *</span>
          </label>
          <div className="position-relative">
            <input type="password" className="pass-inputa form-control" />
            <span className="isax toggle-passworda isax-eye-slash text-gray-7 fs-14" />
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-secondary btn-lg" type="submit">
            Reset Password <i className="isax isax-arrow-right-3 ms-1" />
          </button>
        </div>
      </form>
    </>
  );
}

export function SetPasswordFormBody() {
  return (
    <>
      <AuthLoginHeader />
      <div className="topic">
        <h1 className="fs-32 fw-bold">Set Password</h1>
        <p className="fw-normal fs-14 mb-0">Your new password must be different from previous password</p>
      </div>
      <form className="mb-3 pb-3">
        <div className="mb-3 position-relative">
          <label className="form-label">
            New Password <span className="text-danger"> *</span>
          </label>
          <div className="position-relative" id="passwordInputSet">
            <input type="password" className="pass-inputs form-control form-control-lg" />
            <span className="isax toggle-passwords isax-eye-slash text-gray-7 fs-14" />
          </div>
          <div className="password-strength" id="passwordStrengthSet">
            <span id="poorSet" />
            <span id="weakSet" />
            <span id="strongSet" />
            <span id="heavySet" />
          </div>
          <div className="mt-2" id="passwordInfoSet" />
        </div>
        <div className="mb-3 position-relative">
          <label className="form-label">
            Confirm Password <span className="text-danger"> *</span>
          </label>
          <div className="position-relative">
            <input type="password" className="pass-inputa form-control" />
            <span className="isax toggle-passworda isax-eye-slash text-gray-7 fs-14" />
          </div>
        </div>
        <div className="d-grid">
          <button className="btn btn-secondary btn-lg" type="submit">
            Reset Password <i className="isax isax-arrow-right-3 ms-1" />
          </button>
        </div>
      </form>
    </>
  );
}

export function OtpFormBody() {
  return (
    <>
      <AuthLoginHeader />
      <div className="topic">
        <h1 className="fs-32 fw-bold mb-3">Email OTP</h1>
        <p className="fs-14 fw-normal mb-0">OTP sent to your Email Address ending ******doe@example.com</p>
      </div>
      <form className="mb-3 pb-3">
        <div className="d-flex align-items-center mb-3 gap-2 justify-content-center">
          {[0, 1, 2, 3].map((i) => (
            <input key={i} type="text" className="form-control otp text-center" maxLength={1} aria-label={`Digit ${i + 1}`} />
          ))}
        </div>
        <div className="timer-cover d-flex align-items-center justify-content-center">
          <div className="badge badge-soft-danger rounded-pill d-flex align-items-center">
            <i className="isax isax-clock me-1" />
            <span>09:59</span> <span className="ms-1">s</span>
          </div>
        </div>
        <div className="d-grid mt-3">
          <button className="btn btn-secondary btn-lg w-100" type="submit">
            Verify & Proceed<i className="isax isax-arrow-right-3 ms-1" />
          </button>
        </div>
      </form>
      <div className="fs-14 fw-normal d-flex align-items-center justify-content-center">
        Didn’t get the OTP?
        <a href="#" className="link-2 ms-1">
          Resend OTP
        </a>
      </div>
    </>
  );
}
