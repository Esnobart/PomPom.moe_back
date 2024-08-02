import getCharacterService from "../sevices/charactersService.js";

export const getCharacterById = async (req, res, next) => {
    try {
        const character = await getCharacterService(req.params.id);
        res.status(200).send(character)
    } catch (err) {
        next (err)
    }
}