import express from "express";
import moviesRoutes from "./moviesRoutes";

const router = express.Router();

router.use("/movies", moviesRoutes);

export default router;
