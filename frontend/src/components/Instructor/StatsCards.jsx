const StatsCards = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-semibold text-purple-400">Total Students</h3>
      <p className="text-3xl font-bold">820+</p>
    </div>

    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-semibold text-blue-400">Courses Published</h3>
      <p className="text-3xl font-bold">12</p>
    </div>

    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-semibold text-orange-400">Monthly Revenue</h3>
      <p className="text-3xl font-bold">₹1,02,000</p>
    </div>

  </div>
);

export default StatsCards;
