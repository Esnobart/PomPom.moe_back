import { Router } from "express";

import { getCharacterById } from "../controllers/charactersController.js";

const charactersRouter = Router();

charactersRouter.get("/:id", getCharacterById);

export default charactersRouter;