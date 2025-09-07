import express from "express";
import { saveDream, getDreams, updateDream, deleteDream } from "../controllers/dreamController.js";

const router = express.Router();

router.post("/", saveDream);        // Create
router.get("/", getDreams);         // Read
router.put("/:id", updateDream);    // Update
//router.delete("/:id", deleteDream); // Delete

export default router;
