import { getPlanars, getPlanar } from "../sevices/planarsService";

export const getAllPlanars = async (req, res, next) => {
    try {
        const planars = await getPlanars();
        res.status(200).send(planars)
    } catch (err) {
        next(err)
    }
}

export const getPlanarsById = async (req, res, next) => {
    try {
        const planar = await getPlanar(req.params.id);
        res.status(200).send(planar)
    } catch (err) {
        next(err)
    }
}