import express from 'express';
import { addExpense, updateExpense, deleteExpense, getAllExpenses } from '../Controllers/expensesControler.js';

const router = express.Router();

router.post('/createExpenses', addExpense);
router.put('/expensesUpddate/:id', updateExpense);
router.delete('/deleteExpenses/:id', deleteExpense);
router.get('/getAllExpens', getAllExpenses);

export default router;
