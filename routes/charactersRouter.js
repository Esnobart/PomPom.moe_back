import { Router } from "express";

import { getAllChars, getAllCones, getAllPlanars, getAllRelics, getCharacterById, getConeById, getPlanarsById, getRelicsById } from "../controllers/charactersController.js";

const charactersRouter = Router();

charactersRouter.get("/characters", getAllChars);

charactersRouter.get("/characters/:id", getCharacterById);

charactersRouter.get("/cones", getAllCones);

charactersRouter.get("/cones/:id", getConeById)

charactersRouter.get("/relics", getAllRelics);

charactersRouter.get("/relics/:id", getRelicsById);

charactersRouter.get("/planars", getAllPlanars);

charactersRouter.get("/planars/:id", getPlanarsById)

export default charactersRouter;