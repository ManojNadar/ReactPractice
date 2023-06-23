import React, { useState } from "react";

const StateFunc = () => {
  //   const [name, setname] = useState("manoj");
  const [count, setCount] = useState(0);
  function updateName() {
    // setname("nadar");

    setCount(count + 1);
  }

  console.warn("updating");
  return (
    <>
      <h2>State in React</h2>
      <h2>{count}</h2>
      {/* <button onClick={updateName}>Update</button> */}
      <button onClick={updateName}>Update</button>
    </>
  );
};

export default StateFunc;
