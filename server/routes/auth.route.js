import express from "express";
import { 
  signup,
  signin,
  sigOut,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/signout", sigOut);

export default router;