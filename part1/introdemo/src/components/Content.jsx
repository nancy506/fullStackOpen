import Part from "./Part";

function Content(props) {
  return (
    <div>
      <Part partname={props.part1} exercises={props.exercises1} />
      <Part partname={props.part2} exercises={props.exercises2} />
      <Part partname={props.part3} exercises={props.exercises3} />
    </div>
  );
}

export default Content;
