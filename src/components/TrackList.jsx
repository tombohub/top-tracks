import React, { useContext, useEffect, useRef, useState } from "react";
import "axios";
import axios from "axios";
import { Context } from "../Context";

/**
 *List all the top tracks in selected country
 * @param {props} props.country country name
 */
function TrackList({ country }) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ROOT = process.env.REACT_APP_API_ROOT;
  const url = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${API_KEY}&format=json&limit=7`;

  const context = useContext(Context);
  const countryRef = useRef(country);

  /**
   * Fetch the tracks from last.fm if country is changed
   */
  useEffect(() => {
    function fetchTracks() {
      axios
        .get(url)
        .then((res) => {
          const tracks = res.data.tracks.track;
          console.log("tracks axios:", tracks);
          context.setTracks(tracks);
        })
        .catch((err) => console.log("error:", err));
    }
    if (country !== countryRef.current) {
      console.log("country in if:", country, "countryref:", countryRef.current);
      console.log("context inside if efect:", context);
      fetchTracks();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, country]);

  return (
    <div>
      <ul>
        {context.tracks &&
          context.tracks.map((track, i) => (
            <li key={i} className="item">
              {track.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TrackList;
