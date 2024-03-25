import React, { Component } from "react";
import Ninja from "./Ninja";

function App() {
  return (
    <div className="App">
      <h1>My first React App</h1>
      <p>Welcome!</p>
      <Ninja name="Pallabi" age="40" belt="Yellow" />
    </div>
  );
}

export default App;
