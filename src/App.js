import React, { Component } from "react";
import Header from "../src/Components/Header";

import informationData from "../src/information";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header informationData={informationData}/>
      </div>
    );
  }
}

export default App;