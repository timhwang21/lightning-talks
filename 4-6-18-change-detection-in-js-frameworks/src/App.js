import React, { Component } from "react";
import { Presentation, Slide, DropDownNav } from "react-presents";
import * as slides from "./slides";
import "./App.css";

const slideArray = Object.values(slides);

const options = slideArray.map((slide, idx) => ({
  label: slide.label,
  value: idx
}));

class App extends Component {
  render() {
    return (
      <div className="App">
        <Presentation>
          {slideArray
            .map((slide, idx) => <Slide component={slide} key={idx} />)
            .concat(<DropDownNav key="nav" options={options} />)}
        </Presentation>
      </div>
    );
  }
}

export default App;
