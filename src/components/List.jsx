import React from "react";

function List(props) {
  const trackHref = track =>
    `https://open.spotify.com/search/${track}/tracks`;

  const artistHref = artist =>
    `https://open.spotify.com/search/${artist}/artists`;

  return (
    <div>
      {props.country !== "" && (
        <p className="lead">
          Top 7 {props.type} in {props.country}
        </p>
      )}
      {props.data.length > 0 &&
        props.data.map((item, i) => (
          <a
            key={i}
            href={
              props.type === "track"
                ? trackHref(item.name)
                : artistHref(item.name)
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <div className="card my-2">
              <div className="card-body d-flex justify-content-between">
                <div>
                  {props.type === "track"
                    ? item.name + " by " + item.artist.name
                    : item.name}
                </div>
                <div>Search on Spotify</div>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
}

export default List;
