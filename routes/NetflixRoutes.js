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

router.get("/trending/:page", getTrending);
router.get("/originals/:page", getNetflixOriginals);
router.get("/popular/:page", getPopular);
router.get("/trated/:page", gettopRated);
router.get("/nowplaying/:page", getnowPlaying);
router.get("/romance/:page", getRomance);
router.get("/animation/:page", getAnimation);
router.get("/western/:page", getWestern);
router.get("/horror/:page", getHorror);
router.get("/tv/:page", getTvShows);
router.get("/action/:page", getAction);
router.get("/comedy/:page", getComedy);
router.get("/scifi/:page", getSCIFI);
router.get("/mystery/:page", getMystery);
router.get("/upcoming/:page", getUpcoming);
router.get("/movies/:id", getSingleMovies);
router.get("/recommendations/:id", getRecommedations);
router.get("/similar/:id", getSimilar);
router.get("/credits/:id", getCasts);
router.get("/videos/:id", getVideo);

module.exports = router;
