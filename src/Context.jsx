import React, { createContext, useState } from "react";

export const Context = createContext();

export function Provider({ children }) {
  const [tracks, setTracks] = useState([]);
  const [artists, setArtists] = useState([]);
  const [country, setCountry] = useState("");

  return (
    <Context.Provider
      value={{
        tracks,
        artists,
        country,
        setTracks,
        setArtists,
        setCountry,
      }}
    >
      {children}
    </Context.Provider>
  );
}
