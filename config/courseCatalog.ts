/** Shared catalog rows for course grid / list marketing pages. */
export type CatalogCourseItem = {
  id: string;
  image: string;
  title: string;
  author: string;
  authorImg: string;
  listAvatar?: string;
  category: string;
  rating: string;
  level: string;
  price: string;
  discountBadge?: string;
};

export const COURSE_CATALOG_ITEMS: CatalogCourseItem[] = [
  {
    id: "1",
    image: "img/course/course-01.jpg",
    title: "Information About UI/UX Design Degree",
    author: "Brenda Slaton",
    authorImg: "img/user/user-29.jpg",
    listAvatar: "img/avatar/avatar1.jpg",
    category: "Design",
    rating: "4.9 (200 Reviews)",
    level: "Intermediate",
    price: "$120",
    discountBadge: "15% off",
  },
  {
    id: "2",
    image: "img/course/course-02.jpg",
    title: "Wordpress for Beginners - Master Wordpress Quickly",
    author: "Ana Reyes",
    authorImg: "img/user/user-30.jpg",
    listAvatar: "img/avatar/avatar2.jpg",
    category: "Wordpress",
    rating: "4.4 (160 Reviews)",
    level: "Advanced",
    price: "$140",
  },
  {
    id: "3",
    image: "img/course/course-03.jpg",
    title: "Sketch from A to Z (2024): Become an app designer",
    author: "Andrew Pirtle",
    authorImg: "img/user/user-31.jpg",
    listAvatar: "img/avatar/avatar3.jpg",
    category: "Design",
    rating: "4.6 (170 Reviews)",
    level: "Basic",
    price: "$160",
  },
  {
    id: "4",
    image: "img/course/course-04.jpg",
    title: "Build Responsive Real World Websites with Crash Course",
    author: "Christy Garner",
    authorImg: "img/user/user-32.jpg",
    listAvatar: "img/avatar/avatar4.jpg",
    category: "Programming",
    rating: "4.2 (220 Reviews)",
    level: "Advanced",
    price: "$200",
  },
  {
    id: "5",
    image: "img/course/course-05.jpg",
    title: "The Complete Business and Management Course",
    author: "Justin Gregory",
    authorImg: "img/user/user-33.jpg",
    listAvatar: "img/avatar/avatar5.jpg",
    category: "Management",
    rating: "4.8 (180 Reviews)",
    level: "Intermediate",
    price: "$168",
  },
  {
    id: "6",
    image: "img/course/course-06.jpg",
    title: "Build Creative Arts & media Course Completed",
    author: "Edith Dorsey",
    authorImg: "img/user/user-20.jpg",
    listAvatar: "img/avatar/avatar2.jpg",
    category: "Lifestyles",
    rating: "4.9 (178 Reviews)",
    level: "Basic",
    price: "$190",
  },
  {
    id: "7",
    image: "img/course/course-07.jpg",
    title: "Learn & Create ReactJS Tech Fundamentals Apps",
    author: "Calvin Johnsen",
    authorImg: "img/user/user-23.jpg",
    listAvatar: "img/avatar/avatar3.jpg",
    category: "Development",
    rating: "5.0 (154 Reviews)",
    level: "Intermediate",
    price: "$147",
  },
  {
    id: "8",
    image: "img/course/course-08.jpg",
    title: "The Complete AI-Powered Copywriting Course",
    author: "Nicole Brown",
    authorImg: "img/user/user-06.jpg",
    listAvatar: "img/avatar/avatar4.jpg",
    category: "Marketing",
    rating: "4.7 (132 Reviews)",
    level: "Intermediate",
    price: "$175",
  },
  {
    id: "9",
    image: "img/course/course-09.jpg",
    title: "Data Science Essentials with Python",
    author: "David Benitez",
    authorImg: "img/user/user-01.jpg",
    listAvatar: "img/avatar/avatar1.jpg",
    category: "Data Science",
    rating: "4.5 (98 Reviews)",
    level: "Advanced",
    price: "$210",
  },
];
