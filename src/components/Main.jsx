import React, {
  useState,
  useRef,
  useContext,
  useEffect,
} from "react";
import Routes from "./Routes";
import CountryInput from "./CountryInput";
import { Context } from "../Context";
import fetch from "./fetch";

/**
 *Component which holds the input field and list (tracks or artists)
 * @param {props} props from App component (passing routes)
 */
function Main(props) {
  const [country, setCountry] = useState("");
  const countryRef = useRef(country);
  const context = useContext(Context);

  console.log("conteeeeeeext:", context);

  useEffect(() => {
    fetch(country, countryRef.current, context);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <>
      <div className="mx-auto mt-3 text-center">
        <CountryInput onSubmit={v => setCountry(v)} />
        <Routes
          tracks={props.tracks}
          artists={props.artists}
          country={country}
        />
      </div>
    </>
  );
}

export default Main;
