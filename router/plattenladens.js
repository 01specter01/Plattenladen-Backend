import { Router } from "express";
import * as plattenladens from "../controllers/plattenladens.js";
import {
    getSchema,
    postSchema,
    deleteSchema,
    patchSchema,
} from "./plattenladens.schema.js";
import validate from "../middlewares/validate.js";
const router = Router();
router
    .get("/", validate(getSchema), plattenladens.getAll)
    .post("/", validate(postSchema), plattenladens.create)
    .patch("/:plattenladenId", validate(patchSchema), plattenladens.update)
    .delete("/:id", validate(deleteSchema), plattenladens.remove);
export default router;
