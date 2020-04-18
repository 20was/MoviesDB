import React, { Component } from "react";
//import ReactDOM, { render } from "react-dom";
import Movies from "./components/movies";

class App extends Component {
  render() {
    return (
      <main className="container" style={{ margin: 50 }}>
        <Movies />
      </main>
    );
  }
}
export default App;
