import React, { useEffect, useState } from "react";

/**
 *List all the top tracks in selected country
 * @param {props} props.country country name
 */
function TrackList({ country }) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ROOT = process.env.REACT_APP_API_ROOT;

  useEffect(() => {
    function fetchTracks() {}

    fetchTracks();
  }, [country]);

  return <div>{country}</div>;
}

export default TrackList;
