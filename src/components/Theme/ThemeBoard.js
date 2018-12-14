import React, { Component } from "react";
import Filter from "./Filter";
import ThemeList from "./ThemeList";

import ButtonTop from "../../images/sbbuttonTop.png";

export default class ThemeBoard extends Component {
  render() {
    return (
      <article>
        <Filter />
        <ThemeList />

        <img src={ButtonTop} alt="맨 위로 이동" className="return-top" />
      </article>
    );
  }
}
