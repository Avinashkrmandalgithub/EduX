const LandingStats = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 pb-20">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-orange-500">50K+</h3>
        <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
          Active Learners
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold text-orange-500">200+</h3>
        <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
          Courses
        </p>
      </div>

      <div className="text-center">
        <h3 className="text-3xl font-bold text-orange-500">98%</h3>
        <p className="text-sm text-gray-500 uppercase tracking-wider mt-1">
          Satisfaction
        </p>
      </div>
    </div>
  );
};

export default LandingStats;
