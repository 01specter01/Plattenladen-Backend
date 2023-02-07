import * as Plattenladen from "../models/Plattenladen.js";

export const getAll = async (req, res) => {
    const plattenladens = await Plattenladen.getAll();
    res.json(plattenladens);
};
