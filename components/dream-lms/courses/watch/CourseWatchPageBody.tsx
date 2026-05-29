"use client";

import Link from "next/link";
import { useState } from "react";
import { assetPath } from "@/lib/assetPath";
import { FLOW_COURSE } from "@/components/dream-lms/courses/shared/courseFlowData";

const SECTIONS = [
  {
    id: "watch-sec-1",
    title: "HTML Introduction",
    lessons: [
      { name: "Introduction", state: "completed", duration: "2m 10s" },
      { name: "What is HTML", state: "current", duration: "8m 20s" },
      { name: "What is a Web page?", state: "locked", duration: "5m 00s" },
    ],
  },
  {
    id: "watch-sec-2",
    title: "Your first webpage",
    lessons: [
      { name: "Create a document", state: "locked", duration: "6m 15s" },
      { name: "Add semantic tags", state: "locked", duration: "9m 40s" },
    ],
  },
  {
    id: "watch-sec-3",
    title: "Project & certificate",
    lessons: [
      { name: "Portfolio assignment", state: "assignment", duration: "—" },
      { name: "Final quiz", state: "quiz", duration: "15m" },
    ],
  },
] as const;

const TABS = ["Overview", "Notes", "Resources", "Q&A"] as const;

export function CourseWatchPageBody() {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Overview");

  return (
    <div className="ud-flow-page ud-watch-page">
      <div className="ud-watch-layout">
        <aside className="ud-watch-sidebar" aria-label="Course curriculum">
          <Link href="/course-resume" className="ud-watch-back">
            ← Back to course
          </Link>
          <h2 className="ud-watch-sidebar-title">{FLOW_COURSE.title}</h2>
          <div className="ud-flow-progress-block ud-flow-progress-block--compact">
            <div className="ud-flow-progress-head">
              <span>{FLOW_COURSE.progress}% complete</span>
              <span className="ud-flow-muted">Last activity Apr 20, 2025</span>
            </div>
            <div className="ud-flow-progress-track">
              <span style={{ width: `${FLOW_COURSE.progress}%` }} />
            </div>
          </div>
          <div className="ud-watch-curriculum">
            {SECTIONS.map((sec, idx) => (
              <details key={sec.id} className="ud-watch-module" open={idx === 0}>
                <summary className="ud-watch-module__head">
                  <span className="ud-watch-module__label">Section {idx + 1}</span>
                  <span className="ud-watch-module__title">{sec.title}</span>
                </summary>
                <ul className="ud-watch-lessons">
                  {sec.lessons.map((lesson) => (
                    <li key={lesson.name}>
                      <button
                        type="button"
                        className={`ud-watch-lesson${lesson.state === "current" ? " is-active" : ""}`}
                      >
                        <LessonIcon state={lesson.state} />
                        <span className="ud-watch-lesson__name">{lesson.name}</span>
                        <span className="ud-watch-lesson__dur">{lesson.duration}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </aside>

        <main className="ud-watch-main">
          <div className="ud-watch-player">
            <Link
              href="https://www.youtube.com/embed/1trvO6dqQUI"
              target="_blank"
              rel="noopener noreferrer"
              className="ud-watch-player__link"
            >
              <img src={assetPath("img/course/course-27.jpg")} alt="" className="ud-watch-player__poster" />
              <span className="ud-watch-player__play" aria-hidden="true">
                <i className="fa-solid fa-play" />
              </span>
            </Link>
          </div>

          <div className="ud-watch-tabs">
            <div className="ud-tabs-bar" role="tablist">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  role="tab"
                  className={`ud-tab-btn${activeTab === tab ? " is-active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="ud-watch-panel">
            {activeTab === "Overview" && (
              <>
                <h3 className="ud-flow-panel-title">About this lesson</h3>
                <p className="ud-flow-panel-text">
                  Learn how HTML structures every webpage. You will write semantic markup and preview results in the
                  browser as you follow along.
                </p>
                <h4 className="ud-flow-panel-subtitle">What you&apos;ll learn</h4>
                <ul className="ud-flow-check-list">
                  <li>HTML document structure</li>
                  <li>Semantic tags and accessibility</li>
                  <li>Linking CSS and JavaScript</li>
                </ul>
              </>
            )}
            {activeTab === "Notes" && (
              <p className="ud-flow-panel-text mb-0">
                Your lesson notes appear here. Add timestamps and highlights while you watch.
              </p>
            )}
            {activeTab === "Resources" && (
              <ul className="ud-flow-resource-list">
                {["starter-files.zip", "html-cheatsheet.pdf"].map((file) => (
                  <li key={file}>
                    <span>{file}</span>
                    <Link href="#" className="ud-text-btn">
                      Download
                    </Link>
                  </li>
                ))}
              </ul>
            )}
            {activeTab === "Q&A" && (
              <div className="ud-flow-qa-card">
                <h4 className="ud-flow-panel-subtitle mb-1">Why use semantic HTML?</h4>
                <p className="ud-flow-panel-text mb-0">Instructor reply preview — static thread for this lesson.</p>
              </div>
            )}
          </div>

          <div className="ud-watch-nav">
            <Link href="/course-resume" className="btn ud-btn-outline">
              Previous
            </Link>
            <div className="ud-watch-nav__right">
              <Link href="/student-quiz" className="btn ud-btn-outline">
                Take quiz
              </Link>
              <Link href="/course-watch" className="btn ud-btn-primary">
                Next lesson
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function LessonIcon({ state }: { state: string }) {
  if (state === "completed") return <i className="isax isax-tick-circle5 ud-watch-icon ud-watch-icon--done" />;
  if (state === "current") return <i className="isax isax-play-circle5 ud-watch-icon ud-watch-icon--current" />;
  if (state === "assignment") return <i className="isax isax-document-text ud-watch-icon" />;
  if (state === "quiz") return <i className="isax isax-message-question ud-watch-icon" />;
  return <i className="isax isax-lock ud-watch-icon ud-watch-icon--locked" />;
}
