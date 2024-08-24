import { model, Schema } from "mongoose";

const planarsSchema = new Schema({
    id: {type: String},
    name: {type: String},
    img: {type: String},
    twoPieces: {type: String}
});

export const HSRplanars = model('planars', planarsSchema);