const CourseCardMini = ({ course }) => (
  <div className="bg-[#0B1120] border border-white/10 p-5 rounded-2xl hover:border-blue-500/40 transition shadow-md">
    <h4 className="text-lg font-semibold">{course.title}</h4>

    <p className="text-gray-400 text-sm mt-1">{course.description.slice(0,60)}...</p>

    <div className="flex justify-between items-center mt-4 text-sm">
      <span>⭐ {course.rating}</span>
      <span>{course.duration}</span>
    </div>

    <Link
      to={`/player/${course.id}`}
      className="mt-4 block text-blue-400 hover:text-blue-300"
    >
      Resume →
    </Link>
  </div>
);
