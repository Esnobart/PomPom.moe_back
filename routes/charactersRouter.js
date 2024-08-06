import { Router } from "express";

import { getAllChars, getAllRelics, getCharacterById, getRelicsById } from "../controllers/charactersController.js";

const charactersRouter = Router();

charactersRouter.get("/characters", getAllChars);

charactersRouter.get("/characters/:id", getCharacterById);

charactersRouter.get("/relics", getAllRelics);

charactersRouter.get("/relics/:id", getRelicsById);

export default charactersRouter;