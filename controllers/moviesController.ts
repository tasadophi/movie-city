import { Request, Response } from "express";

const getAllMovies = (req: Request, res: Response) => {
  res.json({ status: "success", data: [] });
};

const moviesController = {
  getAllMovies,
};

export default moviesController;
