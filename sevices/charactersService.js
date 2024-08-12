import { HSRchar } from "../models/charactersModel";
import { HSRcones } from "../models/conesModel";
import { HSRrelics } from "../models/relicsModal";
import { HSRplanars } from "../models/planarsModel";

async function getCharacters() {
    try {
        const list = await HSRchar.find().catch(err => {
            console.error(err)
            return null
        });
        return list
    } catch (err) {
        console.error(err.message);
        return null
    }
}

async function getCharacter(id) {
    try {
        const char = await HSRchar.findOne({ id: id }).catch(err => {
            console.error(err)
            return null
        });
        const cones = await HSRcones.find({ id: { $in: char.cones } });
        const relics = await HSRrelics.find({ id: { $in: char.relics } });
        const planars = await HSRplanars.find({ id: { $in: char.planars } });
        const response = {
            character: {
                id: char.id,
                name: char.name,
                img: char.img,
                cones: cones.map(cone => ({
                    id: cone.id,
                    name: cone.name,
                    img: cone.img
                })),
                relics: relics.map(relic => ({
                    id: relic.id,
                    name: relic.name,
                    img: relic.img
                })),
                planars: planars.map(planar => ({
                    id: planar.id,
                    name: planar.name,
                    img: planar.img
                })),
                stats: char.stats,
                addStats: char.addStats,
                additionally: char.additionally
            }
        }
        return response
    } catch (err) {
        console.error(err.message);
        return null
    }
}

export { getCharacters, getCharacter }