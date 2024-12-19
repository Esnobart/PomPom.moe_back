import jwt from 'jsonwebtoken';

export function signToken(id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: 604800,
    });
};

export function checkToken(token) {
    if (!token) throw new Error(401, 'Unauthorized... no token');
    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET);
        return id
    } catch (err) {
        throw new Error('Unauthorized... error in checkToken')
    }
};