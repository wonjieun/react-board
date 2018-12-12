import React, { Component } from "react";

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
        <article>
          <div className="thema-top_area clearfix">
            <strong className="fl">
              콜렉션명
              <select name="" id="" className="select-120">
                <option value="">욜로북스</option>
                <option value="">키즈북스</option>
                <option value="">청소년북스</option>
                <option value="">부모북스</option>
                <option value="">실버북스</option>
                <option value="">문학북스</option>
                <option value="">인문학북스</option>
              </select>
            </strong>
            <strong className="fl">
              상황카테고리
              <select name="" id="" className="select-120">
                <option value="">준비된부모</option>
              </select>
            </strong>
            <strong className="fl">
              서브카테고리
              <select name="" id="" className="select-120">
                <option value="">임신,계획</option>
              </select>
            </strong>
            <button value="적용" className="fr tall_btn">
              적용
            </button>
          </div>
          <div className="thema-top_bar clearfix">
            <button value="선택삭제" className="fl orange-100-btn">
              선택삭제
            </button>
            <select name="" id="" className="fl select-120">
              <option value="">10개씩 보기</option>
              <option value="">20개씩 보기</option>
              <option value="">50개씩 보기</option>
            </select>
            <div className="fr">
              <input
                type="text"
                className="search_input"
                placeholder="상황(테마)명 검색"
              />
              <button value="검색" className="gray-80-btn">
                검색
              </button>
            </div>
          </div>
          <table className="common_table thema_table">
            <tr>
              <th>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </th>
              <th>콜렉션명</th>
              <th>상황카테고리</th>
              <th>서브카테고리</th>
              <th>
                <em>상황(테마)명</em>
              </th>
              <th>등록콘텐츠</th>
              <th />
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" id="test01" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className="chk_wrap">
                  <input type="checkbox" className="chkbox" />
                  <span className="check" />
                </span>
              </td>
              <td>부모북스</td>
              <td>준비된 부모</td>
              <td>임신, 계획</td>
              <td>
                임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?
              </td>
              <td>20</td>
              <td className="column">
                <span className="btn_box">
                  <span className="modify">수정</span> :{" "}
                  <span className="delete">삭제</span>
                </span>
              </td>
            </tr>
          </table>
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
            src="/ecobooks_cms/img/sbbuttonTop.png"
            alt="맨 위로 이동"
            className="return-top"
          />
        </article>
      </section>
    );
  }
}
