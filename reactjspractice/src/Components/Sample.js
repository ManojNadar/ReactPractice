import React from "react";

const Sample = (props) => {
  console.log(props);
  // let name = "manoj";

  // function alerting() {
  //   name = "nadar";
  //   alert(name);
  // }

  return (
    <>
      {/* <h2>Hello {name}</h2> */}
      {/* React.createElement("h1", null, "Without JSX"); */}
      <h2>{props.name}</h2>
      {/* <button onClick={alerting}>Click me</button>
      <button onClick={() => alerting()}>Click me 1 </button>
      <button onClick={() => alert("with arrow function")}>Click me 2</button> */}
    </>
  );
};

export default Sample;
