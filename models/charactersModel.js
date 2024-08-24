import { model, Schema } from "mongoose";

const characterSchema = new Schema({
    id: {type: String},
    name: {type: String},
    rarity: {type: String},
    path: {type: String},
    type: {type: String},
    img: {type: [String]},
    cones: {type: [String]},
    relics: {type: [String]},
    planars: {type: [String]},
    stats: {
        body: {type: String},
        boots: {type: String},
        sphere: {type: String},
        rope: {type: String}
    },
    addStats: {type: String},
    additionally: {type: String}
});

export const HSRchar = model('characters', characterSchema);