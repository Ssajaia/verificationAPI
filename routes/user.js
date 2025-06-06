import express from "express";

import {
  DELETEUSER,
  UPDATEUSER,
  CREATEUSER,
  READALLUSERS,
  READUSER,
} from "../controllers/crud.js";

const router = express.Router();

router.get("/", READALLUSERS);
router.get("/:id", READUSER);
router.post("/", CREATEUSER);
router.put("/:id", UPDATEUSER);
router.delete("/:id", DELETEUSER);

export default router;
