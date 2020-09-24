import React, { useContext } from "react";
import { Context } from "../Context";

/**
 *List all the top tracks in selected country
 * @param {props} props.country country name
 */
function TrackList({ country }) {
  const context = useContext(Context);

  return (
    <div>
      Top 7 in {country}:
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
