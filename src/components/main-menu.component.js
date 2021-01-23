import React from "react";

import { Link } from "react-router-dom";

export default function MainMenu(props) {
  return (
    <ul {...props} className="list ph7">
      <li className="dib mr2">
        <Link
          to="/login"
          className="f6 link dim ph3 pv2 mb2 dib white bg-purple"
        >
          Login
        </Link>
      </li>
      <li className="dib mr2">
        <Link
          to="/dashboard"
          className="f6 link dim ph3 pv2 mb2 dib white bg-purple"
        >
          Dashboard
        </Link>
      </li>
    </ul>
  );
}
