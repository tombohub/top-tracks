import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import { Provider } from "./Context";

function App() {
  /* --------------------------------- Routes --------------------------------- */

  const tracks = "/tracks";
  const artists = "/artists";

  return (
    <>
      <Provider>
        <NavBar tracks={tracks} artists={artists} />
        <Main tracks={tracks} artists={artists} />
      </Provider>
    </>
  );
}

export default App;
