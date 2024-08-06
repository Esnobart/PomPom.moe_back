import { getCharacters, getCharacterService, getRelics, getRelic } from "../sevices/charactersService.js";

export const getAllChars = async (req, res, next) => {
    try {
        const response = await getCharacters();
        res.status(200).send(response)
    } catch (err) {
        next (err)
    }
}

export const getCharacterById = async (req, res, next) => {
    try {
        const character = await getCharacterService(req.params.id);
        res.status(200).send(character)
    } catch (err) {
        next (err)
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