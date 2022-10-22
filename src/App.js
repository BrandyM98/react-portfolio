import React, { Component } from "react";
import Header from "../src/Components/Header";
import About from "../src/Components/About";
import Portfolio from "../src/Components/Portfolio";
import Contact from "../src/Components/Contact";

import informationData from "../src/information";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header informationData={informationData}/>
        <About informationData={informationData}/>
        <Portfolio informationData={informationData}/>
        <Contact informationData={informationData}/>
      </div>
    );
  }
}

export default App;