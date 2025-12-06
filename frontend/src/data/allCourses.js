import { defaultLectures, defaultReviews } from "./coursePlayerData";

export const allCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development (MERN)",
    category: "Web Dev",
    badgeColor: "bg-blue-500/20 border-blue-500/40 text-blue-300",
    price: 4999,
    oldPrice: 8999,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    instructor: "James Parker",
    rating: 4.8,
    students: "18.4K",
    duration: "42h total",
    description: "Master MERN stack and build modern full-stack applications.",
    learn: [
      "Learn MongoDB, Express, React & Node",
      "Build 12 full-stack apps",
      "Master API development",
    ],
    content: [
      { id: 1, title: "HTML Basics", time: "2h 10m", lectures: 10 },
      { id: 2, title: "React Fundamentals", time: "7h 20m", lectures: 50 },
    ],
    requirements: ["Basic computer knowledge", "No coding required"],

    // 🔥 NEW FIELDS
    lectures: defaultLectures,
    reviews: defaultReviews,
    progress: 0,
  },
  
  // --- Your other courses below ---
];
