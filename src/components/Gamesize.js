import React, { Component } from "react";

export default class GameSize extends Component {
  handleClick = e => {
    this.props.setSize(e.target.value);
  };
  render() {
    return (
      <nav className="navbar navbar-expand py-3 navstyle">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item mr-4">
            <h2>choose size</h2>
          </li>
          <li className="nav-item mr-2">
            <button
              value="4"
              onClick={this.handleClick}
              className="btn btn-success"
            >
              4 x 4
            </button>
          </li>
          <li className="nav-item mr-2">
            <button
              onClick={this.handleClick}
              className="btn btn-danger"
              value="6"
            >
              6 x 6
            </button>
          </li>
          <li className="nav-item mr-2">
            <button
              value="8"
              onClick={this.handleClick}
              className="btn btn-info"
            >
              8 x 8
            </button>
          </li>
        </ul>
      </nav>
    );
  }
}
