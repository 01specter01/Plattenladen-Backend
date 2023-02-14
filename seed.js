import { faker } from "@faker-js/faker";
import Plattenladen from "./models/Plattenladen.js";
import "./lib/mongoose.js";

const deletePlattenladens = async () => {
    return await Plattenladen.deleteMany();
};
const createPlattenladen = async () => {
    const plattenladen = new Plattenladen({
        title: faker.lorem.sentences(1),
        artist: faker.lorem.sentences(1),
        year: faker.finance.amount(1800, 2023),
        picture: faker.image.abstract(1),
        price: faker.finance.amount(15, 25),
    });

    await plattenladen.save();
};

const createPlattenladens = async (count = 20) => {
    for (let i = 0; i < count; i++) {
        console.log("creating plattenladen: ", i + 1);
        await createPlattenladen();
    }
};

try {
    if (!process.argv.includes("doNotDelete")) {
        console.log("deleting all plattenladens...");
        await deletePlattenladens();
        console.log("done.");
    }

    console.log("creating new plattenladens...");
    const count =
        process.argv[2] === "doNotDelete" ? undefined : process.argv[2];
    await createPlattenladens(count);
    console.log("done.");

    console.log("seeding finished. happy coding!");
    process.exit(0);
} catch (error) {
    console.error(error);
    process.exit(1);
}
