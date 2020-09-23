import React from "react";

function ArtistList(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ROOT = process.env.REACT_APP_API_ROOT;

  return <div>{props.country}</div>;
}

export default ArtistList;
