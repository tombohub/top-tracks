import React, { useEffect, useState } from "react";

/**
 *List all the top tracks in selected country
 * @param {props} props.country country name
 */
function TrackList({ country }) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ROOT = process.env.REACT_APP_API_ROOT;
  const [test, setTest] = useState("");

  const tracks = {
    momo: "makaroni",
    tito: "babaroni",
    country: country,
  };

  useEffect(() => {
    function fetchTracks() {
      alert("heloo");
    }

    fetchTracks();
  }, [country]);

  return <div>{test}</div>;
}

export default TrackList;
