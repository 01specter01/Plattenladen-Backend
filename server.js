import dotenv from "dotenv";
dotenv.config();

import "./lib/mongoose.js";

import express from "express";
import plattenladen from "./router/plattenladens.js";
const app = express();

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`höre auf Port ${port}`));

import logMiddleware from "./middlewares/log.js";
app.use(logMiddleware);

app.use(express.json());
app.use("/plattenladens", plattenladen);
