import { model, Schema } from "mongoose";

const usersSchema = new Schema({
    nickname: {type: String},
    avatar: {
        type: String,
        default: ""
    },
    email: {type: String},
    password: {type: String},
    friendList: {type: [String]},
    friendRequest: {type: [String]},
    sentRequests: {type: [String]},
    token: {
        type: String,
        default: null,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationToken: {type: String}
});

export const Users = model('users', usersSchema);