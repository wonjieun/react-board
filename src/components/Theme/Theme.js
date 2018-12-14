import React, { Component } from 'react';
import ThemeBoard from './ThemeBoard';

export default class Theme extends Component {
  render() {
    return (
      <section className="thema">
        <h1 className="common_title">
          상황(테마)관리
          <a href="thema_register.jsp" className="title-120-btn">
            상황등록
          </a>
          <a
            href="thema_category.jsp"
            className="title-180-btn thema_modify_btn"
          >
            상황카테고리수정
          </a>
        </h1>

        <ThemeBoard />
      </section>
    );
  }
}
