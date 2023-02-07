import { Router } from "express";
import * as plattenladens from "../controllers/plattenladens.js";

const router = Router();
router.get("/", plattenladens.getAll);

export default router;
