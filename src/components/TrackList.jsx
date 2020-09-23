import React, { useEffect, useState } from "react";

function TrackList(props) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_ROOT = process.env.REACT_APP_API_ROOT;
  const [test, setTest] = useState(0);

  useEffect(() => {
    setTest(props.country);
    console.log(props.country);
  });

  return <div>{test}</div>;
}

export default TrackList;
