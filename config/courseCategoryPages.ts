/** Browse-by-category tab (first pane) — `course-category.html`. */
export type CategoryBrowseTile = {
  image: string;
  title: string;
  count: string;
};

export const CATEGORY_TAB_GRAPHICS: CategoryBrowseTile[] = [
  { image: "img/category/category-1.jpg", title: "Logo Design", count: "21" },
  { image: "img/category/category-2.jpg", title: "Brand Style Guides", count: "15" },
  { image: "img/category/category-3.jpg", title: "Game Art", count: "15" },
  { image: "img/category/category-4.jpg", title: "Business Cards", count: "22" },
  { image: "img/category/category-5.jpg", title: "Illustration", count: "15" },
  { image: "img/category/category-6.jpg", title: "Pattern Design", count: "15" },
  { image: "img/category/category-7.jpg", title: "Brochure Design", count: "14" },
  { image: "img/category/category-8.jpg", title: "Flyer Design", count: "15" },
  { image: "img/category/category-9.jpg", title: "Book Design", count: "12" },
];

export const CATEGORY_BROWSE_PILLS = [
  { id: "graphics", label: "Graphics & Design", target: "pills-home" },
  { id: "programming", label: "Programming & Tech", target: "pills-profile" },
  { id: "marketing", label: "Digital Marketing", target: "pills-contact" },
  { id: "video", label: "Video & Animation", target: "pills-video" },
] as const;

export type CategoryIconTile = { icon: string; title: string; count: string; href: string };

export const CATEGORY_V2_ICONS: CategoryIconTile[] = [
  { icon: "img/icons/category-icon1.svg", title: "Management", count: "156 Courses", href: "/course-details-2" },
  { icon: "img/icons/category-icon2.svg", title: "IT & Softwares", count: "214 Courses", href: "/course-details-2" },
  { icon: "img/icons/category-icon3.svg", title: "Marketing", count: "174 Courses", href: "/course-details-2" },
  { icon: "img/icons/category-icon4.svg", title: "Finance", count: "89 Courses", href: "#" },
  { icon: "img/icons/category-icon5.svg", title: "Design", count: "142 Courses", href: "/course-details" },
  { icon: "img/icons/category-icon6.svg", title: "Health", count: "56 Courses", href: "#" },
  { icon: "img/icons/category-icon7.svg", title: "Music", count: "32 Courses", href: "#" },
  { icon: "img/icons/category-icon8.svg", title: "Lifestyle", count: "64 Courses", href: "#" },
];

export type CategoryV3Card = { image: string; title: string; lessons: string };

export const CATEGORY_V3_CARDS: CategoryV3Card[] = [
  { image: "img/category/category-19.jpg", title: "Graphic Design", lessons: "45 Lessons" },
  { image: "img/category/category-20.jpg", title: "Photography", lessons: "13 Lessons" },
  { image: "img/category/category-21.jpg", title: "Medical Terminology", lessons: "21 Lessons" },
  { image: "img/category/category-22.jpg", title: "UX/UI Design", lessons: "14 Lessons" },
  { image: "img/category/category-23.jpg", title: "Personal Finance", lessons: "06 Lessons" },
  { image: "img/category/category-24.jpg", title: "Music Theory", lessons: "18 Lessons" },
  { image: "img/category/category-25.jpg", title: "Public Speaking", lessons: "09 Lessons" },
  { image: "img/category/category-26.jpg", title: "Nutrition", lessons: "11 Lessons" },
];
