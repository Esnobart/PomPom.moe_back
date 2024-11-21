import { signUp, logIn, verificationUser } from "../services/usersService.js";
import { Users } from "../models/usersModel.js";

export const usersSignUp = async (req, res, next) => {
    try {
        const user = await signUp(req.body);
        if (!user) throw res.status(404).json({ errMessage: "User not found"});
        res.status(201).json({ user: { nickname: user.nickname, email: user.email } })
    } catch (err) {
        next(err)
    }
}

export const usersLogIn = async (req, res, next) => {
    try {
        const user = await usersLogIn(req.body);
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}

export const usersLogOut = async (req, res, next) => {
    try {
        await Users.findOneAndUpdate({ token: req.body.token}, { token: null });
        res.status(204).json({status: "Success"})
    } catch (err) {
        next(err)
    }
}

export const verifyUser = async (req, res, next) => {
    try {
        const user = await verificationUser(req.params.verificationToken);
        if (!user) throw new Error("User not found");
        res.status(200).json({ message: 'Verification successful' })
    } catch (err) {
        next(err)
    }
}