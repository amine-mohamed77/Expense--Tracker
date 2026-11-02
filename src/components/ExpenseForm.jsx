import  "./ExpenseForm.css";
import { useState } from "react";
function ExpenseForm({onAddExpense} ) {
    const [ name , setName] = useState("")
     const [ amount , setAmount] = useState("")
      const [ category , setCategory] = useState("")

      const handelchange=(e)=>{
        setName(e.target.value)
      }
      const handleAmountChange=(e)=>{
        setAmount(e.target.value)
      }
        const handleCategoryChange=(e)=>{
        setCategory(e.target.value)
      }
       const handleSubmit = (e) =>{
        e.preventDefault();
       const  newExpense  = {
        name: name,
        amount: Number(amount),
        category: category
       }
        onAddExpense(newExpense);
       }
  
  
  return (
   <form  onSubmit={handleSubmit}>
    <h2>Add New Expense</h2>
    <label htmlFor="Expense_Name">
        Expense Name
        <input type="text" id="Expense_Name" onChange={handelchange} value={name} />
    </label>
    <label htmlFor="Amount">
        Amount
        <input type="number"  id="Amount" onChange={handleAmountChange} value={amount}/>
    </label>
    <label htmlFor="Category">Category
       
         <select name=""  id="Category" onChange={handleCategoryChange} value={category}>
        <option value="">-- Select Category --</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
           <option value="Caffe">Caffe</option>
        <option value="Other">Other</option>
    </select>
    </label>
    <button type="submit">Add Expense</button>
   </form>
  )
}

export default ExpenseForm
