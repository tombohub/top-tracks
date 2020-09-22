import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  /* --------------------------------- Render --------------------------------- */

  return (
    <React.Fragment>
      <nav className="navbar justify-content-center">
        <ul className="nav w-100">
          <li className="nav-item border-bottom w-100 text-center">
            <Link className="nav-link w-100" to={props.tracks}>
              Tracks
            </Link>
          </li>
          <li className="nav-item w-100 text-center">
            <Link className="nav-link w-100" to={props.artists}>
              Artists
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
