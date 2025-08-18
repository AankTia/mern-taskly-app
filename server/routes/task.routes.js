import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  createTask,
  deleteTask,
  getTask,
  getTasksByUser,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();

router.get("/:id", verifyToken, getTask);
router.get("/user/:id", verifyToken, getTasksByUser);
router.post("/create", verifyToken, createTask);
router.patch("/:id", verifyToken, updateTask);
router.delete("/:id", verifyToken, deleteTask);

export default router;
