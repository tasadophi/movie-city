import { Request, Response } from "express";
import MovieModel from "@/models/movieModel";

const getAll = async (req: Request, res: Response) => {
  try {
    const movies = await MovieModel.find();
    res.status(200).json({ status: "success", data: movies });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: { message: "Some problem on getting movies, try again." },
    });
  }
};

const getOne = async (req: Request, res: Response) => {
  try {
    const movie = await MovieModel.findOne({ _id: req.params.id });
    res.status(200).json({ status: "success", data: movie });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      data: { message: "Some problem on getting movie, try again." },
    });
  }
};

const moviesController = {
  getAll,
  getOne,
};

export default moviesController;
