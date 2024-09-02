import { HSRchar } from "../models/charactersModel.js";
import { HSRcones } from "../models/conesModel.js";

async function getConesWithChars() {
    try {
        // Получаем все элементы из коллекции HSRcones
        const cones = await HSRcones.find().catch(err => {
            console.error(err);
            return null;
        });

        if (!cones) {
            return null;
        }

        // Проходим по каждому конусу и находим соответствующих персонажей
        const conesWithChars = await Promise.all(cones.map(async (cone) => {
            const chars = await HSRchar.find({ cones: cone.id }).catch(err => {
                console.error(err);
                return [];
            });

            // Возвращаем конус с добавленным массивом персонажей
            return {
                ...cone._doc,  // Раскрываем все свойства текущего конуса
                chars: chars   // Добавляем массив найденных персонажей
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