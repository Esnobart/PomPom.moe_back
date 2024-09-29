import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import charactersRouter from './routes/Router.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.API_KEY).then(() => {console.log("Database connection successful")}).catch((err) => {console.log(err); process.exit(1)});

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.use("/api", charactersRouter);

app.use((_, res) => {
    res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server error" } = err;
    res.status(status).json({ message });
});

app.listen(port, () => {
    console.log(`Server is running. Use our API on port: ${port}`);
});