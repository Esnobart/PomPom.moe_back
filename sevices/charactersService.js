import { HSRchar, HSRcones, HSRplanars, HSRrelics } from "../models/charactersModel.js";

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

async function getCharacterService(id) {
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

export { getCharacters, getCharacterService, getCones, getCone, getRelics, getRelic, getPlanars, getPlanar }