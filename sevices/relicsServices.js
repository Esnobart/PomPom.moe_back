import { HSRchar } from "../models/charactersModel";
import { HSRrelics } from "../models/relicsModal";

async function getRelics() {
    try {
        const list = await HSRrelics.find().catch(err => {
            console.error(err)
            return null
        });
        return list
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
    const chars = await HSRchar.find({ relics: relic.id })
    const response = {
        id: relic.id,
        name: relic.name,
        img: relic.img,
        chars: chars.map(char => ({
            charId: char.id,
            charName: char.name,
            charImg: char.img
        }))
    }
    return response
}

export { getRelics, getRelic }