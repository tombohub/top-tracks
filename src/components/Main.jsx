import React, { useState } from "react";
import Routes from "./Routes";
import CountryInput from "./CountryInput";

/**
 *Component which holds the input field and list (tracks or artists)
 * @param {props} props from App component (passing routes)
 */
function Main(props) {
  const [country, setCountry] = useState("");

  return (
    <div className="w-50 mx-auto mt-5 text-center">
      <CountryInput onSubmit={(v) => setCountry(v)} />
      <Routes tracks={props.tracks} artists={props.artists} country={country} />
    </div>
  );
}

export default Main;
