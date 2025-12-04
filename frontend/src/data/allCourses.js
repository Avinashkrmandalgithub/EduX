export const allCourses = [
  {
    id: 1,
    title: "Full-Stack Web Development (MERN)",
    price: 4999,
    oldPrice: 8999,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216",
    instructor: "James Parker",
    rating: 4.8,
    students: "18.4K",
    learn: [
      "Learn MongoDB, Express, React & Node",
      "Build 12 full-stack apps",
      "Master API development"
    ],
    content: [
      { id: 1, title: "HTML Basics", time: "2h 10m", lectures: 10 },
      { id: 2, title: "React Fundamentals", time: "7h 20m", lectures: 50 }
    ],
    requirements: ["Basic computer knowledge", "No coding required"]
  },
  {
    id: 2,
    title: "Java + Spring Boot Mastery",
    price: 5999,
    oldPrice: 9999,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    instructor: "Sarah Johnson",
    rating: 4.7,
    students: "14.1K",
    learn: ["Spring Boot", "REST APIs", "Microservices"],
    content: [
      { id: 1, title: "Core Java", time: "3h 40m", lectures: 20 }
    ],
    requirements: ["Basic Java is helpful"]
  },
  {
    id: 3,
    title: "AI & Machine Learning Engineer",
    price: 7999,
    oldPrice: 12999,
    image: "https://plus.unsplash.com/premium_photo-1725907643701-9ba38affe7bb",
    instructor: "Dr. Emily Zhang",
    rating: 4.9,
    students: "22.8K",
    learn: ["Neural networks", "Transformers", "LLM development"],
    content: [
      { id: 1, title: "ML Foundations", time: "6h 15m", lectures: 35 }
    ],
    requirements: ["Basic Python recommended"]
  }
];
