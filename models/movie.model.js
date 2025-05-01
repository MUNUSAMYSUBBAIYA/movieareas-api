import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type:String,
    required: true 
  },
  desc: {
    type:String,
    required: true
  },

  isDeleted: {
    type: Boolean,
    default: false
  },
})

const Movies = mongoose.model("Movies", movieSchema);

export default Movies