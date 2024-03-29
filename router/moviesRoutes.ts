import express from "express";
import moviesController from "../controllers/moviesController";

const moviesRoutes = express.Router();

moviesRoutes.get("/", moviesController.getAllMovies);

export default moviesRoutes;
