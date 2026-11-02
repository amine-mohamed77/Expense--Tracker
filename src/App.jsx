
import ExpenseForm from './components/ExpenseForm';
import Header from './components/Header';
import ExpenseList from './components/ExpenseList';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    const expenseWithId = {
      ...newExpense,
      id: crypto.randomUUID()
    };

    setExpenses((prevExpenses) => [...prevExpenses, expenseWithId]);
  };

  const totalExpenses = expenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  const deleteExpense = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => {
        return expense.id !== id;
      })
    );
  };

  return (
    <>
      <Header />

      <div className="total-expenses">
        <h2>Total Expenses</h2>
        <p>${totalExpenses}</p>
      </div>

      <ExpenseForm onAddExpense={addExpense} />

      <ExpenseList
        expenses={expenses}
        onDelete={deleteExpense}
      />
    </>
  );
}

export default App;
