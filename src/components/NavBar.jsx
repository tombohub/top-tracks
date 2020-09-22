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
      <nav className="border-b flex justify-center">
        <ul>
          <li>
            <Link to={tracks}>Tracks</Link>
          </li>
          <li>
            <Link to={artists}>Artists</Link>
          </li>
        </ul>
      </nav>
      <Routes tracks={tracks} artists={artists} />
    </React.Fragment>
  );
}

export default NavBar;
