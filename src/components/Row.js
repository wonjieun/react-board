import React, { Component } from "react";

export default class Row extends Component {
  render() {
    return (
      <tr>
        <td>
          <span className="chk_wrap">
            <input type="checkbox" className="chkbox" />
            <span className="check" />
          </span>
        </td>
        <td>1</td>
        <td>알려드립니다.</td>
        <td>2018.06.17</td>
        <td className="column">
          <span className="btn_box">
            <span className="delete">삭제</span>
          </span>
        </td>
      </tr>
    );
  }
}
