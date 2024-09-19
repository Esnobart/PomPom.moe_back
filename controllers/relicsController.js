import { getRelics, getRelic } from "../services/relicsServices.js";

export const getAllRelics = async (req, res, next) => {
    try {
        const relics = await getRelics();
        res.status(200).send(relics)
    } catch (err) {
        next(err)
    }
}

export const getRelicsById = async (req, res, next) => {
    try {
        const relic = await getRelic(req.params.id);
        res.status(200).send(relic)
    } catch (err) {
        next(err)
    }
}