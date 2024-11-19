import { Router } from "express";

import { usersSignUp, usersLogIn, usersLogOut, verifyUser } from "../controllers/usersController.js";

const usersRouter = Router();

usersRouter.post("/signup", usersSignUp);

usersRouter.patch("/login", usersLogIn);

usersRouter.patch("/logout", usersLogOut);

usersRouter.get("/verify/:verificationToken", verifyUser);

export default usersRouter;