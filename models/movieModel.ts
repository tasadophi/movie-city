import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
  movieName: { type: String, required: true },
  trailer: { type: String, required: true },
  actors: {
    type: [
      {
        name: String,
        imageUrl: String,
      },
    ],
    required: true,
  },
  comments: {
    type: [
      {
        sender: String,
        text: String,
      },
    ],
    required: true,
  },
  downloadLinks: {
    type: [
      {
        quality: Number,
        size: Number,
        link: String,
      },
    ],
    required: true,
  },
  genre: { type: String, default: "" },
  description: { type: String, required: true },
  homePageImageUrl: { type: String, default: "" },
  imdbScore: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  backgroundImageUrl: { type: String, required: true },
  popularity: { type: Number, required: true },
  top: { type: Boolean, default: 0 },
  new: { type: Boolean, default: 0 },
  __v: { type: Number, select: false },
});

const MovieModel = mongoose.model("Movie", MovieSchema);

export default MovieModel;
