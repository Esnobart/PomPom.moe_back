import { HSRchar, HSRcones, HSRplanars, HSRrelics } from "../models/charactersModel.js";

async function getCharacterService(id) {
    try {
        const char = await HSRchar.findOne({ id: id });
        if (!char) {
            console.log("char is not in list")
            return null
        }
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
        console.log(err.message);
        return null
    }
}

export default getCharacterService