import { model, Schema } from "mongoose";

const conesSchema = new Schema({
    id: {type: String},
    name: {type: String},
    path: {type: String},
    img: {type: [String]},
    HP: {type: String},
    ATK: {type: String},
    DEF: {type: String},
    description_name: {type: String},
    description: {type: String}
});

export const HSRcones = model('cones', conesSchema);