import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import CountryInput from "./components/CountryInput";
import Main from "./components/Main";

function App() {
  /* --------------------------------- Routes --------------------------------- */

  const tracks = "/tracks";
  const artists = "/artists";

  return (
    <>
      <NavBar tracks={tracks} artists={artists} />
      <CountryInput />
      <Main tracks={tracks} artists={artists} />
    </>
  );
}

export default App;
