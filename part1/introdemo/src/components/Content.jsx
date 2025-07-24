import Part from "./Part";

function Content(props) {
  console.log(props.parts[0]);
  console.log(props.parts[1]);
  console.log(props.parts[2]);
  return (
    <div>
      <Part part = {props.parts[0]} />
      <Part part = {props.parts[1]} />
      <Part part = {props.parts[2]} />
    </div>
  );
}

export default Content;
