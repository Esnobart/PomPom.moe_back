import { model, Schema } from "mongoose";

const relicsSchema = new Schema({
    id: {type: String},
    name: {type: String},
    img: {type: String},
    twoPieces: {type: String},
    fourPieces: {type: String},
    description: {type: String}
});

export const HSRrelics = model('relics', relicsSchema);