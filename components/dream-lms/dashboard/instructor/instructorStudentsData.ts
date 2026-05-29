export const INSTRUCTOR_STUDENTS = [
  {
    id: "1",
    img: "img/students/student-01.jpg",
    name: "Ronald Richard",
    email: "ronald.r@example.com",
    loc: "New York",
    date: "22 Aug 2025",
    courses: 10,
  },
  {
    id: "2",
    img: "img/students/student-02.jpg",
    name: "Mona Nancy",
    email: "mona.n@example.com",
    loc: "Los Angeles",
    date: "15 Jul 2025",
    courses: 8,
  },
  {
    id: "3",
    img: "img/students/student-03.jpg",
    name: "Patrick Alleman",
    email: "patrick.a@example.com",
    loc: "Alabama",
    date: "18 Jun 2025",
    courses: 12,
  },
] as const;

export const INSTRUCTOR_STUDENT_DETAIL = {
  img: "img/students/student-01.jpg",
  name: "Thompson Hicks",
  joined: "24 May 2024",
  bio: "Hello! I'm Thompson Hicks. I'm passionate about developing innovative software solutions and analyzing classic literature.",
  courses: 10,
  about:
    "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Actively participates in discussions and completes assignments on time.",
  education: [
    { degree: "BCA — Bachelor of Computer Applications", school: "International University", years: "2004 – 2010" },
    { degree: "MCA — Master of Computer Application", school: "International University", years: "2010 – 2012" },
  ],
  enrolled: [
    { img: "img/course/course-01.jpg", title: "Information About UI/UX Design Degree", price: "$120" },
    { img: "img/course/course-02.jpg", title: "Wordpress for Beginners", price: "$140" },
  ],
  email: "jennywilson@example.com",
  address: "877 Ferry Street, Huntsville, Alabama",
  phone: "+1 (452) 125-6789",
} as const;
