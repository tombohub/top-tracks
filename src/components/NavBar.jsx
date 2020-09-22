import React from "react";
import { Link } from "react-router-dom";
import Routes from "./Routers";

function NavBar(props) {
  /* --------------------------------- Routes --------------------------------- */

  const tracks = "/tracks";
  const artists = "/artists";

  /* --------------------------------- Render --------------------------------- */

  return (
    <React.Fragment>
      <nav className="navbar justify-content-center">
        <ul className="nav w-100">
          <li className="nav-item border-bottom w-100 text-center">
            <Link className="nav-link w-100" to={tracks}>
              Tracks
            </Link>
          </li>
          <li className="nav-item w-100 text-center">
            <Link className="nav-link w-100" to={artists}>
              Artists
            </Link>
          </li>
        </ul>
      </nav>
      <Routes tracks={tracks} artists={artists} />
    </React.Fragment>
  );
}

export default NavBar;
