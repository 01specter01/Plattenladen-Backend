import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});
const Plattenladen = mongoose.model("Plattenladen", schema);

export const getAll = async () => {
    const plattenladens = await Plattenladen.find();
    return plattenladens;
};
