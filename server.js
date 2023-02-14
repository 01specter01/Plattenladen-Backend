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

////
// look in backend lifecoding 10 && 05 for the middleware for methode
// front and backend link needs to be used:
app.use("/", express.static("./files/frontend"));
app.get("/*", (req, res) =>
    res.sendFile(__dirname + "/files/frontend/index.html")
);
///
