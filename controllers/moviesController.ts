import { Request, Response } from "express";
import MovieModel from "@/models/movieModel";

const getAllMovies = async (req: Request, res: Response) => {
  const movies = await MovieModel.find();
  res.json({ status: "success", data: movies });
};

const moviesController = {
  getAllMovies,
};

export default moviesController;
