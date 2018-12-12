import React, { Component } from "react";
import "./components/board.css";
import "./shared/reset.css";
import "./shared/common.css";
import "./shared/contents.css";
import "./shared/contract.css";
import "./shared/expert.css";
import "./shared/main.css";
import "./shared/organ.css";
import "./shared/statistic.css";
import "./shared/user.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Theme from "./components/Theme";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Navigation />
        <Theme />
        {/* <Notice /> */}
      </>
    );
  }
}

export default App;
