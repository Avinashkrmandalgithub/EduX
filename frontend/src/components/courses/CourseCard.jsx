import React from "react";
import { Clock, Users, Star } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Quantum Computing Fundamentals",
    category: "Technology",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    description:
      "Dive into the world of qubits, superposition, and quantum algorithms with hands-on simulations.",
    duration: "12 weeks",
    students: "8.2K",
    rating: "4.9",
    badgeColor: "bg-yellow-400/10 text-yellow-400 border-yellow-400/20",
  },
  {
    id: 2,
    title: "Neural Interface Design",
    category: "AI & Robotics",
    image:
      "https://images.unsplash.com/photo-1535378437327-1014e7696e85?auto=format&fit=crop&q=80&w=800",
    description:
      "Learn to design brain-computer interfaces and explore the frontiers of human-machine interaction.",
    duration: "8 weeks",
    students: "5.1K",
    rating: "4.8",
    badgeColor: "bg-blue-400/10 text-blue-400 border-blue-400/20",
  },
  {
    id: 3,
    title: "Space Exploration & Astrophysics",
    category: "Space Science",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    description:
      "Journey through black holes, dark matter, and the mysteries of our expanding universe.",
    duration: "16 weeks",
    students: "12.5K",
    rating: "4.9",
    badgeColor: "bg-orange-400/10 text-orange-400 border-orange-400/20",
  },
];

const CourseCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <div
          key={course.id}
          className="group relative bg-[#0B1120] border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col"
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0B1120] to-transparent opacity-90"></div>

            {/* Category Badge */}
            <span
              className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full border backdrop-blur-md ${course.badgeColor}`}
            >
              {course.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col grow">
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {course.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
              {course.description}
            </p>

            {/* Meta Data */}
            <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-6 pt-4 border-t border-white/5">
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users size={14} />
                <span>{course.students}</span>
              </div>
              <div className="flex items-center gap-1.5 ml-auto text-yellow-500">
                <Star size={14} fill="currentColor" />
                <span>{course.rating}</span>
              </div>
            </div>

            <button className="w-full py-3 px-4 text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center gap-2 group-hover:border-blue-500/50 group-hover:text-blue-400">
              Explore Course
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
