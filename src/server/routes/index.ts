import { Router } from "express";
import { StatusCodes } from "http-status-codes";

import { CityController } from "../controllers/cidades"

const router = Router();

router.get("/teste", (req, res) => {
  res.send("Hello, World!");
});

router.post("/cidades", CityController.createBodyValidator, CityController.create); 

export { router };
