import { getCharacters, getCharacter, getNewStatus } from "../services/charactersService.js";

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
        console.log(req.params.id)
        const character = await getCharacter(req.params.id);
        res.status(200).send(character)
    } catch (err) {
        next(err)
    }
}

export const updateStatus = async (req, res, next) => {
    try {
        const response = await getNewStatus(req.params.id, req.body);
        res.status(200).send(response)
    } catch (err) {
        next(err)
    }
}