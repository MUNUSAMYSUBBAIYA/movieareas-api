import express from "express";

import movieController from "../controllers/movieController.js";

//const { createMovie, deleteMovie, getMovie, getMovieS, updateMovie } = movieController;

const movieRouter = express.Router() 


// CRUD functionality of movies
movieRouter.route("/")
.post(movieController.createMovie)
.get(movieController.getMovieS)

movieRouter.route("/:id")
.get(movieController.getMovie)
.put(movieController.updateMovie)
.delete(movieController.deleteMovie)

movieRouter.get("/", (req, res) => {
  //res.json({message: "Hello World!"});
  res.send("Get all movie lists ")

});


movieRouter.post("/", (req, res) => {
  res.send("Create a movie");

});


movieRouter.get("/:id", (req, res) => {
  res.send("Get one movie")

});


movieRouter.put("/:id", (req, res) => {
  res.send("Update a movie");

});


movieRouter.delete("/:id", (req, res) => {
  res.send("Delete a movie");

});

export default movieRouter;