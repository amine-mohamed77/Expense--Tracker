import "./ExpenseList.css";
function ExpenseList({expenses = [] , onDelete }) {


  return (
  <section className="expense-list">
  <h2>Your Expenses</h2>

  <div className="expense-items">
    {expenses.map((expense) => (
      <div className="expense-card" key={expense.id} >
        <div className="expense-info">
          <h3>{expense.name}</h3>
          <span>{expense.category}</span>
        </div>

        <p className="expense-amount">
          ${expense.amount}
        </p>
        <button onClick={() => onDelete(expense.id)}>
           Delete
          </button>
      </div>
    ))}
  </div>
  
</section>

  );
 
}

export default ExpenseList;



