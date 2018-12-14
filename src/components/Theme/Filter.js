import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
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
    );
  }
}
