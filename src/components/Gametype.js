import React from "react";

export default props => (
  <nav className="navbar navbar-expand py-2 navstyle">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item mr-4">
        <h2>choose type</h2>
      </li>
      <li className="nav-item mr-2">
        <button
          onClick={props.setAlgo.bind(this, "square")}
          className="btn btn-success"
        >
          Square
        </button>
      </li>
      <li className="nav-item mr-2">
        <button
          onClick={props.setAlgo.bind(this, "cube")}
          className="btn btn-danger"
        >
          Cube
        </button>
      </li>
      <li className="nav-item mr-2">
        <button
          onClick={props.setAlgo.bind(this, "hexdec")}
          className="btn btn-info"
        >
          Bin-Hex
        </button>
      </li>
      <li className="nav-item mr-2">
        <button
          onClick={props.setAlgo.bind(this, "bindec")}
          className="btn btn-warning"
        >
          Bin-Dec
        </button>
      </li>
      <li className="nav-item mr-2">
        <button
          onClick={props.setAlgo.bind(this, "eins")}
          className="btn btn-primary"
        >
          Multiply
        </button>
      </li>
    </ul>
  </nav>
);
