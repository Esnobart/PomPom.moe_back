import { HSRchar } from "../models/charactersModel.js";
import { HSRplanars } from "../models/planarsModel.js";

async function getPlanars() {
    try {
        const list = await HSRplanars.find().catch(err => {
            console.error(err)
            return null
        });
        return list
    } catch (err) {
        console.error(err.message);
        return null
    }
}

async function getPlanar(id) {
    const planar = await HSRplanars.findOne({ id: id }).catch(err => {
        console.error(err);
        return null
    });
    const chars = await HSRchar.find({ planars: planar.id });
    const sortedChars = planar.map(planarId => 
        chars.find(char => char.id === planarId)
    );
    const response = {
        id: planar.id,
        name: planar.name,
        img: planar.img,
        chars: sortedChars.map(char => ({
            charId: char.id,
            charName: char.name,
            charImg: char.img
        }))
    }
    return response
}

export { getPlanars, getPlanar }