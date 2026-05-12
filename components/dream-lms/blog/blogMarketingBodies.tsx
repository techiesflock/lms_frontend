import Link from "next/link";
import { assetPath } from "@/lib/assetPath";
import { BlogSidebar } from "@/components/dream-lms/blog/BlogSidebar";

export type BlogCardPost = {
  id: string;
  image: string;
  title: string;
  excerpt: string;
  authorImg: string;
  authorName: string;
  date: string;
  tagsLine?: string;
  badge?: string;
};

export function BlogCard({ post }: { post: BlogCardPost }) {
  return (
    <div className="blog">
      <div className="blog-image">
        <Link href="/blog-details">
          <img className="img-fluid" src={assetPath(post.image)} alt="" />
        </Link>
      </div>
      <div className="blog-item">
        {post.badge ? (
          <span className="badge bg-success mb-2">{post.badge}</span>
        ) : null}
        <h5 className="mb-2">
          <Link href="/blog-details">{post.title}</Link>
        </h5>
        <p className="text-truncate line-clamb-2">{post.excerpt}</p>
        <div className="blog-info">
          <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
            <div className="d-flex align-items-center user-profile">
              <Link href="/instructor-details" className="user-img">
                <img className="rounded-pill w-auto" src={assetPath(post.authorImg)} alt="" />
              </Link>
              <Link href="/instructor-details" className="user-name">
                {post.authorName}
              </Link>
            </div>
            <ul className="d-flex align-items-center flex-wrap gap-2">
              <li>
                <img className="me-1" src={assetPath("img/icons/calendar.svg")} alt="" />
                <p>{post.date}</p>
              </li>
              {post.tagsLine ? (
                <li>
                  <img className="me-1" src={assetPath("img/icons/tag.svg")} alt="" />
                  <p>{post.tagsLine}</p>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

const EXC =
  "Master the art of web application development with expert-led courses that cover the latest tools, frameworks, and best practices.";

export const SAMPLE_POSTS: BlogCardPost[] = [
  {
    id: "p1",
    image: "img/blog/blog-16.jpg",
    title: "Learn Web App Development from Experts in 2024",
    excerpt: EXC,
    authorImg: "img/user/user-52.jpg",
    authorName: "John Miller",
    date: "20 Apr 2024",
    tagsLine: "Programming, Web Design",
  },
  {
    id: "p2",
    image: "img/blog/blog-17.jpg",
    title: "The Complete JavaScript Course for Beginners",
    excerpt: "Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts and build real projects.",
    authorImg: "img/user/user-15.jpg",
    authorName: "Donald Vesely",
    date: "08 Apr 2024",
    tagsLine: "Programming, Web Design",
  },
  {
    id: "p3",
    image: "img/blog/blog-18.jpg",
    title: "Revolutionize Learning with a Modern LMS",
    excerpt: "Discover how a modern learning management system can transform training delivery and learner engagement.",
    authorImg: "img/user/user-52.jpg",
    authorName: "John Miller",
    date: "02 Apr 2024",
    tagsLine: "Education, LMS",
  },
  {
    id: "p4",
    image: "img/blog/blog-1.jpg",
    title: "Learn Web App Development from Experts in 2024",
    excerpt: EXC,
    authorImg: "img/user/user-52.jpg",
    authorName: "John Miller",
    date: "20 Apr 2024",
    tagsLine: "Programming, Web Design",
  },
  {
    id: "p5",
    image: "img/blog/blog-2.jpg",
    title: "The Complete JavaScript Course for Beginners",
    excerpt: "Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts...",
    authorImg: "img/user/user-15.jpg",
    authorName: "Donald Vesely",
    date: "18 Apr 2024",
    tagsLine: "Programming, Web Design",
  },
  {
    id: "p6",
    image: "img/blog/blog-3.jpg",
    title: "Revolutionize Learning with a Modern LMS",
    excerpt: "Discover how a modern learning management system can transform training delivery and learner engagement.",
    authorImg: "img/user/user-01.jpg",
    authorName: "Cedric Glenn",
    date: "15 Apr 2024",
    tagsLine: "Education, LMS",
  },
  {
    id: "p7",
    image: "img/blog/blog-7.jpg",
    title: "Learn Web App Development from Experts in 2024",
    excerpt: EXC,
    authorImg: "img/user/user-52.jpg",
    authorName: "John Miller",
    date: "23 Apr 2024",
    badge: "Education",
  },
  {
    id: "p8",
    image: "img/blog/blog-8.jpg",
    title: "Expand Your Career Opportunities With Python",
    excerpt: "Unlock limitless career opportunities by mastering Python, one of the most versatile and in-demand languages.",
    authorImg: "img/user/user-01.jpg",
    authorName: "Cedric Glenn",
    date: "20 Apr 2024",
    badge: "Guides",
  },
  {
    id: "p9",
    image: "img/blog/blog-9.jpg",
    title: "Learn Mobile Applications Development from Experts",
    excerpt: "Elevate your skills with expert-led training in mobile application development! Learn to design and deploy apps.",
    authorImg: "img/user/user-02.jpg",
    authorName: "John Reyes",
    date: "04 Apr 2024",
    badge: "Technical",
  },
  {
    id: "p10",
    image: "img/blog/blog-10.jpg",
    title: "Programming Content Guideline For Beginners",
    excerpt: "Kickstart your programming journey with beginner-friendly guidelines designed to simplify coding concepts.",
    authorImg: "img/user/user-06.jpg",
    authorName: "Lewis Devine",
    date: "10 Mar 2024",
    badge: "Guides",
  },
  {
    id: "p11",
    image: "img/blog/blog-11.jpg",
    title: "Revolutionize Learning with a Modern LMS",
    excerpt: "An LMS streamlines training and development with centralized resources, progress tracking, and flexible access.",
    authorImg: "img/user/user-08.jpg",
    authorName: "Francis Bishop",
    date: "20 Feb 2024",
    badge: "Education",
  },
  {
    id: "p12",
    image: "img/blog/blog-12.jpg",
    title: "Expand Your Career Opportunities With Python",
    excerpt: "Unlock limitless career opportunities by mastering Python, one of the most versatile and in-demand languages.",
    authorImg: "img/user/user-01.jpg",
    authorName: "Cedric Glenn",
    date: "18 Feb 2024",
    badge: "Guides",
  },
  {
    id: "p13",
    image: "img/blog/blog-13.jpg",
    title: "Learn Web App Development from Experts in 2024",
    excerpt: EXC,
    authorImg: "img/user/user-52.jpg",
    authorName: "John Miller",
    date: "12 Feb 2024",
    badge: "Education",
  },
  {
    id: "p14",
    image: "img/blog/blog-14.jpg",
    title: "The Complete JavaScript Course for Beginners",
    excerpt: "Dive into the world of JavaScript with our complete beginner-friendly course! Learn essential concepts...",
    authorImg: "img/user/user-15.jpg",
    authorName: "Donald Vesely",
    date: "05 Feb 2024",
    badge: "Technical",
  },
  {
    id: "p15",
    image: "img/blog/blog-15.jpg",
    title: "Revolutionize Learning with a Modern LMS",
    excerpt: "Discover how a modern learning management system can transform training delivery and learner engagement.",
    authorImg: "img/user/user-02.jpg",
    authorName: "John Reyes",
    date: "01 Feb 2024",
    badge: "Education",
  },
];

export function BlogGridOneBody() {
  const posts = SAMPLE_POSTS.slice(0, 3);
  return (
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          {posts.map((post) => (
            <div key={post.id} className="col-lg-9">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogTwoGridBody() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          {SAMPLE_POSTS.slice(3, 9).map((post) => (
            <div key={post.id} className="col-lg-6">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogThreeGridBody() {
  const posts = SAMPLE_POSTS.slice(6, 15);
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-xl-4 col-md-6">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function BlogCarousalBody() {
  const posts = SAMPLE_POSTS.slice(6, 9);
  return (
    <div className="content">
      <div className="container">
        <div className="blog-slider lazy row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {posts.map((post) => (
            <div key={post.id} className="col">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Three columns of stacked cards — `blog-masonry.html` layout without JS masonry. */
export function BlogMasonryBody() {
  const col1: BlogCardPost[] = [
    SAMPLE_POSTS[6],
    { ...SAMPLE_POSTS[7], id: "mason-c1-2" },
    { ...SAMPLE_POSTS[8], id: "mason-c1-3" },
  ];
  const col2: BlogCardPost[] = [
    { ...SAMPLE_POSTS[7], id: "mason-c2-1" },
    { ...SAMPLE_POSTS[6], id: "mason-c2-2" },
    { ...SAMPLE_POSTS[8], id: "mason-c2-3" },
  ];
  const col3: BlogCardPost[] = [
    SAMPLE_POSTS[8],
    { ...SAMPLE_POSTS[6], id: "mason-c3-2" },
    { ...SAMPLE_POSTS[7], id: "mason-c3-3" },
  ];
  const columns = [col1, col2, col3];
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          {columns.map((col, ci) => (
            <div key={`mcol-${ci}`} className="col-lg-4">
              {col.map((post) => (
                <div key={post.id} className="mb-4">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BlogGridCells() {
  return (
    <div className="row">
      {SAMPLE_POSTS.slice(6, 12).map((post) => (
        <div key={post.id} className="col-md-6">
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
}

export function BlogLeftSidebarBody() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <BlogSidebar />
          <div className="col-lg-8">
            <BlogGridCells />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogRightSidebarBody() {
  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <BlogGridCells />
          </div>
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}

/** Article column from `blog-details.html` (single column). */
export function BlogDetailsArticle() {
  return (
    <>
      <img className="img-fluid rounded-2" src={assetPath("img/blog/blog-detail-image.jpg")} alt="" />
      <div className="blog-info my-3">
        <ul className="d-flex align-items-center flex-wrap gap-2">
          <li>
            <div className="avatar avatar-sm rounded-pill me-2 flex-shrink-0">
              <span>
                <Link href="/instructor-details">
                  <img className="rounded-pill w-auto" src={assetPath("img/user/user-52.jpg")} alt="" />
                </Link>
              </span>
            </div>
            <p className="mb-0">
              <Link href="/instructor-details">John Miller</Link>
            </p>
          </li>
          <li>
            <img className="me-1" src={assetPath("img/icons/calendar.svg")} alt="" />
            <p className="mb-0">20 Apr 2024</p>
          </li>
          <li>
            <img className="me-1" src={assetPath("img/icons/tag.svg")} alt="" />
            <p className="mb-0">Programming, Web Design</p>
          </li>
        </ul>
      </div>
      <h5 className="mb-3">Learn Web App Development from Experts in 2024</h5>
      <p>
        Web app development continues to be one of the most sought-after skills in the tech industry, and 2024 is the
        perfect year to start your journey. With businesses across the globe increasingly relying on web applications
        for their operations, the demand for skilled developers is at an all-time high.
      </p>
      <div className="p-3 my-4 bg-light-900 blog-blockquote">
        <p className="text-gray-9 mb-0">
          To succeed in web app development, it is crucial to master a range of skills. On the frontend, knowledge of
          HTML5, CSS3, and JavaScript is foundational, along with frameworks like React or Vue.js.
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="mb-3">
            <img className="img-fluid rounded-2" src={assetPath("img/blog/blog-29.jpg")} alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="mb-3">
            <img className="img-fluid rounded-2" src={assetPath("img/blog/blog-30.jpg")} alt="" />
          </div>
        </div>
      </div>
      <p>
        One of the key advantages of starting in 2024 is the availability of advanced tools, frameworks, and learning
        resources. Frameworks like React, Angular, and Vue.js have matured, making development more efficient and
        user-friendly.
      </p>
      <p>
        If you are ready to embark on this exciting journey, now is the time to invest in your future. With expert
        mentorship, practical experience, and a commitment to continuous learning, you can unlock a world of
        opportunities in web app development in 2024 and beyond.
      </p>
      <div className="p-3 text-center text-md-start p-lg-4 my-4 bg-light-900 rounded-2 d-md-flex align-items-center">
        <div className="avatar flex-shrink-0 blog-avatar">
          <Link href="/instructor-details">
            <img className="img-fluid rounded-pill" src={assetPath("img/user/user-52.jpg")} alt="" />
          </Link>
        </div>
        <div className="ps-md-3 mt-2 mt-md-0">
          <span className="text-secondary mb-1 d-block">Author</span>
          <h5 className="mb-1 fs-18">
            <Link href="/instructor-details">Robert Hollenbeck</Link>
          </h5>
          <p className="mb-0">
            I am an experienced project manager and consultant with a rich background in digital project execution and
            freelance talent acquisition.
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <div className="previous-post d-flex flex-column">
          <Link href="#" className="fs-14 fw-medium mb-1">
            <i className="isax isax-arrow-left me-1" />
            Previous Post
          </Link>
          <span className="fs-14 d-none d-md-flex">Transform Education with the Power of an LMS</span>
        </div>
        <div className="next-post d-flex flex-column text-end">
          <Link href="#" className="fs-14 fw-medium mb-1">
            Next Post<i className="isax isax-arrow-right-1 ms-1" />
          </Link>
          <span className="fs-14 d-none d-md-flex">Revolutionize Learning with a Modern LMS</span>
        </div>
      </div>
      <div className="blog-widget">
        <h5 className="fs-18 mb-3">Latest Tags</h5>
        <div className="latest-tags">
          <ul className="tags d-flex flex-wrap">
            {["HTML", "Web Design", "Programming"].map((t) => (
              <li key={t}>
                <a href="#" className="tag rounded-1 p-2 fs-10 fw-medium d-flex">
                  {t}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="blog-reviews mb-3">
        <h5 className="mb-3 fs-18">Reviews</h5>
        <div className="review-item shadow-none mb-3">
          <div className="review-info">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <div className="d-flex align-items-center mb-2">
                <span className="avatar avatar-lg me-2 flex-shrink-0">
                  <Link href="/student-details">
                    <img src={assetPath("img/user/user-05.jpg")} className="rounded-circle" alt="" />
                  </Link>
                </span>
                <div>
                  <h5 className="fs-16 fw-medium mb-0">
                    <Link href="/student-details">Adrian Hendriques</Link>
                  </h5>
                  <div className="d-flex align-items-center flex-wrap date-info">
                    <span className="mb-0 fs-14">2 days ago</span>
                  </div>
                </div>
              </div>
              <button type="button" className="btn btn-md d-inline-flex align-items-center me-2 mb-2 text-gray-5">
                <i className="isax isax-repeat me-1" />
                Reply
              </button>
            </div>
            <p className="mb-2 mt-1">
              I highly recommend this to anyone looking to learn. Their passion for the subject and dedication to
              students make them an outstanding instructor.
            </p>
            <div className="d-inline-flex align-items-center">
              <a href="#" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14">
                <i className="isax isax-like-15 me-1" />
                21
              </a>
              <a href="#" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14">
                <i className="isax isax-dislike5 me-1" />
                50
              </a>
              <a href="#" className="text-gray-5 d-inline-flex align-items-center me-3 fs-14">
                <i className="isax isax-heart5 text-danger me-1" />
                45
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="comment">
        <h5 className="fs-18 mb-3">Leave a Comment</h5>
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label mb-1">Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <label className="form-label mb-1">Email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="form-label mb-1">Comment</label>
                <textarea className="form-control" rows={4} />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="mb-3">
                <label className="custom_check">
                  <input type="checkbox" name="blog_comment_save" />
                  <span className="checkmark" />
                  Save my name & email in this browser for the next time I comment
                </label>
              </div>
            </div>
            <div className="col-lg-12">
              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export function BlogDetailsBody() {
  return (
    <div className="blog-sec blog-details">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <BlogDetailsArticle />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogDetailsLeftSidebarBody() {
  return (
    <div className="blog-sec blog-details">
      <div className="container">
        <div className="row justify-content-center">
          <BlogSidebar />
          <div className="col-lg-8">
            <BlogDetailsArticle />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BlogDetailsRightSidebarBody() {
  return (
    <div className="blog-sec blog-details">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <BlogDetailsArticle />
          </div>
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}
