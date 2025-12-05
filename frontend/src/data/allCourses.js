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
  },

  {
    id: 2,
    title: "Java + Spring Boot Mastery",
    category: "Backend",
    badgeColor: "bg-green-500/20 border-green-500/40 text-green-300",
    price: 5999,
    oldPrice: 9999,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    instructor: "Sarah Johnson",
    rating: 4.7,
    students: "14.1K",
    duration: "36h total",
    description:
      "Become a Spring Boot engineer and build production-ready APIs.",
    learn: ["Spring Boot", "REST APIs", "Microservices"],
    content: [{ id: 1, title: "Core Java", time: "3h 40m", lectures: 20 }],
    requirements: ["Basic Java is helpful"],
  },

  {
    id: 3,
    title: "AI & Machine Learning Engineer",
    category: "AI/ML",
    badgeColor: "bg-purple-500/20 border-purple-500/40 text-purple-300",
    price: 7999,
    oldPrice: 12999,
    image: "https://plus.unsplash.com/premium_photo-1725907643701-9ba38affe7bb",
    instructor: "Dr. Emily Zhang",
    rating: 4.9,
    students: "22.8K",
    duration: "58h total",
    description: "Learn ML, Neural Networks, and build your own LLM projects.",
    learn: ["Neural networks", "Transformers", "LLM development"],
    content: [{ id: 1, title: "ML Foundations", time: "6h 15m", lectures: 35 }],
    requirements: ["Basic Python recommended"],
  },

  // -----------------------------------------
  // NEW COURSES BELOW
  // -----------------------------------------

  {
    id: 4,
    title: "Data Structures & Algorithms Bootcamp",
    category: "Programming",
    badgeColor: "bg-yellow-500/20 border-yellow-500/40 text-yellow-300",
    price: 4499,
    oldPrice: 7999,
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    instructor: "Michael Roberts",
    rating: 4.8,
    students: "16.3K",
    duration: "40h total",
    description:
      "Ace coding interviews with deep DSA knowledge and hands-on practice.",
    learn: [
      "Master DSA from basics to advanced",
      "Learn time & space complexity",
      "Crack coding interviews",
    ],
    content: [
      { id: 1, title: "Arrays & Strings", time: "3h 05m", lectures: 18 },
      { id: 2, title: "Trees & Graphs", time: "4h 45m", lectures: 25 },
    ],
    requirements: ["Basic programming knowledge"],
  },

  {
    id: 5,
    title: "UI/UX Design with Figma",
    category: "Design",
    badgeColor: "bg-pink-500/20 border-pink-500/40 text-pink-300",
    price: 3499,
    oldPrice: 5999,
    image:
      "https://images.unsplash.com/photo-1706426622953-deb20641984c?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: "Olivia Turner",
    rating: 4.6,
    students: "9.4K",
    duration: "24h total",
    description:
      "Learn UX principles and design stunning UI prototypes in Figma.",
    learn: [
      "Figma fundamentals",
      "Wireframing & prototyping",
      "Design responsive UI",
    ],
    content: [
      { id: 1, title: "Basics of Design", time: "1h 45m", lectures: 12 },
      { id: 2, title: "Figma Workshop", time: "3h 30m", lectures: 30 },
    ],
    requirements: ["No experience required"],
  },

  {
    id: 6,
    title: "DevOps & Cloud with AWS",
    category: "Cloud",
    badgeColor: "bg-orange-500/20 border-orange-500/40 text-orange-300",
    price: 7499,
    oldPrice: 12999,
    image: "https://images.unsplash.com/photo-1631624210938-539575f92e3c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: "Dr. Ryan Brooks",
    rating: 4.9,
    students: "17.6K",
    duration: "52h total",
    description:
      "Learn CI/CD pipelines, Docker, Kubernetes and AWS cloud deployments.",
    learn: [
      "CI/CD pipelines",
      "Docker & Kubernetes",
      "AWS deployment essentials",
    ],
    content: [
      { id: 1, title: "AWS Foundations", time: "3h 55m", lectures: 26 },
      { id: 2, title: "CI/CD + Docker", time: "6h 10m", lectures: 42 },
    ],
    requirements: ["Basic Linux recommended"],
  },

  {
    id: 7,
    title: "Python for Data Science",
    category: "Data Science",
    badgeColor: "bg-cyan-500/20 border-cyan-500/40 text-cyan-300",
    price: 3999,
    oldPrice: 6999,
    image:
      "https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=1162&auto=format",
    instructor: "Linda Martinez",
    rating: 4.7,
    students: "20.7K",
    duration: "38h total",
    description:
      "Learn Python, Pandas, NumPy & visualization for real-world data projects.",
    learn: [
      "NumPy, Pandas, Matplotlib",
      "Data cleaning & visualization",
      "Build ML-ready datasets",
    ],
    content: [
      { id: 1, title: "Python Basics", time: "2h 50m", lectures: 22 },
      { id: 2, title: "Data Manipulation", time: "3h 15m", lectures: 28 },
    ],
    requirements: ["No coding required"],
  },

  {
    id: 8,
    title: "Flutter Mobile App Development",
    category: "Mobile Dev",
    badgeColor: "bg-indigo-500/20 border-indigo-500/40 text-indigo-300",
    price: 5299,
    oldPrice: 9499,
    image:
      "https://plus.unsplash.com/premium_photo-1683402693577-035defb30159?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    instructor: "Daniel Carter",
    rating: 4.7,
    students: "11.2K",
    duration: "44h total",
    description:
      "Build cross-platform apps for iOS & Android using Flutter and Dart.",
    learn: ["Flutter basics", "State management", "Build real mobile apps"],
    content: [
      { id: 1, title: "Dart Fundamentals", time: "2h 25m", lectures: 16 },
      { id: 2, title: "Flutter Widgets", time: "5h 40m", lectures: 34 },
    ],
    requirements: ["Basic programming recommended"],
  },
];
