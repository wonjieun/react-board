import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ThemeRow extends Component {
  static propTypes = {
    collectionName: PropTypes.string.isRequired,
    themeCategory: PropTypes.string.isRequired,
    subCategory: PropTypes.string.isRequired,
    themeName: PropTypes.string.isRequired,
    contentsCount: PropTypes.string.isRequired
  };

  render() {
    return (
      <tr>
        <td>
          <span className="chk_wrap">
            <input type="checkbox" className="chkbox" id="test01" />
            <span className="check" />
          </span>
        </td>
        <td>{this.props.collectionName}</td>
        <td>{this.props.themeCategory}</td>
        <td>{this.props.subCategory}</td>
        <td>{this.props.themeName}</td>
        <td>{this.props.contentsCount}</td>
        <td className="column">
          <span className="btn_box">
            <span className="modify">수정</span> :{' '}
            <span className="delete">삭제</span>
          </span>
        </td>
      </tr>
    );
  }
}
