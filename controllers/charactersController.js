import { getCharacters, getCharacterService, getRelics, getRelic, getPlanars, getPlanar, getCones, getCone } from "../sevices/charactersService.js";

export const getAllChars = async (req, res, next) => {
    try {
        const response = await getCharacters();
        res.status(200).send(response)
    } catch (err) {
        next(err)
    }
}

export const getCharacterById = async (req, res, next) => {
    try {
        const character = await getCharacterService(req.params.id);
        res.status(200).send(character)
    } catch (err) {
        next(err)
    }
}

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