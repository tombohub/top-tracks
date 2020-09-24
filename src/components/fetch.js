import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

function fetch(country, prevCountry, context) {
  const urlTracks = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${API_KEY}&format=json&limit=7`;

  const urlArtists = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${API_KEY}&format=json&limit=7`;

  function fetchTracks(urlTracks) {
    axios
      .get(urlTracks)
      .then(res => {
        const tracks = res.data.tracks.track;
        console.log("tracks axios:", tracks);
        context.setTracks(tracks);
      })
      .catch(err => console.log("error:", err));
  }

  function fetchArtists(urlArtists) {
    axios
      .get(urlArtists)
      .then(res => {
        const artists = res.data.topartists.artist;
        console.log("artists axios:", artists);
        context.setArtists(artists);
      })
      .catch(err => console.log("error:", err));
  }

  if (country !== prevCountry) {
    fetchTracks(urlTracks);
    fetchArtists(urlArtists);
    console.log("countryref:", prevCountry);
  }
}

export default fetch;
