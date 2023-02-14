import { Router } from "express";
import * as plattenladens from "../controllers/plattenladens.js";
import { getSchema, postSchema, deleteSchema } from "./plattenladens.schema.js";
import validate from "../middlewares/validate.js";
const router = Router();
router.get("/", validate(getSchema), plattenladens.getAll);
router.post("/", validate(postSchema), plattenladens.createPlatten);
router.delete("/:id", validate(deleteSchema), plattenladens.remove);
export default router;
