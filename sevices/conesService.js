import { HSRchar } from "../models/charactersModel.js";
import { HSRcones } from "../models/conesModel.js";

async function getCones() {
    try {
        const list = await HSRcones.find().catch(err => {
            console.error(err)
            return null
        });
        return list
    } catch (err) {
        console.error(err.message);
        return null
    }
}

async function getCone(id) {
    const cone = await HSRcones.findOne({ id: id }).catch(err => {
        console.error(err);
        return null
    });
    const chars = await HSRchar.find({ cones: cone.id })
    const response = {
        id: cone.id,
        name: cone.name,
        img: cone.img,
        chars: chars.map(char => ({
            charId: char.id,
            charName: char.name,
            charImg: char.img
        }))
    }
    return response
}

export { getCones, getCone }