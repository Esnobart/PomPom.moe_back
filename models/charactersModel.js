import { model, Schema } from "mongoose";

const characterSchema = new Schema({
    id: {type: String},
    name: {type: String},
    img: {type: String},
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

const relicsSchema = new Schema({
    id: {type: String},
    name: {type: String},
    img: {type: String}
});

const conesSchema = new Schema({
    id: {type: String},
    name: {type: String},
    img: {type: String}
});

const planarsSchema = new Schema({
    id: {type: String},
    name: {type: String},
    img: {type: String}
});

export const HSRchar = model('characters', characterSchema);

export const HSRcones = model('cones', conesSchema);

export const HSRrelics = model('relics', relicsSchema);

export const HSRplanars = model('planars', planarsSchema);