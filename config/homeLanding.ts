/** List-driven content for the marketing home page (`/`). */
export const benefitCards = [
  {
    shape: "img/shapes/bg-1.png",
    iconClass: "isax isax-book-1 fs-24",
    pillClass: "bg-primary-transparent",
    title: "Flexible Learning",
    body: "We believe that high-quality education should be accessible to everyone. Our pricing form in models are designed.",
  },
  {
    shape: "img/shapes/bg-2.png",
    iconClass: "isax isax-bookmark5 fs-24",
    pillClass: "bg-secondary-transparent",
    title: "Lifetime Access",
    body: "When you enroll in our courses, you're not just signing up for a temporary learning to experience you're making.",
  },
  {
    shape: "img/shapes/bg-3.png",
    iconClass: "isax isax-chart-26 fs-24",
    pillClass: "bg-skyblue-transparent",
    title: "Expert Instruction",
    body: "Our instructors are seasoned professionals with years of experience in their respective fields & Experts advice",
  },
] as const;

export const institutionLogos = [
  "img/client/01.svg",
  "img/client/02.svg",
  "img/client/03.svg",
  "img/client/04.svg",
  "img/client/05.svg",
  "img/client/06.svg",
  "img/client/07.svg",
  "img/client/02.svg",
  "img/client/03.svg",
  "img/client/04.svg",
  "img/client/05.svg",
  "img/client/06.svg",
] as const;

export const categorySlides = [
  { icon: "img/category/icons/icon-6.svg", title: "Frontend Developer" },
  { icon: "img/category/icons/icon-7.svg", title: "Jira Management" },
  { icon: "img/category/icons/icon-8.svg", title: "Figma Developer" },
  { icon: "img/category/icons/icon-9.svg", title: "Framer Developer" },
  { icon: "img/category/icons/icon-10.svg", title: "Vue js Developer" },
  { icon: "img/category/icons/icon-11.svg", title: "Shopify Developer" },
] as const;

export const featuredCourses = [
  {
    image: "img/course/course-36.jpg",
    price: "$500",
    badge: "UI/UX",
    badgeClass: "badge-soft-info",
    title: "Information About UI/UX Design Degree",
    authorImg: "img/user/user-06.jpg",
    author: "Brenda Slaton",
  },
  {
    image: "img/course/course-37.jpg",
    price: "$300",
    badge: "Productivity",
    badgeClass: "badge-soft-danger",
    title: "Learn & Create ReactJS Tech Fundamentals Apps",
    authorImg: "img/user/user-07.jpg",
    author: "David Benitez",
  },
  {
    image: "img/course/course-38.jpg",
    price: "$350",
    badge: "Management",
    badgeClass: "badge-soft-purple",
    title: "The Complete Business and Management Course",
    authorImg: "img/user/user-08.jpg",
    author: "Calvin Johnsen",
  },
  {
    image: "img/course/course-39.jpg",
    price: "$500",
    badge: "Art & Media",
    badgeClass: "badge-soft-success",
    title: "Build Creative Arts & media Course Completed",
    authorImg: "img/user/user-09.jpg",
    author: "David Benitez",
    heartIcon: "isax isax-heart5 text-danger",
  },
  {
    image: "img/course/course-37.jpg",
    price: "$300",
    badge: "Productivity",
    badgeClass: "badge-soft-danger",
    title: "Learn & Create ReactJS Tech Fundamentals Apps",
    authorImg: "img/user/user-07.jpg",
    author: "David Benitez",
    detailHref: "/course-details-2" as const,
  },
] as const;

export const brandStripLogos = [
  "img/client/08.svg",
  "img/client/09.svg",
  "img/client/10.svg",
  "img/client/11.svg",
  "img/client/12.svg",
  "img/client/13.svg",
  "img/client/08.svg",
  "img/client/09.svg",
] as const;

export const instructorCards = [
  {
    img: "img/instructor/instructor-09.jpg",
    name: "Joyce Pence",
    role: "Lead Designer",
    rating: "4.8",
  },
  {
    img: "img/instructor/instructor-10.jpg",
    name: "Edith Dorsey",
    role: "Accountant",
    rating: "5.0",
  },
  {
    img: "img/instructor/instructor-11.jpg",
    name: "Ruben Holmes",
    role: "Architect",
    rating: "4.8",
  },
  {
    img: "img/instructor/instructor-12.jpg",
    name: "Carol Magner",
    role: "Lead Designer",
    rating: "4.5",
  },
  {
    img: "img/instructor/instructor-10.jpg",
    name: "Edith Dorsey",
    role: "Accountant",
    rating: "5.0",
  },
] as const;

export const testimonialCards = [
  {
    avatar: "img/user/user-41.jpg",
    name: "Brenda Slaton",
    role: "Designer",
    quote:
      "This mentor helped me understand concepts that I had been struggling with for weeks.",
  },
  {
    avatar: "img/user/user-42.jpg",
    name: "Adrian Dennis",
    role: "Developer",
    quote: "I've learned so much from my mentor's personal experience.",
  },
  {
    avatar: "img/user/user-43.jpg",
    name: "Adrian Coztanza",
    role: "Architect",
    quote:
      "The advice was useful, but I wish my mentor had been more available for follow-up discussions.",
  },
  {
    avatar: "img/user/user-43.jpg",
    name: "Adrian Coztanza",
    role: "Architect",
    quote:
      "The advice was useful, but I wish my mentor had been more available for follow-up discussions.",
    hideAos: true,
  },
] as const;

export const faqItems = [
  { id: "One", question: "How do I enroll in a course?", show: true },
  { id: "Two", question: "How long do I have access to a course?", show: false, delay: 250 },
  { id: "Three", question: "What payment methods are accepted?", show: false, delay: 250 },
  {
    id: "Four",
    question: "Will I receive a certificate after completing a course?",
    show: false,
    delay: 250,
  },
  { id: "Five", question: "What is the purpose of this DreamLMS ?", show: false, delay: 250 },
  { id: "Six", question: "What can I do with my certificate?", show: false, delay: 250 },
] as const;

export const faqAnswer =
  "Many websites offer a Certificate of Completion for paid courses. Free courses may or may not include a certificate, depending on the platform's policies.";
