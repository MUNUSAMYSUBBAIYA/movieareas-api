


const createMovie = async (req, res) => {
  res.send("Create movies");
}


const getMovieS = async (req, res) => {
  res.send("Get all movie lists");
}


const getMovie = async (req, res) => {
  res.send("Get one movie");
}


const updateMovie = async (req, res) => {
  res.send("Update the movie");
}


const deleteMovie = async (req, res) => {
  res.send("Delete movie");
}

export default {
  createMovie,
  getMovieS,
  getMovie,
  updateMovie,
  deleteMovie
}