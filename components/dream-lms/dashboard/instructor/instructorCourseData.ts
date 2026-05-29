export const INSTRUCTOR_COURSES = [
  {
    id: "1",
    img: "img/instructor/instructor-table-01.jpg",
    title: "Complete HTML, CSS and Javascript Course",
    enrolled: 0,
    status: "Draft" as const,
  },
  {
    id: "2",
    img: "img/instructor/instructor-table-04.jpg",
    title: "Build Responsive Real World Websites",
    enrolled: 12,
    status: "Published" as const,
  },
  {
    id: "3",
    img: "img/instructor/instructor-table-02.jpg",
    title: "React UI Components Masterclass",
    enrolled: 4,
    status: "Pending Review" as const,
  },
  {
    id: "4",
    img: "img/instructor/instructor-table-03.jpg",
    title: "Design Systems for Teams",
    enrolled: 0,
    status: "Rejected" as const,
  },
] as const;

export const INSTRUCTOR_ANNOUNCEMENTS = [
  { id: "1", title: "Holiday schedule", body: "Campus and live sessions are closed 24–26 May. Recordings stay available.", date: "01 May 2026" },
  { id: "2", title: "New assignment rubric", body: "Updated grading criteria for UX Fundamentals — review before the next cohort.", date: "22 Apr 2026" },
  { id: "3", title: "Live Q&A this Friday", body: "Join at 3 PM EST for open office hours on the web development track.", date: "15 Apr 2026" },
] as const;

export const INSTRUCTOR_ASSIGNMENTS = [
  { id: "1", title: "Wireframe homepage", course: "UX Fundamentals", due: "18 May 2026", submissions: 12 },
  { id: "2", title: "React component library", course: "React Masterclass", due: "22 May 2026", submissions: 8 },
  { id: "3", title: "API integration project", course: "Node.js Bootcamp", due: "28 May 2026", submissions: 3 },
] as const;

export function instructorCourseStatusClass(status: string) {
  if (status === "Published") return "mw-idash__status mw-idash__status--published";
  if (status === "Draft") return "mw-idash__status mw-idash__status--draft";
  if (status === "Rejected") return "mw-idash__status mw-idash__status--rejected";
  if (status === "Pending Review") return "mw-idash__status mw-idash__status--pending";
  return "mw-idash__status";
}
