import React, { Component } from "react";
import Row from "./Row";

const notices = [
  {
    title: "공지사항 입니다.",
    date: "2018.12.10"
  },
  {
    title: "에코북스 입니다.",
    date: "2018.12.11"
  },
  {
    title: "리액트 게시판 입니다.",
    date: "2018.12.12"
  },
  {
    title: "에코북스 관리자 페이지 입니다.",
    date: "2018.12.13"
  }
];

class List extends Component {
  componentWillMount() {
    console.log("will mount");
  }

  componentDidMount() {
    console.log("did mount");
  }

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
          {notices.map((notice, index) => {
            return (
              <Row
                key={index}
                number={index + 1}
                title={notice.title}
                date={notice.date}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default List;
