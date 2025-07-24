
function Header(props) {
  console.log(props); // Log the props to the console for debugging
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
}

export default Header;