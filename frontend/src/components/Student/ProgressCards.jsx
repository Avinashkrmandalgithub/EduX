const ProgressCards = () => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
    
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-semibold mb-2 text-blue-400">Active Courses</h3>
      <p className="text-3xl font-bold">3</p>
    </div>

    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-semibold mb-2 text-purple-400">Hours Learned</h3>
      <p className="text-3xl font-bold">42h</p>
    </div>

    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
      <h3 className="text-lg font-semibold mb-2 text-orange-400">Certificates</h3>
      <p className="text-3xl font-bold">1</p>
    </div>

  </div>
);

export default ProgressCards;
