import { getCones, getCone } from "../sevices/conesService";

export const getAllCones = async (req, res, next) => {
    try {
        const cones = await getCones();
        res.status(200).send(cones)
    } catch (err) {
        next(err)
    }
}

export const getConeById = async (req, res, next) => {
    try {
        const cone = await getCone(req.params.id);
        res.status(200).send(cone)
    } catch (err) {
        next(err)
    }
}