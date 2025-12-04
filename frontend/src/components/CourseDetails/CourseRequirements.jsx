const CourseRequirements = ({ req }) => (
  <section>
    <h2 className="text-2xl font-bold mb-4">Requirements</h2>
    <ul className="list-disc pl-6 text-gray-300 space-y-2 marker:text-blue-500">
      {req.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </section>
);

export default CourseRequirements;
