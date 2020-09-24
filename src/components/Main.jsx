import React, { useState } from "react";
import Routes from "./Routes";
import CountryInput from "./CountryInput";
import { Provider } from "../Context";

/**
 *Component which holds the input field and list (tracks or artists)
 * @param {props} props from App component (passing routes)
 */
function Main(props) {
  const [country, setCountry] = useState("");

  return (
    <>
      <Provider>
        <div className="w-50 mx-auto mt-3 text-center">
          <CountryInput onSubmit={(v) => setCountry(v)} />
          <Routes
            tracks={props.tracks}
            artists={props.artists}
            country={country}
          />
        </div>
      </Provider>
    </>
  );
}

export default Main;
