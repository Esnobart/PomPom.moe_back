import { getCharacters, getCharacter, updateNew, updateRerun } from "../sevices/charactersService.js";

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
        const character = await getCharacter(req.params.id);
        res.status(200).send(character)
    } catch (err) {
        next(err)
    }
}

export const updateNewStatus = async (req, res, next) => {
    try {
        const response = await updateNew(req.body.id, req.body.isNew);
        res.status(200).send(response)
    } catch (err) {
        next(err)
    }
}

export const updateRerunStatus = async (req, res, next) => {
    try {
        const response = await updateRerun(req.body.id, req.body.rerun);
        res.status(200).send(response)
    } catch (err) {
        next(err)
    }
}