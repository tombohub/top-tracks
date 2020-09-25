import React, { useContext } from "react";
import { Context } from "../Context";
import List from "./List";

/**
 *List all the top tracks in selected country
 * @param {props} props.country country name
 */
function TrackList({ country }) {
  const context = useContext(Context);

  return (
    <List data={context.tracks} country={country} type="track" />
  );
}

export default TrackList;
