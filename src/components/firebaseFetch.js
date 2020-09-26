import axios from "axios";

function firebaseFetch(country, prevCountry, context) {
  const urlTracks = `https://us-central1-top-tracks-acb92.cloudfunctions.net/fetchTracks?country=${country}`;

  const urlArtists = `https://us-central1-top-tracks-acb92.cloudfunctions.net/fetchArtists?country=${country}`;

  function fetchTracks(urlTracks) {
    axios
      .get(urlTracks)
      .then(res => {
        const tracks = res.data.tracks.track;
        console.log("tracks axios:", tracks);
        console.log(
          "country axios:",
          res.data.tracks["@attr"].country
        );
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

  // Check if the request is for new country, so the fetching doesn't repeat on rerender
  if (country !== prevCountry) {
    fetchTracks(urlTracks);
    fetchArtists(urlArtists);
    console.log("countryref:", prevCountry);
  }
}

export default firebaseFetch;
