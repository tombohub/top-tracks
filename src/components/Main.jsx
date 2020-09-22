import React from "react";
import Routes from "./Routes";

function Main(props) {
  return <Routes tracks={props.tracks} artists={props.artists} />;
}

export default Main;
