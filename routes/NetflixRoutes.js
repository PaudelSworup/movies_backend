const express = require("express");
const {
  getTrending,
  getNetflixOriginals,
  getPopular,
  gettopRated,
  getUpcoming,
  getSingleMovies,
  getnowPlaying,
  getRecommedations,
  getSimilar,
  getCasts,
  getRomance,
  getAnimation,
  getWestern,
  getHorror,
  getTvShows,
  getAction,
  getComedy,
  getSCIFI,
  getMystery,
  getVideo,
} = require("../controllers/NetflixController");
const router = express.Router();

router.get("/trending", getTrending);
router.get("/originals", getNetflixOriginals);
router.get("/popular", getPopular);
router.get("/trated", gettopRated);
router.get("/nowplaying", getnowPlaying);
router.get("/romance", getRomance);
router.get("/animation", getAnimation);
router.get("/western", getWestern);
router.get("/horror", getHorror);
router.get("/tv", getTvShows);
router.get("/action", getAction);
router.get("/comedy", getComedy);
router.get("/scifi", getSCIFI);
router.get("/mystery", getMystery);
router.get("/upcoming", getUpcoming);
router.get("/movies/:id", getSingleMovies);
router.get("/recommendations/:id", getRecommedations);
router.get("/similar/:id", getSimilar);
router.get("/credits/:id", getCasts);
router.get("/videos/:id", getVideo);

module.exports = router;
