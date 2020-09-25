import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../Context";
import List from "./List";

function ArtistList({ country }) {
  const context = useContext(Context);

  return (
    <List data={context.artists} country={country} type="artist" />
  );
}

export default ArtistList;
