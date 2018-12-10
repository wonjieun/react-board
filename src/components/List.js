import React, { Component } from "react";
import Row from "./Row";

class List extends Component {
  render() {
    return (
      <table className="common_table notice_table">
        <colgroup>
          <col width="50px" />
          <col width="50px" />
        </colgroup>
        <tbody>
          <tr>
            <th>
              <span className="chk_wrap">
                <input type="checkbox" className="chkbox" />
                <span className="check" />
              </span>
            </th>
            <th>번호</th>
            <th>제목</th>
            <th>등록일</th>
            <th />
          </tr>
          <Row />
          <Row />
          <Row />
        </tbody>
      </table>
    );
  }
}

export default List;
