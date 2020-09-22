import React from "react";
import { Link } from "react-router-dom";
import Routes from "./Routers";

function NavBar(props) {
  const tracks = "/tracks";
  const artists = "/artists";

  return (
    <nav>
      <Link to={tracks}>Tracks</Link>
      <Link to={artists}>Artists</Link>
      <Routes tracks={tracks} artists={artists} />
    </nav>
  );
}

export default NavBar;
