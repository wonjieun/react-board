import React, { Component } from "react";

export default class header extends Component {
  render() {
    return (
      <header>
        <div className="header_bar">
          <strong className="header_user">관리자님</strong>
          <button className="header_btn">로그아웃</button>
        </div>
      </header>
    );
  }
}
