import { useState } from 'react';
import styled from 'styled-components';
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
    <StyledContainer>
      <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </StyledContainer>
  );
}

export default App;

const StyledContainer = styled.div`
  max-width: 780px;
  margin: 0 auto;
`;