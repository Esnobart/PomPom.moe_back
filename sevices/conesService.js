import { HSRchar } from "../models/charactersModel.js";
import { HSRcones } from "../models/conesModel.js";

async function getCones() {
    try {
        const cones = await HSRcones.find().catch(err => {
            console.error(err);
            return null;
        });
        const conesWithChars = await Promise.all(cones.map(async (cone) => {
            const chars = await HSRchar.find({ cones: cone.id }).catch(err => {
                console.error(err);
                return [];
            });
            const charsInfo = chars.map(char => ({
                id: char.id,
                img: char.img
            }));
            return {
                ...cone._doc,
                chars: charsInfo
            };
        }));
        return conesWithChars;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}


async function getCone(id) {
    const cone = await HSRcones.findOne({ id: id }).catch(err => {
        console.error(err);
        return null
    });
    const chars = await HSRchar.find({ cones: cone.id });
    const sortedChars = cone.map(coneId => 
        chars.find(char => char.id === coneId)
    );
    const response = {
        id: cone.id,
        name: cone.name,
        img: cone.img,
        chars: sortedChars.map(char => ({
            charId: char.id,
            charName: char.name,
            charImg: char.img
        }))
    }
    return response
}

export { getCones, getCone }