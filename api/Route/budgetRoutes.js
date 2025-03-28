import express from 'express';
import {createBudget, getAllBudgets, getBudgetById, updateBudget, deleteBudget} from '../Controllers/budgetController.js';

const router = express.Router();


router.post("/", createBudget);
router.get("/", getAllBudgets);
router.get("/:id", getBudgetById);
router.put("/:id", updateBudget);
router.delete("/:id", deleteBudget);

export default router;
