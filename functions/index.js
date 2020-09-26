const functions = require("firebase-functions");
const axios = require("axios");
const cors = require("cors")({ origin: true });
require("dotenv").config();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
const fm_key = functions.config().top_tracks.lastfm_key;

exports.helloWorld = functions.https.onRequest(
  (request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
  }
);

/**
 * Fetch tracks from Last fm
 */
exports.fetchTracks = functions.https.onRequest(
  (functionsRequest, functionsResponse) => {
    //Configuration
    const country = functionsRequest.query.country;
    const trackUrl = `http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=${country}&api_key=${fm_key}&format=json&limit=7`;

    // Getting data
    cors(functionsRequest, functionsResponse, () => {
      if (functionsRequest.method !== "GET") {
        return functionsResponse.status(401).json({
          message: "Not allowed",
        });
      }

      axios
        .get(trackUrl)
        .then(axiosResponse => {
          console.log(axiosResponse.data);
          return functionsResponse
            .status(200)
            .json(axiosResponse.data);
        })
        .catch(err => {
          return res.status(500).json({
            error: err,
          });
        });
    });
  }
);

/**
 * Fetch artists from last fm
 */
exports.fetchArtists = functions.https.onRequest(
  (functionsRequest, functionsResponse) => {
    // configuration
    const country = functionsRequest.query.country;
    const artistsUrl = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${fm_key}&format=json&limit=7`;

    // getting data
    cors(functionsRequest, functionsResponse, () => {
      if (functionsRequest.method !== "GET") {
        return functionsResponse.status(401).json({
          message: "Not allowed",
        });
      }

      axios
        .get(artistsUrl)
        .then(axiosResponse => {
          console.log(axiosResponse.data);
          return functionsResponse
            .status(200)
            .json(axiosResponse.data);
        })
        .catch(err => {
          return res.status(500).json({
            error: err,
          });
        });
    });
  }
);
