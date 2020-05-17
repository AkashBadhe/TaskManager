import React, { Component } from "react";
import PropTypes from "prop-types";
import Routes from "./containers/Routes";

import "./App.css";

class App extends Component {
  static propTypes = {
    init: PropTypes.func,
  };

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
