import Movies from "../models/movie.model.js";



const createMovie = async(req, res) => {
  try {
    const movie = await Movies.create(req.body);
    res.json(movie);
    
    
  } catch (error) {
    res.status(201).json({message: "Created Successfully"})
    
  }
}


const getMovieS = async(req, res) => {
try {
  const movies = await Movies.find()
   res.json(movies);
  
} catch (error) {
  res.status(200).json({message: "Successfully get the all data from DB"})
} 
}


const getMovie = async(req, res) => {
  try {
    const movie = await Movies.findById(req.params.id);
    res.json(movie);
    //console.log(movie, 27);
    
  } catch (error) {
    res.status(200).json({message: "Successfully get particular data from DB"});
    
  }
  
}


const updateMovie = async(req, res) => {
  try {
    const movie = await Movies.findByIdAndUpdate(req.params.id, req.body);
    res.json(movie);
    //console.log(movie, 35);
    
  } catch (error) {
    res.status(200).json({message: "Successfully update data in DB"});
  }
  
  
}


const deleteMovie = async (req, res) => {
  try {
    const movie = await Movies.findByIdAndUpdate(req.params.id, {isDeleted: true});
    res.json({message: "Successfully Deleted"});
    
  } catch (error) {
    
  }
}

export default {
  createMovie,
  getMovieS,
  getMovie,
  updateMovie,
  deleteMovie
}