import React, { useContext } from "react";
import { Context } from "../Context";
import List from "./List";

/**
 * Container for Artist list
 */
function ArtistList({ country }) {
  const context = useContext(Context);

  return (
    <List data={context.artists} country={country} type="artist" />
  );
}

export default ArtistList;
