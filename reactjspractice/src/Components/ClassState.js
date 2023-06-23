import React, { Component } from "react";

export class ClassState extends Component {
  constructor() {
    super();
    this.state = {
      name: "manoj",
      data: 0,
    };
  }

  changeName() {
    // alert("change name");
    // this.setState({ name: "nadar" });
    this.setState({ data: this.state.data + 1 });
  }

  render() {
    return (
      <>
        {/* <h1>Class State {this.state.name}</h1> */}
        <h1>Class State {this.state.data}</h1>
        <button onClick={() => this.changeName()}>change name</button>
      </>
    );
  }
}

export default ClassState;
