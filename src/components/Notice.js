import React, { Component } from 'react';
import List from './List';

export default class Notice extends Component {
  render() {
    return (
      <section className="App">
        <h1 className="common_title">
          공지사항 조회
          <a href="notice_register.jsp" className="title-120-btn">
            새 글 등록
          </a>
        </h1>
        <article>
          <div className="top_bar clearfix">
            <button className="fl orange-100-btn">선택삭제</button>
            <div className="fr">
              <input
                type="text"
                className="w-240 search_input"
                placeholder="공지사항 검색"
              />
              <button className="gray-80-btn">검색</button>
            </div>
          </div>

          <List />

          <div className="pagenation">
            <div className="page_wrap">
              <a href="#" className="pprev" />
              <a href="#" className="prev" />
              <a href="#" className="page_list">
                25 의
              </a>
              <input type="text" className="page_view" />
              <a href="#" className="next" />
              <a href="#" className="nnext" />
            </div>
          </div>
          <img
            src="/assets/images/sbbuttonTop.png"
            alt="맨 위로 이동"
            className="return-top"
          />
        </article>
      </section>
    );
  }
}
