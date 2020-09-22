import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import CountryInput from "./components/CountryInput";

function App() {
  return (
    <>
      <NavBar />
      <CountryInput />;
    </>
  );
}

export default App;
