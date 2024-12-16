import { v4 as uuidv4 } from 'uuid';

import { Users } from '../models/usersModel.js';
import { createHashPassword, checkHashPassword } from './passwordHashService.js';
import { sendLetter } from './emailService.js';

async function signUp(data) {
    const isExist = await Users.findOne({ email: data.email });
    if (isExist) throw new Error("User on this email is already exist");
    const password = await createHashPassword(data.password);
    const newUser = await Users.create({ id: uuidv4(), ...data, password, verificationToken: uuidv4() });
    if (!newUser) throw new Error("User was not created");
    newUser.password = undefined;
    await sendLetter(newUser.email, newUser.verificationToken);
    return newUser
}

async function logIn(identify, password) {
    const user = await Users.findOne({ $or: [{email: identify}, {nickname: identify}] });
    if (!user) throw new Error("User not found");
    if (user.verificationToken !== null) throw new Error("Verify your email for log in");
    const isPasswordValid = await checkHashPassword(password, user.password);
    if (!isPasswordValid) throw new Error("Invalid credentials");
    const token = signToken(user.id);
    user.token = token;
    await user.save();
    user.password = undefined;
    return user
}

async function verificationUser(token) {
    const user = await Users.findOne({ verificationToken: token });
    if (user) {
        user.verificationToken = null;
        user.verify = true;
        await user.save();
        return user
    }
    return null
}

export {signUp, logIn, verificationUser}