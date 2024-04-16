import express from "express";
import moviesController from "@/controllers/moviesController";

const moviesRoutes = express.Router();

moviesRoutes.get("/tops", moviesController.getTops);
moviesRoutes.get("/:id", moviesController.getOne);
moviesRoutes.get("/", moviesController.getAll);

export default moviesRoutes;
