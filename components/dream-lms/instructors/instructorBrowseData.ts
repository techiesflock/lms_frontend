export const BROWSE_INSTRUCTORS = [
  { id: "1", img: "img/user/user-61.jpg", name: "Rolands Granger", role: "Developer", lessons: "12+", time: "169hr 20min", rating: 4.9, reviews: 200 },
  { id: "2", img: "img/user/user-62.jpg", name: "Lisa Lopezr", role: "Finance", lessons: "22+", time: "15hr 06min", rating: 4.8, reviews: 156 },
  { id: "3", img: "img/user/user-63.jpg", name: "Charles Ruizr", role: "Cloud Engineer", lessons: "18+", time: "42hr 10min", rating: 4.9, reviews: 98 },
  { id: "4", img: "img/user/user-61.jpg", name: "Maria Davis", role: "Designer", lessons: "9+", time: "88hr 00min", rating: 4.7, reviews: 74 },
  { id: "5", img: "img/user/user-62.jpg", name: "James Wilson", role: "Marketing", lessons: "30+", time: "12hr 30min", rating: 4.9, reviews: 210 },
  { id: "6", img: "img/user/user-63.jpg", name: "Emily Carter", role: "Data Science", lessons: "14+", time: "56hr 45min", rating: 4.8, reviews: 132 },
] as const;

export const PUBLIC_INSTRUCTOR_DETAIL = {
  img: "img/user/user-61.jpg",
  name: "Rolands Granger",
  role: "Developer",
  rating: 4.9,
  reviews: 200,
  bio: "I am a web developer with a vast array of knowledge in front end and back end languages, responsive frameworks, databases, and best code practices.",
  about:
    "Very well thought out and articulate communication. Clear milestones, deadlines and fast work. Patience. Infinite patience. No shortcuts.",
  lessons: "12+",
  students: 50,
  education: [
    { degree: "BCA — Bachelor of Computer Applications", school: "International University", years: "2004 – 2010" },
    { degree: "MCA — Master of Computer Application", school: "International University", years: "2010 – 2012" },
  ],
  courses: [
    { img: "img/course/course-02.jpg", title: "Wordpress for Beginners — Master Wordpress Quickly", price: "$140", tag: "Wordpress" },
    { img: "img/course/course-03.jpg", title: "Learn Angular Fundamentals From Beginning to Advance", price: "$200", tag: "Angular" },
    { img: "img/course/course-04.jpg", title: "Build Responsive Real World Websites", price: "$200", tag: "Development" },
  ],
  email: "jennywilson@example.com",
  address: "877 Ferry Street, Huntsville, Alabama",
  phone: "+1 (452) 125-6789",
} as const;
