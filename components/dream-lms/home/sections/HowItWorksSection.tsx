import { assetPath } from "@/lib/assetPath";

const HOW_IT_WORKS_STEPS = [
  {
    n: "01",
    t: "Sign-Up or Register",
    p: "Once you're on the website's homepage, look for the Sign-Up, Register, or Create Account button.",
  },
  {
    n: "02",
    t: "Complete Your Profile",
    p: "After verifying your email, you may be asked to complete additional profile information.",
  },
  {
    n: "03",
    t: "Choose Courses or Programs",
    p: "Depending on the website, after registration, you might be able to browse and choose courses or programs to enroll in.",
  },
  {
    n: "04",
    t: "Access Your Account",
    p: "Should have access to the website’s features, such as enrolling in courses, materials, or tracking progress.",
    last: true,
  },
] as const;

export function HowItWorksSection() {
  return (
    <div className="how-it-works-sec-two">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="me-5" data-aos="fade-up">
              <img
                src={assetPath("img/feature/feature-27.jpg")}
                className="img-fluid rounded-5"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="how-it-works-content aos" data-aos="fade-up">
              <div className="section-header">
                <span className="fw-medium text-secondary text-decoration-underline mb-2 d-inline-block">
                  How it Works
                </span>
                <h2 className="mb-1">Start your Learning Journey Today!</h2>
                <p>
                  Unlock Your Potential and Achieve Your Dreams with Our Comprehensive Learning
                  Resources!
                </p>
              </div>
              {HOW_IT_WORKS_STEPS.map((step) => (
                <div
                  key={step.n}
                  className={`d-flex align-items-center works-items${"last" in step && step.last ? " mb-0 pb-0 border-0" : ""}`}
                >
                  <span className="count">{step.n}</span>
                  <div>
                    <h3 className="custom-subtitle mb-1">{step.t}</h3>
                    <p>{step.p}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
