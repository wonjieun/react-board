import React, { Component } from 'react';
import ThemeRow from './ThemeRow';

export default class ThemeList extends Component {
  state = {
    themes: [
      {
        collectionName: '부모북스',
        themeCategory: '준비된 부모',
        subCategory: '임신, 계획',
        themeName: '임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?',
        contentsCount: '20'
      },
      {
        collectionName: '부모북스',
        themeCategory: '준비된 부모',
        subCategory: '임신, 계획',
        themeName: '임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?',
        contentsCount: '20'
      },
      {
        collectionName: '부모북스',
        themeCategory: '준비된 부모',
        subCategory: '임신, 계획',
        themeName: '임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?',
        contentsCount: '20'
      },
      {
        collectionName: '부모북스',
        themeCategory: '준비된 부모',
        subCategory: '임신, 계획',
        themeName: '임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?',
        contentsCount: '20'
      }
    ]
  };

  componentDidMount() {
    // 무한 스크롤 활용 가능
    setTimeout(() => {
      this.setState({
        themes: [
          ...this.state.themes,
          ...this.state.themes,
          {
            collectionName: '부모북스',
            themeCategory: '준비된 부모',
            subCategory: '임신, 계획',
            themeName:
              '임신초기라서 차근차근 준비해가고 싶은데 뭐부터 해야할까요?',
            contentsCount: '10'
          }
        ]
      });
    }, 1000);
  }

  _renderThemes = () => {
    const themes = this.state.themes.map((theme, index) => {
      return (
        <ThemeRow
          key={index}
          collectionName={theme.collectionName}
          themeCategory={theme.themeCategory}
          subCategory={theme.subCategory}
          themeName={theme.themeName}
          contentsCount={theme.contentsCount}
        />
      );
    });
    return themes;
  };

  render() {
    return (
      <div>
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
          <thead>
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
          </thead>
          <tbody>{this.state.themes ? this._renderThemes() : 'Loading'}</tbody>
        </table>
        <div className="pagenation">
          <div className="page_wrap">
            <a href="#" className="pprev" />
            <a href="#" className="prev" />
            <a href="#" className="page_list">
              25 의
            </a>
            <input type="text" className="page_view" placeholder="1" />
            <a href="#" className="next" />
            <a href="#" className="nnext" />
          </div>
        </div>
      </div>
    );
  }
}
