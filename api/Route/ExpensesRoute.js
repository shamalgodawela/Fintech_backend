import express from 'express';
import { addExpense, updateExpense, deleteExpense } from '../Controllers/expensesControler.js';

const router = express.Router();

router.post('/createExpenses', addExpense);
router.put('/expensesUpddate/:id', updateExpense);
router.delete('/deleteExpenses/:id', deleteExpense);

export default router;
