const CourseRequirements = ({ req = [] }) => (
  <section className="mt-6">
    <h2 className="text-2xl font-bold mb-4">Requirements</h2>

    <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-blue-500">
      {req.length > 0 ? (
        req.map((item, i) => <li key={i}>{item}</li>)
      ) : (
        <li className="text-gray-500">No prior knowledge required.</li>
      )}
    </ul>
  </section>
);

export default CourseRequirements;
