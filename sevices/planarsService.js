import { HSRchar } from "../models/charactersModel";
import { HSRplanars } from "../models/planarsModel";

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
    const chars = await HSRchar.find({ planars: planar.id })
    const response = {
        id: planar.id,
        name: planar.name,
        img: planar.img,
        chars: chars.map(char => ({
            charId: char.id,
            charName: char.name,
            charImg: char.img
        }))
    }
    return response
}

export { getPlanars, getPlanar }