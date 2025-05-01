


const createMovie = (req, res) => {
  res.send("Create movies");
}


const getMovieS = (req, res) => {
  res.send("Get all movie lists");
}


const getMovie = (req, res) => {
  res.send("Get one movie");
}


const updateMovie = (req, res) => {
  res.send("Update the movie");
}


const deleteMovie = (req, res) => {
  res.send("Delete movie");
}

export default {
  createMovie,
  getMovieS,
  getMovie,
  updateMovie,
  deleteMovie
}