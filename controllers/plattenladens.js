import * as Plattenladen from "../models/Plattenladen.js";

export const getAll = async (req, res) => {
    const plattenladens = await Plattenladen.getAll(req.query.search);
    res.status(200).json(plattenladens);
    console.log(req.query.search);
};
