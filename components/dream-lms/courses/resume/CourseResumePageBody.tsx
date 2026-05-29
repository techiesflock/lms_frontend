import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { CourseCurriculumAccordion } from "@/components/dream-lms/courses/detail/CourseCurriculumAccordion";
import { FLOW_COURSE } from "@/components/dream-lms/courses/shared/courseFlowData";
import { UdCoursePageShell } from "@/components/dream-lms/courses/shared/UdCoursePageShell";

export function CourseResumePageBody() {
  return (
    <UdCoursePageShell
      title="Course Resume"
      subtitle="Pick up where you left off and track your progress through each module."
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "My Courses", href: "/student-courses" },
        { label: "Course Resume" },
      ]}
    >
      <div className="container">
        <article className="ud-flow-card ud-flow-course-banner">
          <img src={assetPath(FLOW_COURSE.image)} alt="" className="ud-flow-course-banner__img" />
          <div className="ud-flow-course-banner__body">
            <span className="ud-flow-tag">{FLOW_COURSE.category}</span>
            <h2 className="ud-flow-course-banner__title">{FLOW_COURSE.title}</h2>
            <p className="ud-flow-course-banner__desc">{FLOW_COURSE.subtitle}</p>
            <ul className="ud-flow-meta-list">
              <li>{FLOW_COURSE.lessons}+ lessons</li>
              <li>{FLOW_COURSE.duration}</li>
              <li>{FLOW_COURSE.students} students enrolled</li>
            </ul>
            <div className="ud-flow-progress-block">
              <div className="ud-flow-progress-head">
                <span>Overall progress</span>
                <strong>{FLOW_COURSE.progress}%</strong>
              </div>
              <div className="ud-flow-progress-track" role="progressbar" aria-valuenow={FLOW_COURSE.progress}>
                <span style={{ width: `${FLOW_COURSE.progress}%` }} />
              </div>
            </div>
            <Link href="/course-watch" className="btn ud-btn-primary ud-flow-btn-inline">
              <i className="isax isax-play-circle5 me-2" />
              Resume course
            </Link>
          </div>
        </article>

        <section className="ud-flow-section">
          <div className="ud-section-head">
            <h2 className="ud-section-title">Course curriculum</h2>
            <Link href="/course-watch" className="ud-text-btn">
              Open player
            </Link>
          </div>
          <div className="ud-curriculum ud-flow-curriculum">
            <CourseCurriculumAccordion idPrefix="resume" variant="udemy" />
          </div>
        </section>
      </div>
    </UdCoursePageShell>
  );
}
