import React, { Component } from "react";
import Ninja from "./Ninja";
import Navbar from "./navbar";


class App extends Component {
  state = {
    ninjas: [
      { name: "Pallabi", age: 151, belt: "black", id: 1 },
      { name: "Vaibhav", age: 16, belt: "black", id: 2 },
      { name: "Aum", age: 7, belt: "black", id: 3 },
      { name: "Ishaan", age: 4, belt: "black", id: 4 },
    ],
  };
  render() {
    return (
      <div className="App">
      <Navbar/>
        <div className="jumbotron">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <hr className="my-4" />
        </div>
        <Ninja ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
