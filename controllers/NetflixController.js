const Fetch_API = require("../Reusable Func/FetchAPI");
const SingleMovies = require("../Reusable Func/getSingleMovies");

exports.getTrending = async (req, res) => {
  try {
    const trending = await Fetch_API.Trending();
    if (!trending) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: trending });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getNetflixOriginals = async (req, res) => {
  try {
    const originals = await Fetch_API.netflixOriginals();
    if (!originals) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: originals });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getPopular = async (req, res) => {
  try {
    const popular = await Fetch_API.popular();
    if (!popular) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: popular });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.gettopRated = async (req, res) => {
  try {
    const rated = await Fetch_API.topRated();
    if (!rated) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: rated });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getnowPlaying = async (req, res) => {
  try {
    const nowPlaying = await Fetch_API.nowPlaying();
    if (!nowPlaying) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: nowPlaying });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getUpcoming = async (req, res) => {
  try {
    const upcoming = await Fetch_API.upComing();
    if (!upcoming) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: upcoming });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getAction = async (req, res) => {
  try {
    const action = await Fetch_API.actionMovies();
    if (!action) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: action });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getComedy = async (req, res) => {
  try {
    const comedy = await Fetch_API.comedyMovies();
    if (!comedy) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: comedy });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getMystery = async (req, res) => {
  try {
    const mystery = await Fetch_API.mysteryMovies();
    if (!mystery) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: mystery });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getHorror = async (req, res) => {
  try {
    const horror = await Fetch_API.horrorMovies();
    if (!horror) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: horror });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getRomance = async (req, res) => {
  try {
    const romance = await Fetch_API.romanceMovies();
    if (!romance) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: romance });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getSCIFI = async (req, res) => {
  try {
    const scifi = await Fetch_API.scfiMovies();
    if (!scifi) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: scifi });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getWestern = async (req, res) => {
  try {
    const western = await Fetch_API.westernMovies();
    if (!western) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: western });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getAnimation = async (req, res) => {
  try {
    const animation = await Fetch_API.animationMovies();
    if (!animation) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: animation });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getTvShows = async (req, res) => {
  try {
    const tv = await Fetch_API.fetchTV();
    if (!tv) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: tv });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getSingleMovies = async (req, res) => {
  try {
    const singleMovies = await SingleMovies(req.params.id);
    if (!singleMovies) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: singleMovies });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getRecommedations = async (req, res) => {
  try {
    const recommendations = await Fetch_API.Recommendations(req.params.id);
    if (!recommendations) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: recommendations });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getSimilar = async (req, res) => {
  try {
    const similar = await Fetch_API.similar(req.params.id);
    if (!similar) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: similar });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getCasts = async (req, res) => {
  try {
    const cast = await Fetch_API.Casts(req.params.id);
    if (!cast) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, casts: cast.slice(0, 15) });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};

exports.getVideo = async (req, res) => {
  try {
    const video = await Fetch_API.videos(req.params.id);
    if (!video) {
      throw new Error("Something went wrong");
    }
    return res.status(200).json({ success: true, movies: video });
  } catch (err) {
    return res.status(400).json({ success: false, error: err.message });
  }
};