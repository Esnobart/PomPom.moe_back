import { model, Schema } from "mongoose";

const conesSchema = new Schema({
    id: {type: String},
    name: {type: String},
    img: {type: String}
});

export const HSRcones = model('cones', conesSchema);