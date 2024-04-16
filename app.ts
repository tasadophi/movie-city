import "dotenv/config";
import express, { Express } from "express";
import cors from "cors";
import mongoose from "mongoose";
import path from "path";
import router from "@/router";
import sampleData from "@/sampleData";
import MovieModel from "@/models/movieModel";

class Application {
  #app: Express = express();
  #PORT = process.env.PORT || 8000;
  #DB_URL = process.env.DB_URL as string;

  constructor() {
    this.createServer();
    this.connectToDB();
    this.configServer();
    this.configRoutes();
  }
  createServer() {
    this.#app.listen(this.#PORT, () => {
      console.log(
        `[server]: Server is running at http://localhost:${this.#PORT}`
      );
    });
  }
  connectToDB() {
    mongoose
      .connect(this.#DB_URL)
      .then((res) => console.log("MongoDB connected!!"))
      .catch((err) => console.log("Failed to connect to MongoDB", err));
  }
  configServer() {
    this.#app.use(cors({ credentials: true, origin: "*" }));
    this.#app.use(express.json());
    this.#app.use(express.urlencoded({ extended: true }));
    this.#app.use(express.static(path.join(__dirname, "..")));
  }
  configRoutes() {
    this.#app.use("/api", router);
  }
  async addDataToDb() {
    const movies = await MovieModel.find();
    if (!movies.length) {
      sampleData.map(async (movie) => {
        await MovieModel.create(movie);
      });
    }
  }
}

export default Application;
