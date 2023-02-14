export const postSchema = {
    type: "object",
    properties: {
        title: { type: "string" },
        artist: { type: "string" },
        year: { type: "number" },
        picture: { type: "string" },
        price: { type: "number" },
    },
    required: ["title", "artist", "year", "picture", "price"],
    additionalProperties: false,
};

export const getSchema = {
    type: "object",
    additionalProperties: false,
};

export const deleteSchema = {
    type: "object",
    additionalProperties: false,
};
