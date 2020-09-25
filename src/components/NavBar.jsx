import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar(props) {
  /* -------------------------------------------------------------------------- */
  /*                                   Return                                   */
  /* -------------------------------------------------------------------------- */
  return (
    <React.Fragment>
      <nav className="navbar  justify-content-center">
        <ul className="navbar-nav w-100">
          <li className="nav-item border-bottom w-100 text-center">
            <NavLink
              className="nav-link w-100"
              activeClassName="active"
              to={props.tracks}
            >
              Tracks
            </NavLink>
          </li>
          <li className="nav-item w-100 text-center">
            <NavLink
              className="nav-link w-100"
              activeClassName="active"
              to={props.artists}
            >
              Artists
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
/* -------------------------------------------------------------------------- */
export default NavBar;
