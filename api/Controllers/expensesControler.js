import Expense from '../Models/Expenses.js';

const addExpense = async (req, res) => {
  try {
    const { name, description, category, amount, date, responsiblePerson, notes } = req.body;

    if (!name || !category || !amount) {
      return res.status(400).json({ message: 'Name, Category, Amount, and Date are required.' });
    }

    if (amount <= 0) {
      return res.status(400).json({ message: 'Amount must be greater than zero.' });
    }

    const expense = new Expense({
      name,
      description,
      category,
      amount,
      date,
      responsiblePerson,
      notes
    });

    const savedExpense = await expense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    console.error('Error adding expense:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedExpense = await Expense.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json(updatedExpense);
  } catch (error) {
    console.error('Error updating expense:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      return res.status(404).json({ message: 'Expense not found' });
    }

    res.json({ message: 'Expense deleted successfully' });
  } catch (error) {
    console.error('Error deleting expense:', error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

export { addExpense, updateExpense, deleteExpense };
