import React, { Component } from "react";
import PropTypes from "prop-types";
export default class Row extends Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  };

  render() {
    console.log(this.props);
    return (
      <tr>
        <td>
          <span className="chk_wrap">
            <input type="checkbox" className="chkbox" />
            <span className="check" />
          </span>
        </td>
        <td>{this.props.number}</td>
        <td>{this.props.title}</td>
        <td>{this.props.date}</td>
        <td className="column">
          <span className="btn_box">
            <span className="delete">삭제</span>
          </span>
        </td>
      </tr>
    );
  }
}
