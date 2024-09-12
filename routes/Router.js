import { Router } from "express";

import { getAllChars, getCharacterById, updateStatus } from "../controllers/charactersController.js";
import { getAllCones, getConeById } from "../controllers/conesController.js";
import { getAllRelics, getRelicsById } from "../controllers/relicsController.js";
import { getAllPlanars, getPlanarsById } from "../controllers/planarsControllers.js";

const charactersRouter = Router();

charactersRouter.get("/characters", getAllChars);

charactersRouter.get("/characters/:id", getCharacterById);

charactersRouter.patch("/charecters/:id", updateStatus)

charactersRouter.get("/cones", getAllCones);

charactersRouter.get("/cones/:id", getConeById)

charactersRouter.get("/relics", getAllRelics);

charactersRouter.get("/relics/:id", getRelicsById);

charactersRouter.get("/planars", getAllPlanars);

charactersRouter.get("/planars/:id", getPlanarsById);

export default charactersRouter;