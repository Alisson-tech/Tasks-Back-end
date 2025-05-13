import { Router } from "express";
import * as taskController from '../controllers/task.controller'

const router = Router();

router.get("/", taskController.getPaginated);
router.get("/:id", taskController.getById);
router.post("/", taskController.create);
router.put("/:id", taskController.update);
router.put("/:id/completed", taskController.updateCompleted);
router.delete("/:id", taskController.remove);

export default router;
