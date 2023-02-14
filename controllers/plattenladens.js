import * as Plattenladen from "../models/Plattenladen.js";

export const getAll = async (req, res) => {
    const plattenladens = await Plattenladen.getAll(req.query.search);
    res.status(200).json(plattenladens);
    console.log(req.query.search);
    /* only gives back if search query are written in get request, otherwise console.log shows undifined because its empty
     */
};
export const create = async (req, res) => {
    // const result  = await Plattenladens
    return res.status(200).json();
};
export const remove = async (req, res) => {
    // const result  = await Plattenladens
    return res.status(204).json();
};
