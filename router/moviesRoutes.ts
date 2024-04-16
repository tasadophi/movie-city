import express from "express";
import moviesController from "@/controllers/moviesController";

const moviesRoutes = express.Router();

moviesRoutes.get("/", moviesController.getAll);
moviesRoutes.get("/:id", moviesController.getOne);

export default moviesRoutes;
