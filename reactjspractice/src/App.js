import "./App.css";
// import ClassState from "./Components/ClassState";
import Sample from "../src/Components/Sample";
// import ClassComp from "./Components/ClassComp";

// import StateFunc from "./Components/StateFunc";

function App() {
  let name = "manoj";
  // function NewUser() {
  //   return (
  //     <>
  //       <h3> new user</h3>
  //     </>
  //   );
  // }

  return (
    <div className="App">
      <h1>Hello world</h1>

      <Sample name={name} />
      {/* {20 + 30} */}
      {/* <NewUser /> */}
      {/* {NewUser()} */}
      {/* <Greet /> */}
      {/* <ClassComp /> */}
      {/* <StateFunc /> */}
      {/* <ClassState /> */}
    </div>
  );
}

// function Greet() {
//   return (
//     <>
//       <h3> Greet user</h3>
//     </>
//   );
// }
export default App;
