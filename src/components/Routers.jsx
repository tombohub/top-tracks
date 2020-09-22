import React from "react";
import { Switch, Route } from "react-router-dom";
import Artist from "./Artist";
import Track from "./Track";

/**
 * Collection of routes
 * @param {props} props
 */
function Routes(props) {
  return (
    <Switch>
      <Route path={props.tracks}>
        <Track />
      </Route>
      <Route path={props.artists}>
        <Artist />
      </Route>
    </Switch>
  );
}

export default Routes;
