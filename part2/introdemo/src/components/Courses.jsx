import Course from "./Course";

function Courses({ courses }) {
  console.log("courses ", { courses });
  return (
    <div>
      <ul>
        {courses.map((course) => (
          <Course course={course} />
        ))}
      </ul>
    </div>
  );
}

export default Courses;