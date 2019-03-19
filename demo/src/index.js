import React, { Component } from "react";
import { render } from "react-dom";

import Example from "../../src";

class Demo extends Component {
  render() {
    return (
      <div>
        <Example
          width="1000px"
          height="1000px"
          placeholderImage="http://lorempixel.com/20/20/"
          actualImage="http://lorempixel.com/1900/1900/"
          placeholderColor="#000"
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
