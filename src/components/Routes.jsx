import React from "react";
import { Switch, Route } from "react-router-dom";
import TrackList from "./TrackList";
import ArtistList from "./ArtistList";

/**
 * Collection of routes
 * @param {props} props for passing routes
 */
function Routes(props) {
  return (
    <Switch>
      <Route path={props.tracks}>
        <TrackList country={props.country} />
      </Route>
      <Route path={props.artists}>
        <ArtistList country={props.country} />
      </Route>
    </Switch>
  );
}

export default Routes;
