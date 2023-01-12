import { useState } from 'react';
import './App.css';
import { Expenses } from './components/expenses/Expenses';
import { NewExpense } from './components/new-expense/NewExpense';


function App() {
  const [expenses, setExpenses] = useState([]);

  const addNewExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  }

  return (
    <div className='container'>
      <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
