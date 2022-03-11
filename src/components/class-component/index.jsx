import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "qwerty",
      class: "phaedra",
    };
    console.log("constructot");
  }

  componentDidMount() {
    this.setState({ name: "arslan" });
    console.log("component did mount!!");
  }

  render() {
    console.log("Render!!!");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.state.class}</h1>
        <button onClick={() => this.setState({ class: "whatever" })}>hit me</button>
      </div>
    );
  }
}

export default ClassComponent;
