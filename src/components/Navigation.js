import React, { Component } from "react";

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className="menu">
          <li>
            <a href="dashboard.jsp" className="logo">
              <img src="/img/logo.png" alt="에코북스 로고" />
            </a>{" "}
          </li>
          <li className="menu01">
            <a href="#">대시보드</a>
          </li>
          <li className="menu02">
            <a href="#">콘텐츠관리</a>
            <ul className="sub_menu">
              <li>
                <a href="category.jsp">도서별카테고리</a>
              </li>
              <li>
                <a href="thema_mngmn.jsp">상황(테마)관리</a>
              </li>
              <li>
                <a href="ecobooks_book.jsp">에코북스도서관리</a>
              </li>
              <li>
                <a href="kidsbooks.jsp">키즈북스</a>
              </li>
              <li>
                <a href="youthbooks.jsp">청소년북스</a>
              </li>
              <li>
                <a href="yolobooks.jsp">욜로북스</a>
              </li>
              <li>
                <a href="parentsbooks.jsp">부모북스</a>
              </li>
              <li>
                <a href="silverbooks.jsp">실버북스</a>
              </li>
              <li>
                <a href="literaturebooks.jsp">문학북스</a>
              </li>
              <li>
                <a href="humanitiesbooks.jsp">인문학북스</a>
              </li>
              <li>
                <a href="comment.jsp">댓글관리</a>
              </li>
            </ul>
          </li>
          <li className="menu03">
            <a href="expert.jsp">전문가관리</a>
          </li>
          <li className="menu04">
            <a href="#">기관관리</a>
            <ul className="sub_menu">
              <li>
                <a href="organ_info.jsp">기관정보등록</a>
              </li>
              <li>
                <a href="organ_check.jsp">기관조회</a>
              </li>
            </ul>
          </li>
          <li className="menu05">
            <a href="#">계약관리</a>
            <ul className="sub_menu">
              <li>
                <a href="contract_register.jsp">계약등록</a>
              </li>
              <li>
                <a href="contract_check.jsp">계약조회</a>
              </li>
              <li>
                <a href="delete_list.jsp">삭제내역</a>
              </li>
            </ul>
          </li>
          <li className="menu06">
            <a href="#">통계</a>
            <ul className="sub_menu">
              <li>
                <a href="user_analysis.jsp">사용자분석</a>
              </li>
              <li>
                <a href="time_stats.jsp">시간대별통계</a>
              </li>
              <li>
                <a href="book_stats.jsp">도서별통계</a>
              </li>
              <li>
                <a href="category_ranking.jsp">카테고리순위</a>
              </li>
              <li>
                <a href="thema_ranking.jsp">상황(테마)순위</a>
              </li>
              <li>
                <a href="search_ranking.jsp">검색어순위</a>
              </li>
              <li>
                <a href="keyword_ranking.jsp">키워드순위</a>
              </li>
              <li>
                <a href="device.jsp">기기별분포</a>
              </li>
            </ul>
          </li>
          <li className="menu07">
            <a href="#">게시판관리</a>
            <ul className="sub_menu">
              <li>
                <a href="faq.jsp">FAQ관리</a>
              </li>
              <li>
                <a href="notice.jsp">공지사항관리</a>
              </li>
              <li>
                <a href="inquiry.jsp">1:1문의관리</a>
              </li>
              <li>
                <a href="admin.jsp">관리자문의</a>
              </li>
            </ul>
          </li>
          <li className="menu08">
            <a href="user_mngmn.jsp">사용자관리</a>
            <ul className="sub_menu">
              <li>
                <a href="user_register.jsp">사용자등록</a>
              </li>
              <li>
                <a href="user_check.jsp">사용자조회</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="baroB_img">
              <img src="/img/baroB_logo.png" alt="바로비 로고" />
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
