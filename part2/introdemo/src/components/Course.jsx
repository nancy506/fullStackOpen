function Header(props) {
  console.log(props); // Log the props to the console for debugging
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

function Total({ parts }) {
  console.log({ parts }); // props is an array of objects containing the exercises i
  const total = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;
  }, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
}

function Content({ parts }) {
  console.log("parts ", { parts });
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </ul>
    </div>
  );
}

function Part({ key, name, exercises }) {
  console.log("part ", { key, name, exercises });
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  );
}

function Course(props) {
  console.log("Course props ", props);
  const { course } = props;
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default Course;
