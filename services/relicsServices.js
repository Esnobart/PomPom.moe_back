import { HSRchar } from "../models/charactersModel.js";
import { HSRrelics } from "../models/relicsModel.js";

async function getRelics() {
    try {
        const relics = await HSRrelics.find().catch(err => {
            console.error(err)
            return null
        });
        const relicsWithChars = await Promise.all(relics.map(async (relic) => {
            const chars = await HSRchar.find({ relics: relic.id }).catch(err => {
                console.error(err);
                return [];
            });
            const charsInfo = chars.map(char => ({
                id: char.id,
                img: char.img
            }));
            return {
                ...relic._doc,
                chars: charsInfo
            };
        }));
        return relicsWithChars
    } catch (err) {
        console.error(err.message);
        return null
    }
}

async function getRelic(id) {
    const relic = await HSRrelics.findOne({ id: id }).catch(err => {
        console.error(err);
        return null
    });
    const chars = await HSRchar.find({ relics: relic.id });
    const sortedChars = relic.map(relicId => 
        chars.find(char => char.id === relicId)
    );
    const response = {
        id: relic.id,
        name: relic.name,
        img: relic.img,
        chars: sortedChars.map(char => ({
            charId: char.id,
            charName: char.name,
            charImg: char.img
        }))
    }
    return response
}

export { getRelics, getRelic }