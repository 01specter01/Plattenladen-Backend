import { Router } from "express";
import * as plattenladens from "../controllers/plattenladens.js";
import { getSchema } from "./plattenladens.schema.js";

const router = Router();
router.get("/", validate(getSchema), plattenladens.getAll);
//
// router.post("/", validate(postSchema), plattenladens.create);
// router.delete("/", validate(deleteSchema), plattenladens.remove);
export default router;
