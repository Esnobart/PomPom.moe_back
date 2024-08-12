import { model, Schema } from "mongoose";

const relicsSchema = new Schema({
    id: {type: String},
    name: {type: String},
    img: {type: String}
});

export const HSRrelics = model('relics', relicsSchema);