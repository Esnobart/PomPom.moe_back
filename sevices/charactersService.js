import { HSRchar } from "../models/charactersModel.js";
import { HSRcones } from "../models/conesModel.js";
import { HSRrelics } from "../models/relicsModal.js";
import { HSRplanars } from "../models/planarsModel.js";

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
        console.log('Searching for character with id:', id);
        const char = await HSRchar.findOne({ id: id }).catch(err => {
            console.error(err);
            return null;
        });

        const sortByOriginalOrder = (originalIds, items) => 
            originalIds.map(id => items.find(item => item.id === id));

        const [cones, relics, planars] = await Promise.all([
            HSRcones.find({ id: { $in: char.cones } }),
            HSRrelics.find({ id: { $in: char.relics } }),
            HSRplanars.find({ id: { $in: char.planars } })
        ]);

        const sortedCones = sortByOriginalOrder(char.cones, cones);
        const sortedRelics = sortByOriginalOrder(char.relics, relics);
        const sortedPlanars = sortByOriginalOrder(char.planars, planars);

        const response = {
            id: char.id,
            name: char.name,
            img: char.img,
            cones: sortedCones.map(({ id, name, img }) => ({ id, name, img })),
            relics: sortedRelics.map(({ id, name, img }) => ({ id, name, img })),
            planars: sortedPlanars.map(({ id, name, img }) => ({ id, name, img })),
            stats: char.stats,
            addStats: char.addStats,
            additionally: char.additionally
        };

        return response;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

async function getNewStatus(id, newData) {
    try {
        const { isNewCharacter, rerun } = newData;
        if (typeof isNewCharacter === 'boolean') {
            return await HSRchar.findOneAndUpdate({ id: id }, {isNewCharacter}, {new: true});
        }
        if (typeof rerun === 'boolean') {
            return await HSRchar.findOneAndUpdate({ id: id }, {rerun}, {new: true});
        }
        return null
    } catch (err) {
        console.error(err.message);
        return null
    }
}

export { getCharacters, getCharacter, getNewStatus }