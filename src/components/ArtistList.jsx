import React, { useContext, useEffect, useRef } from "react";
import { Context } from "../Context";

function ArtistList({ country }) {
  const context = useContext(Context);

  //////////////////////////// Return //////////////////////////
  return (
    <div>
      <ul>
        {context.artists &&
          context.artists.map((artist, i) => (
            <li key={i} className="item">
              {artist.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ArtistList;
